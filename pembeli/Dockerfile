FROM nginx:stable
MAINTAINER Raden Panji  "panji@alterra.id"

RUN mkdir -p /alterra/www/FRONTENDPEMBELI
RUN mkdir -p /alterra/logs/nginx

COPY default.conf /etc/nginx/conf.d/
COPY . /alterra/www/FRONTENDPEMBELI/

WORKDIR /alterra/www/FRONTENDPEMBELI
