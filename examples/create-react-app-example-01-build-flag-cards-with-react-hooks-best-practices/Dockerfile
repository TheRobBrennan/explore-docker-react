
# base image
FROM node:12-alpine

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --silent
