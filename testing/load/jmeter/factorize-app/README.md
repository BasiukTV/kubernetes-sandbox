# Factorize-App JMeter Simple Test Plan

* Aimed at continuously sending pairs of HTTP request to the factorize-app endpoint.
  * First request will get the factorization of a random number
  * Second request will request thr factorization of the same number, aiming to get the cached result
* Errors do not cause threads to shutdown
  * One of the aims is to cause docker containers shutdown due to unlimited factorization cache

## Prerequisites
* [JMeter](https://jmeter.apache.org/download_jmeter.cgi) on PATH

## Test Run Parameters
* Test will hit the following URL: ```http://<FACTORIZE_APP_IP_ADDRESS>/factorize[?number=<integer>]```
* Test will run for (seconds): ```600```
* Test will run at most threads: ```50```
* Test will take this long to rump-up (seconds): ```300```

### Test Run Parameters Customization
* For anything other than the Host IP address change, you can only open .jmx file with JMeter UI and edit it.

## Test Run Example
Run from this directory:
* ```jmeter -n -t factorize_app_600s-duration_50-threads-max_300s-rampup.jmx -l simple_test_results.jtl -JHOST=<FACTORIZE_APP_IP_ADDRESS>```
  * <i><span style="color: red;">Don't forget to edit above FACTORIZE_APP_IP_ADDRESS value.</span></i>

## Generate Test Report (Dashboard)
1. Run from this directory:
   * ```jmeter -g simple_test_results.jtl -o ./report```
2. Open ```index.html``` file inside of the ./report directory to view the report

## Findings
* TODO
