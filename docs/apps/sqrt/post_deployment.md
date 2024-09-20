## SQRT App deployment is complete

### How to test?
* Make sure your kubectl in connected to the AKS cluster
* Run on your local machine: ```kubectl get svc --namespace apps-test```
  * Namespace might be different run ```kubectl get namespaces``` to see your options
  * <i>Same info can be obtained from the (AKS) resource on (Azure) portal</i>
* Make note of the EXTERNAL-IP used by the server
* Open the ```http://<EXTERNAL-IP>/sqrt``` on your browser
  * Or, for example: ```http://<EXTERNAL-IP>/sqrt?numbers=1,4,9,16,25```
