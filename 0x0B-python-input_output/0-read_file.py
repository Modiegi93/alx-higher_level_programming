#!/usr/bin/python3

'''
module to read and print contents of a file
'''

def read_file(filename=""):
    ''' read a text file and print contents '''
    with open(filename) as open_file:
        contents = open_file.read()
    print(contents, end="")

