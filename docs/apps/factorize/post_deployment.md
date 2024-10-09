## Factorize App deployment is complete

### How to test?
* Make sure your kubectl in connected to the AKS cluster
* Run on your local machine: ```kubectl get ingress --namespace apps-test```
  * [Ingress Controller](https://github.com/BasiukTV/kubernetes-sandbox/actions/workflows/11_install_ingress_controller.yaml) has to be deployed already.
  * Namespace might be different run ```kubectl get namespaces``` to see your options
  * <i>Same info can be obtained from the (AKS) resource on (Azure) portal</i>
* Make note of the ADDRESS used by the ingress controller
* Open the ```http://<ADDRESS>/factorize``` on your browser
  * Or, for example: ```http://<ADDRESS>/factorize?number=1491625```
