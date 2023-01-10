#!/usr/bin/python3

"""
module that writes a string to a file
and returns number of characters written
"""

def write_file(filename="", text=""):
    """writes a string to a file and returns
    number of characters written"""
    with open(filename, 'w') as open_file:
        open_file.write(text)
        count = open_file.tell()
    return count
