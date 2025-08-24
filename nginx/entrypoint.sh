#!/bin/sh
set -euo pipefail

CERT="/etc/letsencrypt/live/habberrih.ly/fullchain.pem"
KEY="/etc/letsencrypt/live/habberrih.ly/privkey.pem"

trap 'nginx -s quit || true; exit 0' TERM INT

echo "Starting nginx in background..."
nginx -g 'daemon on;'

last_cert_mtime=$(stat -c %Y "$CERT" 2>/dev/null || echo 0)
last_key_mtime=$(stat -c %Y "$KEY" 2>/dev/null || echo 0)

echo "Watching certificate changes for automatic reloads..."
while :; do
  sleep 3600
  cert_mtime=$(stat -c %Y "$CERT" 2>/dev/null || echo 0)
  key_mtime=$(stat -c %Y "$KEY" 2>/dev/null || echo 0)

  if [ "$cert_mtime" != "$last_cert_mtime" ] || [ "$key_mtime" != "$last_key_mtime" ]; then
    echo "Certificates changed. Reloading nginx..."
    nginx -s reload || true
    last_cert_mtime="$cert_mtime"
    last_key_mtime="$key_mtime"
  fi
done

