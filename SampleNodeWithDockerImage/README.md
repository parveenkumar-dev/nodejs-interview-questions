This application contained, sample nodejs frontend and backend with Dockerfile for each. Docker-compose.yml file will run by using those Dockerfile images.

# Docker
Docker allows you to package an application with its environment and all of its dependencies into a "box", called a container.

# Advantage of Docker
- Use docker for running multiple containers at once for your application.
- For eg, we have application containing Frontend, Backend, Mongodb & redis, so we have to go and run server for each part of the application.
- By using docker we don't need to do that much, Just create docker-compose.yaml file on your root of the project and add docker images & dependencies and hit `docker-compose up` command. It will start every server.

# JSON vs YAML 
- Its both different ways of representing data
- You can covert JSON to YAML or vice-versa
- Parsing yaml file is little bit slower then parsing JSON file. Parser doesn't know weather value is string or number so everytime it will evaluate it.

# Dockerfile vs docker-compose.yml file
Dockerfile - The Dockerfile is used to build a Docker image of your application. This image contains all the dependencies that your application requires.
docker-compose.yml - It will run the container by using those docker Images. It will be helpful to run/manage multiple container in single file.
https://docs.docker.com/compose/gettingstarted/
Using `docker run -p 8080:8080 -d IMAGE-NAME` {-p is mapping public to private port, -d is detached mode to run in background} run single container.

# Kubernetes
Kubernetes cluster consiste of number of nodes. Each node is having its own docker host with multiple running containers inside it.
If one node fails, you application still running on another node.
There is master node who manages all node orchasteration.

# Build Image
* Create image on local
* `docker build . -t image-name`
* Create & tag image with your name & push to dockerhub
* `docker build -f Dockerfile -t username/image-name` {username is your user on dockerhub} and then `docker push username/image-name`
* if its not working do docker login & enter username/password

# Commands
docker pull nginx [It will pull nginx image from dockerhub]
docker run nginx [It will pull nginx image from dockerhub and run the container]
docker ps [shlistow all running container]
docker ps -a [list all container that stopped/exited]
docker images [list all images]
docker exec c1a189777 cat /etc/*release* [execute command on running container, c1a189777 is container id]
docker run redis:4.0 [4.0 is version, also called tag]
docker logs c1a189777 [show container logs]
docker inspect c1a189777 [to find out internal/private IP of running container or container details]

# Port mapping
Using port mapping we can access container. Port mapping means, mapping container internal port with external port
Do it for eg. docker run -p 8080:8080 jenkins/jenkins

# Volume mapping
docker run -v /opt/datadir:/var/lib/mysql mysql [mysql is hosting on docker, data will lost when conatiner stop or deleted. so to avoid loosing do volume mapping or mount mysql container dir to local dir(/opt/datadir)]
docker run -p 8080:8080 -v my/home:/var/jenkins_home jenkins/jenkins [It will mount jenkin volume /var/jenkins_home to your local volume. In case docker restarted or deleted then data will not lost]


