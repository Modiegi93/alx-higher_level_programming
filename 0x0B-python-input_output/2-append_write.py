#!/usr/bin/python3

'''
module to append text to file
'''

def append_write(filename="", text=""):
    ''' append text to a file '''
    with open(filename, 'a') as open_file:
        count = open_file.write(text)
    return count
