#apt-get update -y && apt-get install wget libnss3-tools -y &&\
#wget https://github.com/FiloSottile/mkcert/releases/download/v1.4.3/mkcert-v1.4.3-linux-amd64 &&\
sudo mv mkcert-v1.4.3-linux-amd64 /usr/bin/mkcert && sudo chmod +x /usr/bin/mkcert && sudo mkcert --version &&\
mkcert -install && cd NioGems && kcert localhost