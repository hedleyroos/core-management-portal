FROM node:alpine

COPY . /app/

WORKDIR /app/admin/

RUN yarn install

EXPOSE 3000
