#!/usr/bin/python3
"""
module that returns the JSON representation of an object
"""

import json


def to_json_string(my_obj):
    """JSON representation of a string"""
    return json.dumps(my_obj)
