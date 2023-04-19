#!/usr/bin/python3

def add_tuple(tuple_a=(), tuple_b=()):
    """Add two tuples"""
    a = tuple_a[:2] + (0,) * (2 - len(tuple_a))
    b = tuple_b[:2] + (0,) * (2 - len(tuple_b))
    sum_0 = a[0] + b[0]
    sum_1 = a[1] + b[1]
    return (sum_0, sum_1)
