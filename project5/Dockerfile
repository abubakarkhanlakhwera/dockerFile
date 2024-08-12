FROM ubuntu
MAINTAINER "Panaverse"
LABEL Description="This docker file is create custom docker image." \
    Author="A.B.khan"  \
    Email="abc.gmail.com"
ENV username=A.B.khan
RUN apt-get update \
    && useradd -m -s /bin/bash ${username} \
    && usermod -aG sudo ${username} $$ echo "${username} ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/${username} \
    && chmod 0440 /etc/sudoers.d/${username}

USER ${username}

ENV company_name="Cloud technologies" \
    company_type="IT" \
    company_email="abc.gmail.com"

RUN echo "Hello ${username}, are you a devOps Eng. , Yes I am. " > /tmp/company.txt \
    && pwd > tmp/pwd.txt \
    && mkdir /tmp/cloudtech

WORKDIR /opt

VOLUME [ "/data" ]
ENTRYPOINT [ "bash" ]