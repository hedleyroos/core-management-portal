FROM node:alpine

COPY . /app/

WORKDIR /app/admin/

EXPOSE 3000
