#!/usr/bin/python3

"""
lists all State objects from the database hbtn_0e_6_usa
"""

import sys
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from model_state import Base, State

if __name__ == '__main__':

    if len(sys.argv) != 4:
        print("""Usage: {} <mysql username> <mysql password>
              <database name>""".format(sys.argv[0]))
        sys.exit(1)

        engine = create_engine("mysql://{}:{}@localhost:3306/{}".format(
                               sys.argv[1], sys.argv[2], sys.argv[3]))
        Base.metadata.create_all(engine)

        Session = sessionmaker(bind=engine)
        session = Session()

        states = session.query(State).order_by(State.id).all()
        for state in states:
            print("{}: {}".format(state.id, state.name))

        session.close()
        engine.dispose
