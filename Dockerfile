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
COPY --from=builder /app/dist/angular-app/browser /usr/share/nginx/html
# Copy your public assets
COPY ./public /usr/share/nginx/html/public
#COPY nginx.conf.template /etc/nginx/nginx.conf.template # <--- Use the template
COPY nginx.conf.template /etc/nginx/nginx.conf.template
COPY public/assets/config/app-config.template.json /usr/share/nginx/html/public/assets/config/app-config.template.json
# Substitute both variables before starting Nginx
CMD ["sh", "-c", "envsubst '$API_BASE_URL $ADRES_APP_PROXY_URL' < /usr/share/nginx/html/public/assets/config/app-config.template.json > /usr/share/nginx/html/public/assets/config/app-config.json && envsubst '$ADRES_APP_PROXY_URL' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf && nginx -g 'daemon off;'"]
EXPOSE 80