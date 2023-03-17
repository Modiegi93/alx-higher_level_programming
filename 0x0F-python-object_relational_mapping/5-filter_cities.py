#!/usr/bin/python3

"""
takes in the name of a state as an argument and lists all cities
of that state, using the database hbtn_0e_4_usa
"""
import MySQLdb
import sys


if __name__ == '__main__':
    db = MySQLdb.connect(host="localhost", port=3306, user=sys.argv[1],
                         passwd=sys.argv[2], db=sys.argv[3])
    cur = db.cursor()
    cur.execute("""SELECT cities.name FROM states
                INNER JOIN cities ON states.id = cities.state_id
                WHERE states.name = %s
                ORDER BY cities.id ASC""", (sys.argv[4],))

    results = cur.fetchall()
    print(", ".join([city[0] for city in results]))

    cur.close()
    db.close
