## SQRT App

Go web-app for calculating Square Roots of (random) numbers.

### Dependencies
* Go Installation
* (Optional) Docker Installation
* (Optional) Helm Installation

### Run Instructions

#### Local
* ```go build -o sqrt-app```

#### Docker (Local)
* ```docker build -t sqrt-app:latest .```
* ```docker run -p 80:80 sqrt-app:latest```

#### Helm
* Connect kubectl to the cluster
* ```cd helm/sqrt-app```
* ```helm upgrade sqrt-app . --install -f values/test.yaml```
