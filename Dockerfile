FROM node:18-slim AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Serve static files with nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
