#!/bin/bash

# Print the value of the environment variable
echo API_BASE_URL: $API_BASE_URL
echo "Check: " && env | grep API_BASE_URL

script_content=$(cat /usr/share/nginx/html/assets/env.js)
# Use envsubst to perform the substitution
substituted_content=$(echo "$script_content" | envsubst)

# Output the substituted content
echo "$substituted_content"

# Or, if you want to replace the content of config.js:
echo "$substituted_content" > /usr/share/nginx/html/assets/env.js

# Start nginx in the foreground
nginx -g "daemon off;"
