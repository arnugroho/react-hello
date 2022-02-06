#!/bin/bash

#
# /**
# *@Author Akbar Riyan Nugroho
# */
#

# 1.
# Build image..
docker build -t arnugroho/hello --no-cache .

# 2.
# run and create container
# with open port
docker run -d --name=helloapp1 -p 3000:3000 arnugroho/hello

# diferent port
docker run -d --name=helloapp2 -p 5000:3000 arnugroho/hello
