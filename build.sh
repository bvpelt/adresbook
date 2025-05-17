#!/bin/bash -xv
version="0.0.20"

#npm run build --omit=dev

#docker build -t adresbook . --build-arg API_BASE_URL="http://angular-app:8080/adres/api/v1"

#docker tag adresbook dockerpinguin/adresbook:latest
#docker tag adresbook dockerpinguin/adresbook:0.0.19


#docker push dockerpinguin/adresbook:latest
#docker push dockerpinguin/adresbook:0.0.19


docker build -t adresbook .

echo docker tag adresbook dockerpinguin/adresbook:latest
echo docker tag adresbook dockerpinguin/adresbook:$version

echo docker push dockerpinguin/adresbook:latest
echo docker push dockerpinguin/adresbook:$
