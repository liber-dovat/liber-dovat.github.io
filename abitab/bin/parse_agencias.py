#!/usr/bin/python

import sys

# print 'Number of arguments:', len(sys.argv), 'arguments.'
# print 'Argument List:', str(sys.argv)

sys.stdout.write('[')

largo = len(sys.argv)

for i in range(1, largo):
  sys.stdout.write(sys.argv[i])
  if i == largo:
    sys.stdout.write(']')
  else:
    sys.stdout.write(', ')
