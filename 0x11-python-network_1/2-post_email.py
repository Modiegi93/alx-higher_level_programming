#!/usr/bin/python3
"""takes in a URL and an email, sends a POST request to the passed URL
with the email as a parameter, and displays the body of the response
(decoded in utf-8)
"""
from urllib.request import Request, urlopen
from urllib.parse import urlencode
from sys import argv


if __name__ == "__main__":
    url = argv[1]
    email = argv[2]
    data = urlencode({"email": email}).encode("utf-8")
    req = Request(url, data)

    with urlopen(req) as response:
        body = response.read().decode("utf-8")
        print(body)
