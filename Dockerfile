# Stage 1 - Build process
FROM node:alpine as build-deps
COPY . /app/
WORKDIR /app/admin/
ARG REACT_APP_AUTHORIZATION_ENDPOINT
ARG REACT_APP_AUTHORIZATION_USER_ENDPOINT
ARG REACT_APP_CLIENT_ID
ARG REACT_APP_LOGOUT_URL
ARG REACT_APP_MANAGEMENT_LAYER
ARG REACT_APP_PORTAL_URL
ARG REACT_APP_PORTAL_LOGIN_CALLBACK
RUN yarn
RUN yarn build

# Stage 2 - The production environment.
FROM nginx:stable-alpine
COPY nginx/* /etc/nginx/conf.d/
COPY --from=build-deps /app/admin/build/* /var/static/
EXPOSE 3000