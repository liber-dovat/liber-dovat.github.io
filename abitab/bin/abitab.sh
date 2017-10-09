#!/bin/bash

# http://www.joyofdata.de/blog/using-linux-shell-web-scraping/

# echo "https://www.fanfiction.net/s/11068842/1/My-Little-Piece-of-ROTG" |
#    wget -O- -i- |
#    hxnormalize -x |
#    hxselect -i "div.storytextp" "#profile_top" > storytextp.html
#    # |  
#    # lynx -stdin -dump > storytextp
# 'https://www.abitab.com.uy/innovaportal/v/582/11/abitab/agencia-11_06?local=582'
# 'https://www.abitab.com.uy/innovaportal/v/307/11/abitab/agencia-06_01?local=307'
# LINKS=(
# 'https://www.abitab.com.uy/innovaportal/v/582/11/abitab/agencia-11_06',
# 'https://www.abitab.com.uy/innovaportal/v/307/11/abitab/agencia-06_01'
# )

# el parametro -c omite los tags

FILENAME="locales.js"

URLLOCALES="https://www.abitab.com.uy/innovaportal/v/11702/11/abitab/locales"

LOCALES=$(echo $URLLOCALES | wget -q -O- -i- | hxnormalize -x) 
AGENCIAS=$(echo $LOCALES | hxselect -i "#numagencias > option" | grep -oP 'value="https.*?"' | sed -e 's/value="//g'| sed -e 's/"//g')

declare -a LINKS 

LINKS=($(python ./parse_agencias.py $AGENCIAS | tr -d '[],'))

# LINKS=(
# 'https://www.abitab.com.uy/innovaportal/v/553/11/abitab/agencia-58_05',
# 'https://www.abitab.com.uy/innovaportal/v/302/11/abitab/agencia-04_01',
# 'https://www.abitab.com.uy/innovaportal/v/582/11/abitab/agencia-11_06'
# )

echo "var sitios = [" >> "$FILENAME"

# para cada agencia
for i in "${LINKS[@]}"
do
  # echo $i >> "$FILENAME"
  PAGINA=$(echo $i | wget -q -O- -i- | hxnormalize -x)
  COL=$(echo $PAGINA | hxselect -i ".columna2" | sed -e 's/&nbsp;//g')
  NUMERO=$(echo $COL | hxselect -i -c "h1" | sed -e 's/[\. ]//g')
  DETALLE=$(echo $COL | hxselect -i -c ".detalle")
  DIRECCION=$(echo $DETALLE | grep -oP "Direcci.*?</span>.*?<span>" | sed -e 's/Direcci.*<\/span>//g' | sed -e 's/<.*>//g')
  TELEFONO=$(echo $DETALLE | grep -oP "\d{4}\.?\s?\d{2}\s?\d{2}" | sed -e 's/[\. ]//g' | sed 's/^\(.\{4\}\)/\1 /' )

  LATLONG=$(echo $PAGINA | hxselect -i ".fila2")
  LATITUDSTR=$(echo $LATLONG | grep -o "latitude=parseFloat('-[0-9]*\.[0-9]*')")
  LATITUDNUM=$(echo $LATITUDSTR | grep -oP "\-\d*\.\d*")
  LONGITUDSTR=$(echo $LATLONG | grep -o "longitude=parseFloat('.*-[0-9]*\.[0-9]*,\?[0-9]*')")
  LONGITUDNUM=$(echo $LONGITUDSTR | grep -oP "\-\d*\.\d*")

  # ["55/04 Ejido 1000 esq. Av. Gonzalo Ramírez Tel: 29019246/47",-34.912321,-56.186084,abitab],
  OUTSTRING="['$NUMERO $DIRECCION - Tel: $TELEFONO',$LATITUDNUM,$LONGITUDNUM],"

  # echo $NUMERO >> "$FILENAME"
  # echo $DIRECCION >> "$FILENAME"
  # echo $TELEFONO >> "$FILENAME"
  # echo $LATITUDNUM >> "$FILENAME"
  # echo $LONGITUDNUM >> "$FILENAME"

  # echo $LATLONG >> "$FILENAME"
  # echo $LONGITUDSTR >> "$FILENAME"
  # echo $LONGITUDNUM >> "$FILENAME"
  # echo "\n" >> "$FILENAME"

  if ! [[ -z "${DIRECCION// }" ]]; then
    echo $OUTSTRING >> "$FILENAME"
  fi
  
done 

echo "];" >> "$FILENAME"

unset LINKS
