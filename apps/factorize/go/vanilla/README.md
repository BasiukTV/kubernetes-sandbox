## SQRT App

Go web-app for calculating Factorizations of (random) numbers.

### Dependencies
* Go Installation
* (Optional) Docker Installation
* (Optional) Helm Installation

### Run Instructions

#### Local
* ```go build -o factorize-app```

#### Docker (Local)
* ```docker build -t factorize-app:latest .```
* ```docker run -p 80:80 factorize-app:latest```

#### Helm
* Connect kubectl to the cluster
* ```cd helm/factorize-app```
* ```helm upgrade factorize-app . --install -f values/test.yaml```
