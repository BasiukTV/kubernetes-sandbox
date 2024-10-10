## Description of Load Testing Reports

* All load testing was done against a 1 node 2 core CPU 4 GB Memory AKS cluster.
* JMeter was loading the SQRT app with up to 100 on concurrent requests.
* Load testing was running for 10 minutes, with a ramp up period of 5 minutes.
* All load tests were run from GHA workflows.
* Zip archives contain JMeter reports.
* There are also screenshots of Grafana for cluster and app workload dashboards.