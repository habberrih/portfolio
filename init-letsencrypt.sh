#!/bin/bash

# Create required directories
mkdir -p certbot/conf/live/habberrih.ly
mkdir -p certbot/www

# Stop any running containers
docker-compose down

# Get SSL certificate
docker-compose run --rm certbot certonly --webroot --webroot-path /var/www/certbot \
    --email a.habberreh@gmail.com \
    --agree-tos --no-eff-email \
    -d habberrih.ly -d www.habberrih.ly

# Start the services
docker-compose up -d 