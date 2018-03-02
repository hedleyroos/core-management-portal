FROM node:alpine

COPY . /app/

WORKDIR /app/

RUN yarn add admin-on-rest

WORKDIR /app/admin/

EXPOSE 3000
