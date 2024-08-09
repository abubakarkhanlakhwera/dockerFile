FROM ubuntu
RUN apt-cache search nginx
RUN apt-get update && apt-get install curl -y && apt-get install -y nginx
CMD [ "nginx", "-g" , "daemon off;"]