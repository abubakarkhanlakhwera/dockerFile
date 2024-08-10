FROM ubuntu
MAINTAINER "Panaverse"
LABEL Description="This dockerfile create custom docker image"
LABEL Author="A.B khan"
LABEL Email="M.abubakarkhanlakhwera@gmail.com"
ARG Designation="DevOps Eng"
ARG name=${Author}

ENV company_name=${MAINTAINER}
ENV company_Email=Panaverse@gamil.com
ENV contact=${company_Email}

RUN echo "Hello ${Author}, Are you ${Designation}, My company is ${company_name} ." > /tmp/info.txt
RUN mkdir /tmp/cloudtech

COPY files  /opt

WORKDIR /opt

RUN pwd > pwd.txt

VOLUME [ "/data" ]

ENTRYPOINT [ "bash" ] 