# Generic JMeter Simple Test Plan

* Aimed at continuously sending single HTTP request to the given endpoint.
* Any sampler error shuts down the thread. In conjunction with large thread count, gradual ramp-up period and long-enough runtime - should discover maximum sustainable simultaneous connections number of the endpoint.

## Prerequisites
* [JMeter](https://jmeter.apache.org/download_jmeter.cgi) on PATH

## Test Run Parameters
* Test will hit the following URL: ```https://google.com/```
* Test will run for (seconds): ```10```
* Test will run at most threads: ```2```
* Test will take this long to rump-up (seconds): ```5```

### Test Run Parameters Customization
* Sadly, you can only open .jmx file with JMeter UI and edit it.

## Test Run Example
Run from this directory:
* ```jmeter -n -t simple_test_plan.jmx -l simple_test_results.jtl```

### Broken Example
<i><span style="color: red;">Below test run customization should be possible, alas, it doesn't work.</span></i>
```
jmeter -n \
  -t simple_test_plan.jmx \
  -l simple_test_results.jtl \
  -JPROTOCOL=https \
  -JHOST=google.com \
  -JPATH="/" \
  -JTHREADS=2 \
  -JTOTAL_DURATION=10 \
  -JRAMPUP_DURATION=5
```

## Generate Test Report (Dashboard)
1. Run from this directory:
   * ```jmeter -g simple_test_results.jtl -o ./report```
2. Open ```index.html``` file inside of the ./report directory to view the report
