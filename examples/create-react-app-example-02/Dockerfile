FROM node:12-alpine
WORKDIR /app

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --silent
