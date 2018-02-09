FROM node:alpine

COPY . /app/

WORKDIR /app/

RUN yarn add admin-on-rest

WORKDIR /app/demo-admin/

EXPOSE 3000
