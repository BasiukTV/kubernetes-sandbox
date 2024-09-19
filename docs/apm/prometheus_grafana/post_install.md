## Prometheus and Grafana installation is complete

### Expose Grafana
* Make sure your kubectl in connected to the AKS cluster
* Run on your local machine: ```kubectl port-forward svc/prometheus-grafana -n monitoring 4000:80```
* The default username/password for Grafana is admin/prom-operator

### Expose Prometheus
* Make sure your kubectl in connected to the AKS cluster
* Run on your local machine: ```kubectl port-forward svc/prometheus-kube-prometheus-prometheus -n monitoring 4001:9090```
