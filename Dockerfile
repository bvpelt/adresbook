FROM nginx:alpine

LABEL maintainer="Bart van Pelt <brtvnplt@gmail.com>"

# Install bash and envsubst for build-time variable substitution
RUN apk add --no-cache bash gettext

# Copy application files
COPY dist/adresbook/browser /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy your env.js file
COPY dist/adresbook/browser/assets/env.js /usr/share/nginx/html/assets/env.js 

# Perform the substitution and inspect the content
#RUN envsubst < /usr/share/nginx/html/assets/env.js > /usr/share/nginx/html/assets/env.js && cat /usr/share/nginx/html/assets/env.js
RUN sed "s|\$API_BASE_URL|$API_BASE_URL|g" /usr/share/nginx/html/assets/env.js > /usr/share/nginx/html/assets/env.js

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]