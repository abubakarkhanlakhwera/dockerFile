FROM node:alpine

WORKDIR /app

COPY ./express/package.json .

RUN npm install && npm install -g nodemon

COPY . .

EXPOSE 8080

CMD [ "nodemon","index.js" ]