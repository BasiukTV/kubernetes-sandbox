# SQRT-App JMeter Simple Test Plan

* Aimed at continuously sending single HTTP request to the sqrt-app endpoint.
* Any sampler error shuts down the thread. In conjunction with large thread count, gradual ramp-up period and long-enough runtime - should discover maximum sustainable simultaneous connections number of the endpoint.

## Prerequisites
* [JMeter](https://jmeter.apache.org/download_jmeter.cgi) on PATH

## Test Run Parameters
* Test will hit the following URL: ```http://<SQRT_APP_IP_ADDRESS>/sqrt?compressed=<true|false>```
* Test will run for (seconds): ```600```
* Test will run at most threads: ```100```
* Test will take this long to rump-up (seconds): ```300```

### Test Run Parameters Customization
* For anything other than the IP address change, you can only open .jmx file with JMeter UI and edit it.

## Test Run Example
Run from this directory:
* ```jmeter -n -t sqrt_app_600s-duration_100-threads-max_300s-rampup.jmx -l simple_test_results.jtl -JHOST=<SQRT_APP_IP_ADDRESS>```
  * <i><span style="color: red;">Don't forget to edit above SQRT_APP_IP_ADDRESS value.</span></i>
  * Use ```sqrt_app_600s-duration_100-threads-max_300s-rampup_compressed_output.jmx``` file for the app to return compressed output (saves Network bandwidth, but uses a lot more CPU).

## Generate Test Report (Dashboard)
1. Run from this directory:
   * ```jmeter -g simple_test_results.jtl -o ./report```
2. Open ```index.html``` file inside of the ./report directory to view the report

## Findings
* Examine the [Latest Report](./latest_report/) directory.
* It seems like SQRT app is currently Egress network bound. Which makes sense - calculating 1000 square roots takes only a bit of CPU, virtually no memory, but a lot of output data to send over the network.
