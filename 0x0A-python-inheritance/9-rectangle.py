#!/usr/bin/python3

"""
module for BaseGeometry/Rectangle.
"""

BaseGeometry = __import__('7-base_geometry').BaseGeometry

class Rectangle(BaseGeometry):
    """ class Rectangle inherited from BaseGeometry"""

    def __init__(self, width, height):
        """Initialize"""
        self.integer_validator("width", width)
        self.integer_validator("height", height)
        self.__width = width
        self.__height = height

    def area(self):
        """Return the area"""
        return self.__width * self.__height

    def __str__(self):
        """Return string"""
        return "[Retangle] " + str(self.__width) + "/" + str(self.__height)
