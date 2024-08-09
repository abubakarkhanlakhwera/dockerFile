FROM ubuntu
RUN apt-get update && apt-get upgrade -y && apt-get install iputills-ping -y && apt-get install net-tools
COPY . /tmp
ENV dev=ops
CMD [ "bash" ]