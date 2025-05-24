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
echo docker push dockerpinguin/adresbook:$version 


echo docker run -d -p 80:80 adresbook


# Assuming your local IP is 192.168.1.X or you use host.docker.internal for Mac/Windows Docker Desktop
# On Linux, you might need to find your bridge IP or use --network host for simple local testing
docker run -d -p 80:80 \
  -e API_BASE_URL="http://localhost:8080/adres/api/v1" \
  -e ADRES_APP_PROXY_URL="http://172.17.0.1:8080/adres/api/v1" \
  --network host \
  adresbook