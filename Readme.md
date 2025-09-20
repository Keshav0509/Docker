# Docker
---
* whenever you change your code you should to build the container.
 - docker build -t projectname
---
1. docker ps -a
2. docker ps
3. docker images
4. docker run -it imagename
5. docker container imagename/imageid
6. docker container rm containerid
7. docker image rm imagename

---
* Production level command.
1. docker build -t projectname
2. docker run -itd -P --rm projectname
 