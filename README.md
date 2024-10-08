# kubernetes-sandbox
Sandbox repo to try out various advanced k8s topics.

## Table of Contents

- [kubernetes-sandbox](#kubernetes-sandbox)
  - [Table of Contents](#table-of-contents)
  - [General Prerequisites](#general-prerequisites)
    - [AKS (Azure Cloud)](#aks-azure-cloud)
  - [Application Performance Monitoring (APM)](#application-performance-monitoring-apm)
    - [Prometheus and Grafana](#prometheus-and-grafana)
  - [Platform Tools](#platform-tools)
    - [Core (k8s) Tools](#core-k8s-tools)
      - [Ingress Controller](#ingress-controller)
  - [Applications](#applications)
    - [SQRT App](#sqrt-app)
    - [Factorize App](#factorize-app)
  - [Testing](#testing)
    - [Load Testing](#load-testing)

## General Prerequisites

* You need a k8s cluster provisioned in one of the below ways.
* This GitHub repo workflows must be authorized to manipulate the cluster.

### AKS (Azure Cloud)
1. Provision an AKS cluster either manually or this [Example IaC Configuration](https://gitlab.com/BasiukTV/azure-sandbox/-/tree/main/automation/iac/aks)
2. Provision a Service Principal with Contributor Role over the AKS cluster
3. Set ```AZURE_TENANT_ID```, ```AZURE_SUBSCRIPTION_ID```, ```AZURE_SP_CLIENT_ID``` repo variables
4. Set ```AZURE_SP_CLIENT_SECRET``` repo secret

## Application Performance Monitoring (APM)

### Prometheus and Grafana
* Install by running this [Workflow](https://github.com/BasiukTV/kubernetes-sandbox/actions/workflows/10_install_prometheus_grafana.yaml)
* Access by following this [Documentation](docs/apm/prometheus_grafana/post_install.md)

## Platform Tools

### Core (k8s) Tools

#### Ingress Controller
* [Manifest File](./platform/k8s/ingress_controller.yaml)
* [Deployment Workflow](https://github.com/BasiukTV/kubernetes-sandbox/actions/workflows/11_install_ingress_controller.yaml)

## Applications

### SQRT App

* [Source Code](./apps/sqrt/go/vanilla/)
* [Helm Chart](./apps/sqrt/go/vanilla/helm/sqrt-app/)
* [Deployment Workflow](https://github.com/BasiukTV/kubernetes-sandbox/actions/workflows/20_deploy_sqrt_app.yaml)

### Factorize App

* [Source Code](./apps/factorize/go/vanilla/)
* [Helm Chart](./apps/factorize/go/vanilla/helm/factorize-app/)

## Testing
### Load Testing
* SQRT App Load Testing (with JMeter)
  * [Files Directory](./testing/load/jmeter/sqrt-app/)
  * [Load Test Workflow](https://github.com/BasiukTV/kubernetes-sandbox/actions/workflows/30_loadtest_sqrt_app.yaml)
