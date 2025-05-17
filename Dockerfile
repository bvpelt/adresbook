# Stage 1: Build the Angular application
FROM node:lts-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration=production

# Stage 2: Serve the Angular application using a lightweight web server (e.g., nginx)
FROM nginx:alpine
RUN apk update && apk add --no-cache gettext
COPY --from=builder /app/dist/angular-app /usr/share/nginx/html
RUN ls -altr /usr/share/nginx/html
COPY ./public /usr/share/nginx/html/public
COPY nginx.conf /etc/nginx/nginx.conf
COPY public/assets/config/app-config.template.json /usr/share/nginx/html/public/assets/config/app-config.template.json
CMD ["sh", "-c", "envsubst '$API_BASE_URL' < /usr/share/nginx/html/public/assets/config/app-config.template.json > /usr/share/nginx/html/public/assets/config/app-config.json && nginx -g 'daemon off;'"]
EXPOSE 80