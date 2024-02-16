# Node image, this image comes with nodejs and npm already installed
# this is node image will be used as base image to create this Dockerfile. Basicaly this act as OS for this Dockerfile
FROM node:18

# Working dir for your application inside docker
# set working directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# COPY package*.json /app
# COPY all project content to docker space [here . means its inside WORKDIR (/app)]
COPY . .

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

EXPOSE 5000
CMD npm start