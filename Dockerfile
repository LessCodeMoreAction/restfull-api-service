FROM node:12

workdir /app


COPY package.json /app

RUN npm install

COPY . /app

CMD npm run devstart

EXPOSE 3000