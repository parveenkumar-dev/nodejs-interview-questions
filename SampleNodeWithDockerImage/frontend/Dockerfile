# In dockerfile, list of instruction need to follow based on your project

# this is node image will be used as base image to create this Dockerfile. Basicaly this act as OS for this Dockerfile
FROM node:14.16.0-alpine3.13

# RUN command on base Image
RUN addgroup app && adduser -S -G app app
USER app

WORKDIR /app
COPY package*.json ./
RUN npm install
# COPY command to copy files from local system onto docker image
COPY . .

EXPOSE 3000

CMD ["npm", "start"]