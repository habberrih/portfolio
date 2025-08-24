#!/bin/sh

set -euo pipefail

DOMAIN_MAIN="habberrih.ly"
DOMAIN_WWW="www.habberrih.ly"
EMAIL="a.habberreh@gmail.com" # change to your email

# Create required directories
mkdir -p certbot/conf/live/${DOMAIN_MAIN}
mkdir -p certbot/www

# Start app and nginx (HTTP must be reachable for ACME challenge)
docker compose up -d app nginx

# Obtain/renew certificate via webroot
docker compose run --rm certbot certonly \
  --webroot --webroot-path /var/www/certbot \
  --email "$EMAIL" --agree-tos --no-eff-email \
  -d "$DOMAIN_MAIN" -d "$DOMAIN_WWW"

# Reload nginx to pick up new certs
docker compose exec -T nginx nginx -s reload || true

echo "Certificates obtained/renewed for $DOMAIN_MAIN and $DOMAIN_WWW."
