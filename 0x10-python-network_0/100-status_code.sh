#!/bin/bash
# sends a request to a URL passed as an argument, and displays only
curl -o /dev/null -sw "%{http_code}" $1
