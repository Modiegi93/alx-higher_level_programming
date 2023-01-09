#!/usr/bin/python3
"""
Module for MyList
"""

class MyList(list):
    """MyList class."""

    def print_sorted(self):
        """Print the list sorted."""
        print(sorted(self))
