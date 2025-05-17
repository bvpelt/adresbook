#!/bin/bash -xv

npm run build --omit=dev


docker build -t adresbook . --build-arg API_BASE_URL="http://angular-app:8080/adres/api/v1"

docker tag adresbook dockerpinguin/adresbook:latest
docker tag adresbook dockerpinguin/adresbook:0.0.19


docker push dockerpinguin/adresbook:latest
docker push dockerpinguin/adresbook:0.0.19
