/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 40.0, "minX": 0.0, "maxY": 17229.0, "series": [{"data": [[0.0, 40.0], [0.1, 46.0], [0.2, 48.0], [0.3, 50.0], [0.4, 51.0], [0.5, 53.0], [0.6, 54.0], [0.7, 55.0], [0.8, 56.0], [0.9, 57.0], [1.0, 58.0], [1.1, 59.0], [1.2, 60.0], [1.3, 61.0], [1.4, 62.0], [1.5, 63.0], [1.6, 64.0], [1.7, 65.0], [1.8, 66.0], [1.9, 67.0], [2.0, 69.0], [2.1, 70.0], [2.2, 71.0], [2.3, 72.0], [2.4, 73.0], [2.5, 74.0], [2.6, 75.0], [2.7, 76.0], [2.8, 77.0], [2.9, 78.0], [3.0, 79.0], [3.1, 81.0], [3.2, 82.0], [3.3, 83.0], [3.4, 85.0], [3.5, 86.0], [3.6, 88.0], [3.7, 89.0], [3.8, 90.0], [3.9, 92.0], [4.0, 93.0], [4.1, 94.0], [4.2, 96.0], [4.3, 97.0], [4.4, 99.0], [4.5, 100.0], [4.6, 102.0], [4.7, 103.0], [4.8, 104.0], [4.9, 106.0], [5.0, 107.0], [5.1, 109.0], [5.2, 111.0], [5.3, 113.0], [5.4, 114.0], [5.5, 116.0], [5.6, 118.0], [5.7, 119.0], [5.8, 121.0], [5.9, 123.0], [6.0, 124.0], [6.1, 125.0], [6.2, 127.0], [6.3, 128.0], [6.4, 130.0], [6.5, 131.0], [6.6, 132.0], [6.7, 134.0], [6.8, 135.0], [6.9, 136.0], [7.0, 138.0], [7.1, 139.0], [7.2, 140.0], [7.3, 141.0], [7.4, 143.0], [7.5, 144.0], [7.6, 145.0], [7.7, 146.0], [7.8, 147.0], [7.9, 149.0], [8.0, 150.0], [8.1, 151.0], [8.2, 152.0], [8.3, 154.0], [8.4, 155.0], [8.5, 156.0], [8.6, 158.0], [8.7, 159.0], [8.8, 160.0], [8.9, 162.0], [9.0, 163.0], [9.1, 164.0], [9.2, 166.0], [9.3, 167.0], [9.4, 168.0], [9.5, 169.0], [9.6, 171.0], [9.7, 172.0], [9.8, 173.0], [9.9, 174.0], [10.0, 176.0], [10.1, 177.0], [10.2, 178.0], [10.3, 179.0], [10.4, 180.0], [10.5, 181.0], [10.6, 183.0], [10.7, 183.0], [10.8, 185.0], [10.9, 186.0], [11.0, 187.0], [11.1, 188.0], [11.2, 189.0], [11.3, 190.0], [11.4, 191.0], [11.5, 192.0], [11.6, 193.0], [11.7, 194.0], [11.8, 195.0], [11.9, 196.0], [12.0, 197.0], [12.1, 198.0], [12.2, 200.0], [12.3, 200.0], [12.4, 201.0], [12.5, 202.0], [12.6, 203.0], [12.7, 204.0], [12.8, 205.0], [12.9, 206.0], [13.0, 207.0], [13.1, 208.0], [13.2, 210.0], [13.3, 211.0], [13.4, 212.0], [13.5, 213.0], [13.6, 214.0], [13.7, 215.0], [13.8, 216.0], [13.9, 217.0], [14.0, 218.0], [14.1, 219.0], [14.2, 220.0], [14.3, 221.0], [14.4, 223.0], [14.5, 224.0], [14.6, 225.0], [14.7, 226.0], [14.8, 227.0], [14.9, 228.0], [15.0, 230.0], [15.1, 231.0], [15.2, 232.0], [15.3, 233.0], [15.4, 234.0], [15.5, 235.0], [15.6, 237.0], [15.7, 238.0], [15.8, 239.0], [15.9, 240.0], [16.0, 241.0], [16.1, 243.0], [16.2, 244.0], [16.3, 245.0], [16.4, 246.0], [16.5, 248.0], [16.6, 249.0], [16.7, 250.0], [16.8, 251.0], [16.9, 252.0], [17.0, 253.0], [17.1, 254.0], [17.2, 255.0], [17.3, 256.0], [17.4, 257.0], [17.5, 258.0], [17.6, 260.0], [17.7, 261.0], [17.8, 262.0], [17.9, 263.0], [18.0, 264.0], [18.1, 265.0], [18.2, 267.0], [18.3, 268.0], [18.4, 269.0], [18.5, 270.0], [18.6, 271.0], [18.7, 273.0], [18.8, 274.0], [18.9, 276.0], [19.0, 278.0], [19.1, 279.0], [19.2, 281.0], [19.3, 282.0], [19.4, 284.0], [19.5, 285.0], [19.6, 287.0], [19.7, 288.0], [19.8, 290.0], [19.9, 291.0], [20.0, 293.0], [20.1, 294.0], [20.2, 295.0], [20.3, 297.0], [20.4, 298.0], [20.5, 299.0], [20.6, 301.0], [20.7, 302.0], [20.8, 304.0], [20.9, 305.0], [21.0, 306.0], [21.1, 307.0], [21.2, 309.0], [21.3, 310.0], [21.4, 311.0], [21.5, 312.0], [21.6, 313.0], [21.7, 314.0], [21.8, 316.0], [21.9, 317.0], [22.0, 318.0], [22.1, 320.0], [22.2, 321.0], [22.3, 323.0], [22.4, 324.0], [22.5, 326.0], [22.6, 327.0], [22.7, 328.0], [22.8, 329.0], [22.9, 330.0], [23.0, 332.0], [23.1, 333.0], [23.2, 334.0], [23.3, 336.0], [23.4, 337.0], [23.5, 338.0], [23.6, 340.0], [23.7, 341.0], [23.8, 342.0], [23.9, 343.0], [24.0, 344.0], [24.1, 346.0], [24.2, 347.0], [24.3, 349.0], [24.4, 350.0], [24.5, 352.0], [24.6, 353.0], [24.7, 354.0], [24.8, 355.0], [24.9, 357.0], [25.0, 359.0], [25.1, 360.0], [25.2, 362.0], [25.3, 363.0], [25.4, 364.0], [25.5, 366.0], [25.6, 367.0], [25.7, 368.0], [25.8, 369.0], [25.9, 371.0], [26.0, 372.0], [26.1, 374.0], [26.2, 375.0], [26.3, 376.0], [26.4, 378.0], [26.5, 379.0], [26.6, 380.0], [26.7, 382.0], [26.8, 383.0], [26.9, 384.0], [27.0, 386.0], [27.1, 387.0], [27.2, 388.0], [27.3, 389.0], [27.4, 390.0], [27.5, 392.0], [27.6, 393.0], [27.7, 394.0], [27.8, 395.0], [27.9, 396.0], [28.0, 397.0], [28.1, 398.0], [28.2, 399.0], [28.3, 400.0], [28.4, 401.0], [28.5, 402.0], [28.6, 403.0], [28.7, 404.0], [28.8, 405.0], [28.9, 406.0], [29.0, 407.0], [29.1, 408.0], [29.2, 408.0], [29.3, 409.0], [29.4, 410.0], [29.5, 410.0], [29.6, 411.0], [29.7, 412.0], [29.8, 413.0], [29.9, 413.0], [30.0, 414.0], [30.1, 415.0], [30.2, 416.0], [30.3, 416.0], [30.4, 417.0], [30.5, 418.0], [30.6, 418.0], [30.7, 419.0], [30.8, 420.0], [30.9, 421.0], [31.0, 421.0], [31.1, 422.0], [31.2, 422.0], [31.3, 423.0], [31.4, 424.0], [31.5, 424.0], [31.6, 425.0], [31.7, 426.0], [31.8, 426.0], [31.9, 427.0], [32.0, 427.0], [32.1, 428.0], [32.2, 429.0], [32.3, 429.0], [32.4, 430.0], [32.5, 430.0], [32.6, 431.0], [32.7, 432.0], [32.8, 432.0], [32.9, 433.0], [33.0, 433.0], [33.1, 434.0], [33.2, 434.0], [33.3, 435.0], [33.4, 435.0], [33.5, 436.0], [33.6, 436.0], [33.7, 437.0], [33.8, 438.0], [33.9, 438.0], [34.0, 439.0], [34.1, 439.0], [34.2, 440.0], [34.3, 440.0], [34.4, 441.0], [34.5, 441.0], [34.6, 442.0], [34.7, 443.0], [34.8, 443.0], [34.9, 444.0], [35.0, 444.0], [35.1, 445.0], [35.2, 445.0], [35.3, 446.0], [35.4, 446.0], [35.5, 447.0], [35.6, 447.0], [35.7, 448.0], [35.8, 448.0], [35.9, 449.0], [36.0, 449.0], [36.1, 450.0], [36.2, 450.0], [36.3, 451.0], [36.4, 451.0], [36.5, 452.0], [36.6, 452.0], [36.7, 453.0], [36.8, 453.0], [36.9, 454.0], [37.0, 454.0], [37.1, 454.0], [37.2, 455.0], [37.3, 456.0], [37.4, 456.0], [37.5, 456.0], [37.6, 457.0], [37.7, 457.0], [37.8, 458.0], [37.9, 458.0], [38.0, 459.0], [38.1, 459.0], [38.2, 460.0], [38.3, 460.0], [38.4, 461.0], [38.5, 461.0], [38.6, 462.0], [38.7, 462.0], [38.8, 463.0], [38.9, 463.0], [39.0, 464.0], [39.1, 464.0], [39.2, 465.0], [39.3, 465.0], [39.4, 466.0], [39.5, 466.0], [39.6, 466.0], [39.7, 467.0], [39.8, 467.0], [39.9, 468.0], [40.0, 468.0], [40.1, 469.0], [40.2, 469.0], [40.3, 470.0], [40.4, 470.0], [40.5, 471.0], [40.6, 471.0], [40.7, 471.0], [40.8, 472.0], [40.9, 472.0], [41.0, 473.0], [41.1, 473.0], [41.2, 474.0], [41.3, 474.0], [41.4, 474.0], [41.5, 475.0], [41.6, 475.0], [41.7, 476.0], [41.8, 476.0], [41.9, 477.0], [42.0, 477.0], [42.1, 478.0], [42.2, 478.0], [42.3, 478.0], [42.4, 479.0], [42.5, 479.0], [42.6, 480.0], [42.7, 480.0], [42.8, 480.0], [42.9, 481.0], [43.0, 481.0], [43.1, 482.0], [43.2, 482.0], [43.3, 483.0], [43.4, 483.0], [43.5, 483.0], [43.6, 484.0], [43.7, 484.0], [43.8, 485.0], [43.9, 485.0], [44.0, 486.0], [44.1, 486.0], [44.2, 486.0], [44.3, 487.0], [44.4, 487.0], [44.5, 488.0], [44.6, 488.0], [44.7, 488.0], [44.8, 489.0], [44.9, 489.0], [45.0, 489.0], [45.1, 490.0], [45.2, 490.0], [45.3, 491.0], [45.4, 491.0], [45.5, 491.0], [45.6, 492.0], [45.7, 492.0], [45.8, 492.0], [45.9, 493.0], [46.0, 493.0], [46.1, 494.0], [46.2, 494.0], [46.3, 494.0], [46.4, 495.0], [46.5, 495.0], [46.6, 495.0], [46.7, 496.0], [46.8, 496.0], [46.9, 496.0], [47.0, 497.0], [47.1, 497.0], [47.2, 497.0], [47.3, 498.0], [47.4, 498.0], [47.5, 499.0], [47.6, 499.0], [47.7, 499.0], [47.8, 500.0], [47.9, 500.0], [48.0, 501.0], [48.1, 501.0], [48.2, 501.0], [48.3, 502.0], [48.4, 502.0], [48.5, 503.0], [48.6, 503.0], [48.7, 503.0], [48.8, 504.0], [48.9, 504.0], [49.0, 504.0], [49.1, 505.0], [49.2, 505.0], [49.3, 505.0], [49.4, 506.0], [49.5, 506.0], [49.6, 507.0], [49.7, 507.0], [49.8, 507.0], [49.9, 508.0], [50.0, 508.0], [50.1, 508.0], [50.2, 509.0], [50.3, 509.0], [50.4, 509.0], [50.5, 510.0], [50.6, 510.0], [50.7, 511.0], [50.8, 511.0], [50.9, 511.0], [51.0, 512.0], [51.1, 512.0], [51.2, 512.0], [51.3, 513.0], [51.4, 513.0], [51.5, 513.0], [51.6, 514.0], [51.7, 514.0], [51.8, 514.0], [51.9, 515.0], [52.0, 515.0], [52.1, 516.0], [52.2, 516.0], [52.3, 516.0], [52.4, 517.0], [52.5, 517.0], [52.6, 517.0], [52.7, 518.0], [52.8, 518.0], [52.9, 519.0], [53.0, 519.0], [53.1, 519.0], [53.2, 520.0], [53.3, 520.0], [53.4, 521.0], [53.5, 521.0], [53.6, 521.0], [53.7, 522.0], [53.8, 522.0], [53.9, 523.0], [54.0, 523.0], [54.1, 524.0], [54.2, 524.0], [54.3, 524.0], [54.4, 525.0], [54.5, 525.0], [54.6, 526.0], [54.7, 526.0], [54.8, 527.0], [54.9, 527.0], [55.0, 528.0], [55.1, 528.0], [55.2, 529.0], [55.3, 529.0], [55.4, 529.0], [55.5, 530.0], [55.6, 530.0], [55.7, 531.0], [55.8, 531.0], [55.9, 532.0], [56.0, 532.0], [56.1, 533.0], [56.2, 533.0], [56.3, 534.0], [56.4, 534.0], [56.5, 534.0], [56.6, 535.0], [56.7, 535.0], [56.8, 536.0], [56.9, 536.0], [57.0, 536.0], [57.1, 537.0], [57.2, 537.0], [57.3, 538.0], [57.4, 538.0], [57.5, 539.0], [57.6, 539.0], [57.7, 540.0], [57.8, 540.0], [57.9, 541.0], [58.0, 541.0], [58.1, 542.0], [58.2, 542.0], [58.3, 542.0], [58.4, 543.0], [58.5, 543.0], [58.6, 544.0], [58.7, 544.0], [58.8, 545.0], [58.9, 545.0], [59.0, 546.0], [59.1, 546.0], [59.2, 547.0], [59.3, 547.0], [59.4, 548.0], [59.5, 548.0], [59.6, 548.0], [59.7, 549.0], [59.8, 549.0], [59.9, 550.0], [60.0, 550.0], [60.1, 551.0], [60.2, 552.0], [60.3, 552.0], [60.4, 553.0], [60.5, 553.0], [60.6, 554.0], [60.7, 554.0], [60.8, 555.0], [60.9, 555.0], [61.0, 556.0], [61.1, 556.0], [61.2, 557.0], [61.3, 557.0], [61.4, 558.0], [61.5, 558.0], [61.6, 559.0], [61.7, 559.0], [61.8, 560.0], [61.9, 560.0], [62.0, 561.0], [62.1, 562.0], [62.2, 562.0], [62.3, 563.0], [62.4, 563.0], [62.5, 564.0], [62.6, 564.0], [62.7, 565.0], [62.8, 565.0], [62.9, 566.0], [63.0, 566.0], [63.1, 567.0], [63.2, 568.0], [63.3, 568.0], [63.4, 569.0], [63.5, 570.0], [63.6, 570.0], [63.7, 571.0], [63.8, 571.0], [63.9, 572.0], [64.0, 572.0], [64.1, 573.0], [64.2, 574.0], [64.3, 574.0], [64.4, 575.0], [64.5, 575.0], [64.6, 576.0], [64.7, 577.0], [64.8, 577.0], [64.9, 578.0], [65.0, 578.0], [65.1, 579.0], [65.2, 580.0], [65.3, 580.0], [65.4, 581.0], [65.5, 581.0], [65.6, 582.0], [65.7, 583.0], [65.8, 583.0], [65.9, 584.0], [66.0, 584.0], [66.1, 585.0], [66.2, 585.0], [66.3, 586.0], [66.4, 587.0], [66.5, 587.0], [66.6, 588.0], [66.7, 588.0], [66.8, 589.0], [66.9, 590.0], [67.0, 590.0], [67.1, 591.0], [67.2, 591.0], [67.3, 592.0], [67.4, 593.0], [67.5, 593.0], [67.6, 594.0], [67.7, 595.0], [67.8, 595.0], [67.9, 596.0], [68.0, 597.0], [68.1, 597.0], [68.2, 598.0], [68.3, 599.0], [68.4, 600.0], [68.5, 600.0], [68.6, 601.0], [68.7, 602.0], [68.8, 602.0], [68.9, 603.0], [69.0, 604.0], [69.1, 604.0], [69.2, 605.0], [69.3, 606.0], [69.4, 606.0], [69.5, 607.0], [69.6, 608.0], [69.7, 608.0], [69.8, 609.0], [69.9, 610.0], [70.0, 610.0], [70.1, 611.0], [70.2, 612.0], [70.3, 612.0], [70.4, 613.0], [70.5, 613.0], [70.6, 614.0], [70.7, 615.0], [70.8, 615.0], [70.9, 616.0], [71.0, 617.0], [71.1, 617.0], [71.2, 618.0], [71.3, 619.0], [71.4, 619.0], [71.5, 620.0], [71.6, 621.0], [71.7, 621.0], [71.8, 622.0], [71.9, 623.0], [72.0, 623.0], [72.1, 624.0], [72.2, 625.0], [72.3, 625.0], [72.4, 626.0], [72.5, 627.0], [72.6, 627.0], [72.7, 628.0], [72.8, 629.0], [72.9, 629.0], [73.0, 630.0], [73.1, 631.0], [73.2, 631.0], [73.3, 632.0], [73.4, 633.0], [73.5, 634.0], [73.6, 635.0], [73.7, 635.0], [73.8, 636.0], [73.9, 637.0], [74.0, 638.0], [74.1, 638.0], [74.2, 639.0], [74.3, 640.0], [74.4, 640.0], [74.5, 641.0], [74.6, 642.0], [74.7, 643.0], [74.8, 643.0], [74.9, 644.0], [75.0, 645.0], [75.1, 646.0], [75.2, 646.0], [75.3, 647.0], [75.4, 648.0], [75.5, 649.0], [75.6, 650.0], [75.7, 651.0], [75.8, 652.0], [75.9, 652.0], [76.0, 653.0], [76.1, 654.0], [76.2, 655.0], [76.3, 656.0], [76.4, 657.0], [76.5, 658.0], [76.6, 659.0], [76.7, 660.0], [76.8, 660.0], [76.9, 661.0], [77.0, 662.0], [77.1, 663.0], [77.2, 664.0], [77.3, 665.0], [77.4, 666.0], [77.5, 667.0], [77.6, 668.0], [77.7, 669.0], [77.8, 670.0], [77.9, 670.0], [78.0, 672.0], [78.1, 673.0], [78.2, 674.0], [78.3, 675.0], [78.4, 676.0], [78.5, 678.0], [78.6, 679.0], [78.7, 680.0], [78.8, 681.0], [78.9, 682.0], [79.0, 683.0], [79.1, 684.0], [79.2, 686.0], [79.3, 687.0], [79.4, 688.0], [79.5, 689.0], [79.6, 690.0], [79.7, 690.0], [79.8, 691.0], [79.9, 693.0], [80.0, 694.0], [80.1, 695.0], [80.2, 696.0], [80.3, 697.0], [80.4, 698.0], [80.5, 700.0], [80.6, 701.0], [80.7, 703.0], [80.8, 704.0], [80.9, 706.0], [81.0, 707.0], [81.1, 708.0], [81.2, 710.0], [81.3, 711.0], [81.4, 712.0], [81.5, 714.0], [81.6, 716.0], [81.7, 717.0], [81.8, 718.0], [81.9, 720.0], [82.0, 721.0], [82.1, 723.0], [82.2, 724.0], [82.3, 726.0], [82.4, 728.0], [82.5, 730.0], [82.6, 731.0], [82.7, 733.0], [82.8, 734.0], [82.9, 736.0], [83.0, 738.0], [83.1, 739.0], [83.2, 741.0], [83.3, 743.0], [83.4, 745.0], [83.5, 747.0], [83.6, 749.0], [83.7, 751.0], [83.8, 752.0], [83.9, 754.0], [84.0, 756.0], [84.1, 758.0], [84.2, 761.0], [84.3, 763.0], [84.4, 765.0], [84.5, 767.0], [84.6, 769.0], [84.7, 771.0], [84.8, 773.0], [84.9, 775.0], [85.0, 778.0], [85.1, 780.0], [85.2, 782.0], [85.3, 785.0], [85.4, 788.0], [85.5, 791.0], [85.6, 795.0], [85.7, 798.0], [85.8, 801.0], [85.9, 804.0], [86.0, 807.0], [86.1, 811.0], [86.2, 814.0], [86.3, 817.0], [86.4, 821.0], [86.5, 824.0], [86.6, 829.0], [86.7, 833.0], [86.8, 839.0], [86.9, 842.0], [87.0, 846.0], [87.1, 851.0], [87.2, 855.0], [87.3, 859.0], [87.4, 864.0], [87.5, 869.0], [87.6, 874.0], [87.7, 878.0], [87.8, 882.0], [87.9, 887.0], [88.0, 892.0], [88.1, 898.0], [88.2, 902.0], [88.3, 908.0], [88.4, 912.0], [88.5, 917.0], [88.6, 923.0], [88.7, 928.0], [88.8, 933.0], [88.9, 938.0], [89.0, 942.0], [89.1, 947.0], [89.2, 952.0], [89.3, 956.0], [89.4, 961.0], [89.5, 966.0], [89.6, 969.0], [89.7, 974.0], [89.8, 978.0], [89.9, 983.0], [90.0, 988.0], [90.1, 993.0], [90.2, 998.0], [90.3, 1003.0], [90.4, 1008.0], [90.5, 1013.0], [90.6, 1019.0], [90.7, 1025.0], [90.8, 1030.0], [90.9, 1036.0], [91.0, 1041.0], [91.1, 1046.0], [91.2, 1053.0], [91.3, 1058.0], [91.4, 1064.0], [91.5, 1070.0], [91.6, 1079.0], [91.7, 1086.0], [91.8, 1094.0], [91.9, 1100.0], [92.0, 1106.0], [92.1, 1112.0], [92.2, 1118.0], [92.3, 1125.0], [92.4, 1131.0], [92.5, 1139.0], [92.6, 1147.0], [92.7, 1155.0], [92.8, 1162.0], [92.9, 1170.0], [93.0, 1177.0], [93.1, 1185.0], [93.2, 1194.0], [93.3, 1202.0], [93.4, 1210.0], [93.5, 1220.0], [93.6, 1228.0], [93.7, 1236.0], [93.8, 1246.0], [93.9, 1260.0], [94.0, 1274.0], [94.1, 1286.0], [94.2, 1299.0], [94.3, 1315.0], [94.4, 1330.0], [94.5, 1344.0], [94.6, 1358.0], [94.7, 1373.0], [94.8, 1388.0], [94.9, 1409.0], [95.0, 1426.0], [95.1, 1445.0], [95.2, 1462.0], [95.3, 1479.0], [95.4, 1499.0], [95.5, 1513.0], [95.6, 1528.0], [95.7, 1549.0], [95.8, 1567.0], [95.9, 1587.0], [96.0, 1611.0], [96.1, 1642.0], [96.2, 1664.0], [96.3, 1684.0], [96.4, 1706.0], [96.5, 1733.0], [96.6, 1758.0], [96.7, 1798.0], [96.8, 1832.0], [96.9, 1890.0], [97.0, 1950.0], [97.1, 2006.0], [97.2, 2051.0], [97.3, 2123.0], [97.4, 2202.0], [97.5, 2291.0], [97.6, 2397.0], [97.7, 2517.0], [97.8, 2662.0], [97.9, 2837.0], [98.0, 3009.0], [98.1, 3208.0], [98.2, 3463.0], [98.3, 3648.0], [98.4, 3865.0], [98.5, 4024.0], [98.6, 4189.0], [98.7, 4320.0], [98.8, 4499.0], [98.9, 4674.0], [99.0, 4820.0], [99.1, 4962.0], [99.2, 5176.0], [99.3, 5389.0], [99.4, 5639.0], [99.5, 5905.0], [99.6, 6122.0], [99.7, 6495.0], [99.8, 7002.0], [99.9, 7989.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 14687.0, "series": [{"data": [[0.0, 3157.0], [100.0, 5510.0], [200.0, 5903.0], [300.0, 5518.0], [400.0, 13832.0], [500.0, 14687.0], [600.0, 8580.0], [700.0, 3739.0], [800.0, 1720.0], [900.0, 1482.0], [1000.0, 1181.0], [1100.0, 981.0], [1200.0, 658.0], [1300.0, 466.0], [1400.0, 387.0], [1500.0, 386.0], [1600.0, 308.0], [1700.0, 232.0], [1800.0, 148.0], [1900.0, 122.0], [2000.0, 125.0], [2100.0, 93.0], [2200.0, 85.0], [2300.0, 65.0], [2400.0, 55.0], [2500.0, 59.0], [2600.0, 42.0], [2700.0, 36.0], [2800.0, 36.0], [2900.0, 49.0], [3000.0, 36.0], [3100.0, 35.0], [3200.0, 34.0], [3300.0, 24.0], [3400.0, 36.0], [3500.0, 33.0], [3700.0, 27.0], [3600.0, 37.0], [3800.0, 43.0], [3900.0, 46.0], [4000.0, 35.0], [4300.0, 43.0], [4100.0, 50.0], [4200.0, 51.0], [4400.0, 43.0], [4600.0, 49.0], [4500.0, 33.0], [4800.0, 59.0], [4700.0, 42.0], [5100.0, 35.0], [5000.0, 30.0], [4900.0, 45.0], [5200.0, 27.0], [5300.0, 40.0], [5600.0, 35.0], [5500.0, 23.0], [5400.0, 27.0], [5700.0, 24.0], [5800.0, 24.0], [5900.0, 37.0], [6000.0, 34.0], [6100.0, 15.0], [6200.0, 18.0], [6300.0, 23.0], [6400.0, 19.0], [6500.0, 12.0], [6600.0, 13.0], [6700.0, 21.0], [6800.0, 16.0], [6900.0, 7.0], [7000.0, 14.0], [7100.0, 13.0], [7200.0, 6.0], [7400.0, 8.0], [7300.0, 6.0], [7500.0, 8.0], [7600.0, 6.0], [7700.0, 6.0], [7800.0, 3.0], [7900.0, 3.0], [8000.0, 1.0], [8100.0, 5.0], [8300.0, 4.0], [8600.0, 3.0], [8400.0, 6.0], [8700.0, 2.0], [8500.0, 3.0], [8200.0, 2.0], [8900.0, 7.0], [9000.0, 3.0], [8800.0, 2.0], [9400.0, 1.0], [9700.0, 2.0], [9600.0, 2.0], [9800.0, 1.0], [10000.0, 1.0], [9900.0, 1.0], [10600.0, 1.0], [10700.0, 1.0], [10500.0, 1.0], [10300.0, 2.0], [10400.0, 1.0], [10800.0, 1.0], [11100.0, 1.0], [11000.0, 1.0], [10900.0, 1.0], [11300.0, 1.0], [11500.0, 1.0], [11700.0, 1.0], [11900.0, 1.0], [11800.0, 1.0], [12100.0, 1.0], [12700.0, 1.0], [12500.0, 2.0], [13800.0, 1.0], [14300.0, 1.0], [14700.0, 1.0], [15700.0, 1.0], [17200.0, 1.0], [16900.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 17200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 3261.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 34097.0, "series": [{"data": [[0.0, 34097.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 33709.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 3261.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 12.023185673892524, "minX": 1.72722576E12, "maxY": 100.0, "series": [{"data": [[1.72722594E12, 70.54334067143624], [1.72722624E12, 100.0], [1.72722576E12, 12.023185673892524], [1.7272263E12, 100.0], [1.72722582E12, 30.416061286487935], [1.72722612E12, 100.0], [1.72722618E12, 100.0], [1.727226E12, 90.6285714285714], [1.72722606E12, 100.0], [1.72722636E12, 87.07894736842104], [1.72722588E12, 49.52217489351031]], "isOverall": false, "label": "Main Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72722636E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 69.32242990654207, "minX": 1.0, "maxY": 1051.976923076922, "series": [{"data": [[2.0, 126.234375], [3.0, 77.86619718309856], [4.0, 72.5121951219512], [5.0, 69.32242990654207], [6.0, 75.34042553191485], [7.0, 97.5290102389079], [8.0, 96.67669172932331], [9.0, 114.39382239382246], [10.0, 100.78767123287669], [11.0, 93.01977401129945], [12.0, 132.93416927899693], [13.0, 99.43187660668384], [14.0, 104.8489702517162], [15.0, 120.98382749326147], [16.0, 141.80225988700573], [17.0, 213.68803418803424], [18.0, 192.33561643835623], [19.0, 140.98591549295773], [20.0, 194.79264214046808], [21.0, 202.49677419354828], [22.0, 221.058064516129], [23.0, 183.32884097035043], [24.0, 324.3883928571429], [25.0, 216.61127596439167], [26.0, 206.5252525252525], [27.0, 179.64745011086472], [28.0, 169.959349593496], [29.0, 213.8525798525798], [30.0, 187.98969072164957], [31.0, 232.80620155038756], [32.0, 252.4973958333334], [33.0, 220.4539473684208], [34.0, 335.2033333333334], [35.0, 426.3870967741936], [36.0, 256.57076566125295], [37.0, 321.4454022988505], [38.0, 211.19408502772652], [39.0, 259.86784140969166], [40.0, 315.28272251308886], [41.0, 256.55720338983036], [42.0, 255.2525252525253], [43.0, 259.69214876033067], [44.0, 375.49858356940524], [45.0, 383.1785714285718], [46.0, 362.1111111111111], [47.0, 322.2729357798164], [48.0, 294.4670781893002], [49.0, 430.49137931034454], [50.0, 312.9437229437231], [51.0, 366.63840399002504], [52.0, 500.5000000000004], [53.0, 406.4754521963824], [54.0, 468.78901734104045], [55.0, 475.57566765578656], [56.0, 515.1386430678467], [57.0, 488.9594202898549], [58.0, 442.24494949494965], [59.0, 461.1182519280202], [60.0, 500.2807017543859], [61.0, 405.73942093541217], [62.0, 511.7919075144509], [63.0, 814.0663265306121], [64.0, 914.1680672268909], [65.0, 586.9640718562879], [66.0, 540.0380434782606], [67.0, 725.369127516779], [68.0, 517.5180412371137], [69.0, 617.247491638796], [70.0, 653.5014925373139], [71.0, 590.5382436260621], [72.0, 551.7883211678837], [73.0, 425.2722323049002], [74.0, 492.785714285714], [75.0, 566.1951807228913], [76.0, 561.058823529412], [77.0, 595.3012048192772], [78.0, 547.1161731207291], [79.0, 592.6853333333335], [80.0, 748.696048632219], [81.0, 715.9371069182384], [82.0, 761.2985074626862], [83.0, 662.7581120943952], [84.0, 735.5349462365593], [85.0, 600.6930232558141], [86.0, 652.525885558583], [87.0, 754.9186991869922], [88.0, 752.7464788732397], [89.0, 1051.976923076922], [90.0, 708.1545253863137], [91.0, 612.2119047619052], [92.0, 676.1518987341769], [93.0, 633.1585903083695], [94.0, 681.9030612244904], [95.0, 634.7310061601639], [96.0, 600.3004484304928], [97.0, 636.1257995735607], [98.0, 646.2195121951225], [99.0, 551.1216216216225], [100.0, 863.0513637268492], [1.0, 98.0392156862745]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[76.23014901431085, 635.6213291682495]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 747.3333333333334, "minX": 1.72722576E12, "maxY": 4907757.083333333, "series": [{"data": [[1.72722594E12, 4468846.883333334], [1.72722624E12, 4381431.983333333], [1.72722576E12, 3261824.033333333], [1.7272263E12, 3983050.6666666665], [1.72722582E12, 4655093.266666667], [1.72722612E12, 4199461.4], [1.72722618E12, 4390702.383333334], [1.727226E12, 4841975.533333333], [1.72722606E12, 4372255.416666667], [1.72722636E12, 233644.46666666667], [1.72722588E12, 4907757.083333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72722594E12, 14293.733333333334], [1.72722624E12, 14014.466666666667], [1.72722576E12, 10433.166666666666], [1.7272263E12, 12740.066666666668], [1.72722582E12, 14889.633333333333], [1.72722612E12, 13432.333333333334], [1.72722618E12, 14043.966666666667], [1.727226E12, 15487.5], [1.72722606E12, 13984.966666666667], [1.72722636E12, 747.3333333333334], [1.72722588E12, 15697.933333333332]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72722636E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 112.01394910461796, "minX": 1.72722576E12, "maxY": 932.5827415869096, "series": [{"data": [[1.72722594E12, 571.6697853604885], [1.72722624E12, 839.4824586022997], [1.72722576E12, 112.01394910461796], [1.7272263E12, 932.5827415869096], [1.72722582E12, 236.76489235239706], [1.72722612E12, 843.0389458272335], [1.72722618E12, 870.6091583811792], [1.727226E12, 683.9734603174605], [1.72722606E12, 844.552102376602], [1.72722636E12, 664.9921052631581], [1.72722588E12, 374.22037083437806]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72722636E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 93.12309142318566, "minX": 1.72722576E12, "maxY": 712.4038283420806, "series": [{"data": [[1.72722594E12, 487.955971381399], [1.72722624E12, 654.0780241369629], [1.72722576E12, 93.12309142318566], [1.7272263E12, 712.4038283420806], [1.72722582E12, 216.82631092326014], [1.72722612E12, 648.6695461200616], [1.72722618E12, 664.6794566587324], [1.727226E12, 551.1118730158728], [1.72722606E12, 639.2280973140205], [1.72722636E12, 491.00789473684205], [1.72722588E12, 353.312828864945]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72722636E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.4067860508953825, "minX": 1.72722576E12, "maxY": 11.61639394874963, "series": [{"data": [[1.72722594E12, 5.448128783709419], [1.72722624E12, 9.50000000000006], [1.72722576E12, 0.4067860508953825], [1.7272263E12, 11.61639394874963], [1.72722582E12, 1.3522652225597693], [1.72722612E12, 8.982723279648592], [1.72722618E12, 9.907295896933203], [1.727226E12, 6.789206349206365], [1.72722606E12, 9.68780762199413], [1.72722636E12, 3.899999999999998], [1.72722588E12, 2.7731145076422017]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72722636E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 40.0, "minX": 1.72722576E12, "maxY": 17229.0, "series": [{"data": [[1.72722594E12, 6760.0], [1.72722624E12, 10708.0], [1.72722576E12, 964.0], [1.7272263E12, 15711.0], [1.72722582E12, 2241.0], [1.72722612E12, 9693.0], [1.72722618E12, 17229.0], [1.727226E12, 6882.0], [1.72722606E12, 12763.0], [1.72722636E12, 5403.0], [1.72722588E12, 3768.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72722594E12, 225.0], [1.72722624E12, 397.0], [1.72722576E12, 40.0], [1.7272263E12, 352.0], [1.72722582E12, 73.0], [1.72722612E12, 312.0], [1.72722618E12, 329.0], [1.727226E12, 358.0], [1.72722606E12, 334.0], [1.72722636E12, 377.0], [1.72722588E12, 122.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72722594E12, 744.0], [1.72722624E12, 1184.0], [1.72722576E12, 195.0], [1.7272263E12, 1498.1000000000004], [1.72722582E12, 369.0], [1.72722612E12, 1285.0], [1.72722618E12, 1246.0], [1.727226E12, 876.0], [1.72722606E12, 1166.0], [1.72722636E12, 958.3000000000013], [1.72722588E12, 551.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72722594E12, 3533.429999999973], [1.72722624E12, 5750.489999999994], [1.72722576E12, 406.9399999999996], [1.7272263E12, 6229.170000000003], [1.72722582E12, 739.8399999999992], [1.72722612E12, 5381.0], [1.72722618E12, 5971.539999999995], [1.727226E12, 4631.48], [1.72722606E12, 6017.160000000001], [1.72722636E12, 4407.66], [1.72722588E12, 1007.8500000000004]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72722594E12, 470.0], [1.72722624E12, 622.0], [1.72722576E12, 90.0], [1.7272263E12, 623.0], [1.72722582E12, 204.0], [1.72722612E12, 597.0], [1.72722618E12, 600.0], [1.727226E12, 527.0], [1.72722606E12, 577.0], [1.72722636E12, 442.5], [1.72722588E12, 337.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.72722594E12, 1064.0999999999985], [1.72722624E12, 1726.6499999999996], [1.72722576E12, 251.69999999999982], [1.7272263E12, 2258.0499999999993], [1.72722582E12, 472.39999999999964], [1.72722612E12, 1858.4499999999998], [1.72722618E12, 1968.8999999999996], [1.727226E12, 1274.5999999999995], [1.72722606E12, 1828.7999999999993], [1.72722636E12, 2144.5], [1.72722588E12, 632.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72722636E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 53.0, "minX": 3.0, "maxY": 4258.0, "series": [{"data": [[3.0, 86.0], [7.0, 3894.0], [11.0, 1974.0], [12.0, 2703.0], [16.0, 53.0], [18.0, 53.0], [19.0, 534.0], [20.0, 72.0], [21.0, 73.0], [25.0, 1826.0], [29.0, 317.0], [30.0, 2220.0], [35.0, 1524.0], [34.0, 1716.5], [38.0, 1546.0], [41.0, 1371.0], [42.0, 1023.0], [45.0, 1004.0], [47.0, 1191.0], [48.0, 60.5], [50.0, 4258.0], [51.0, 1508.0], [52.0, 673.0], [54.0, 695.5], [55.0, 1135.0], [57.0, 598.5], [56.0, 709.5], [59.0, 56.0], [58.0, 1016.5], [60.0, 669.5], [67.0, 227.5], [64.0, 918.5], [66.0, 956.5], [65.0, 699.0], [69.0, 772.5], [71.0, 724.0], [70.0, 981.5], [72.0, 474.5], [73.0, 427.0], [75.0, 1006.0], [74.0, 999.5], [79.0, 92.0], [76.0, 877.0], [78.0, 1200.5], [80.0, 229.5], [83.0, 663.0], [81.0, 104.0], [82.0, 771.0], [85.0, 674.0], [84.0, 579.0], [87.0, 477.0], [91.0, 686.0], [88.0, 769.0], [90.0, 797.5], [89.0, 830.0], [93.0, 568.5], [95.0, 571.0], [94.0, 506.0], [99.0, 556.0], [96.0, 583.5], [97.0, 714.0], [98.0, 736.5], [100.0, 694.0], [101.0, 672.0], [103.0, 639.5], [102.0, 713.5], [104.0, 525.5], [106.0, 271.0], [105.0, 612.0], [107.0, 714.0], [109.0, 550.0], [111.0, 546.5], [110.0, 627.0], [108.0, 604.5], [112.0, 638.5], [113.0, 634.0], [115.0, 590.0], [114.0, 597.0], [116.0, 536.5], [117.0, 530.0], [118.0, 348.5], [119.0, 611.0], [123.0, 572.0], [122.0, 597.0], [120.0, 464.5], [121.0, 594.0], [125.0, 569.0], [126.0, 563.0], [124.0, 575.0], [127.0, 467.5], [129.0, 527.0], [133.0, 472.0], [131.0, 424.5], [135.0, 496.0], [134.0, 450.0], [132.0, 570.0], [128.0, 595.0], [130.0, 609.0], [140.0, 152.5], [139.0, 480.0], [143.0, 507.0], [137.0, 446.5], [142.0, 409.5], [141.0, 361.5], [138.0, 532.0], [136.0, 552.0], [149.0, 407.0], [148.0, 494.0], [147.0, 474.0], [146.0, 526.0], [145.0, 459.0], [150.0, 490.0], [144.0, 510.5], [151.0, 490.0], [154.0, 450.0], [152.0, 365.5], [156.0, 402.5], [157.0, 484.0], [155.0, 390.0], [158.0, 477.0], [153.0, 499.0], [159.0, 517.5], [163.0, 447.0], [160.0, 406.5], [166.0, 304.5], [165.0, 475.5], [162.0, 250.0], [164.0, 386.0], [167.0, 439.0], [161.0, 466.5], [175.0, 206.0], [170.0, 212.5], [171.0, 398.5], [168.0, 354.0], [169.0, 450.0], [174.0, 489.5], [177.0, 226.0], [183.0, 236.5], [181.0, 198.0], [176.0, 236.0], [182.0, 409.0], [178.0, 435.0], [189.0, 373.5], [184.0, 398.0], [196.0, 333.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 196.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 44.0, "minX": 3.0, "maxY": 4213.5, "series": [{"data": [[3.0, 79.0], [7.0, 3647.0], [11.0, 1475.0], [12.0, 2510.0], [16.0, 45.0], [18.0, 44.0], [19.0, 509.0], [20.0, 50.5], [21.0, 61.0], [25.0, 1712.0], [29.0, 283.5], [30.0, 2074.0], [35.0, 1500.0], [34.0, 1681.5], [38.0, 1407.0], [41.0, 1347.0], [42.0, 981.5], [45.0, 892.0], [47.0, 1160.0], [48.0, 54.0], [50.0, 4213.5], [51.0, 1094.0], [52.0, 633.0], [54.0, 439.0], [55.0, 943.0], [57.0, 475.0], [56.0, 478.5], [59.0, 50.0], [58.0, 846.5], [60.0, 655.0], [67.0, 213.0], [64.0, 615.5], [66.0, 878.5], [65.0, 682.0], [69.0, 680.0], [71.0, 717.0], [70.0, 935.0], [72.0, 319.5], [73.0, 322.0], [75.0, 883.5], [74.0, 986.0], [79.0, 74.0], [76.0, 736.0], [78.0, 908.0], [80.0, 212.5], [83.0, 634.0], [81.0, 99.0], [82.0, 740.0], [85.0, 630.0], [84.0, 558.5], [87.0, 434.0], [91.0, 658.0], [88.0, 746.0], [90.0, 769.5], [89.0, 804.0], [93.0, 546.5], [95.0, 561.0], [94.0, 492.0], [99.0, 531.0], [96.0, 574.5], [97.0, 684.0], [98.0, 707.0], [100.0, 660.0], [101.0, 618.0], [103.0, 617.0], [102.0, 689.5], [104.0, 515.5], [106.0, 263.0], [105.0, 591.5], [107.0, 686.0], [109.0, 527.0], [111.0, 528.5], [110.0, 601.5], [108.0, 587.5], [112.0, 620.0], [113.0, 615.0], [115.0, 576.0], [114.0, 571.5], [116.0, 520.5], [117.0, 519.0], [118.0, 316.0], [119.0, 579.5], [123.0, 543.0], [122.0, 571.0], [120.0, 453.0], [121.0, 561.0], [125.0, 535.0], [126.0, 551.0], [124.0, 550.0], [127.0, 450.5], [129.0, 516.0], [133.0, 455.0], [131.0, 411.0], [135.0, 486.0], [134.0, 439.0], [132.0, 551.0], [128.0, 578.0], [130.0, 589.0], [140.0, 140.5], [139.0, 468.0], [143.0, 493.0], [137.0, 431.0], [142.0, 398.5], [141.0, 354.0], [138.0, 520.0], [136.0, 532.0], [149.0, 398.0], [148.0, 484.0], [147.0, 465.5], [146.0, 515.0], [145.0, 444.0], [150.0, 478.0], [144.0, 496.0], [151.0, 478.0], [154.0, 437.0], [152.0, 355.0], [156.0, 333.5], [157.0, 473.0], [155.0, 383.0], [158.0, 466.0], [153.0, 488.0], [159.0, 509.0], [163.0, 438.0], [160.0, 324.0], [166.0, 294.0], [165.0, 466.0], [162.0, 242.0], [164.0, 378.0], [167.0, 431.0], [161.0, 450.0], [175.0, 191.5], [170.0, 205.5], [171.0, 337.5], [168.0, 344.0], [169.0, 440.0], [174.0, 482.5], [177.0, 217.0], [183.0, 229.0], [181.0, 191.0], [176.0, 230.0], [182.0, 402.0], [178.0, 427.5], [189.0, 354.0], [184.0, 388.5], [196.0, 324.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 196.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 4.666666666666667, "minX": 1.72722576E12, "maxY": 133.36666666666667, "series": [{"data": [[1.72722594E12, 121.45], [1.72722624E12, 118.78333333333333], [1.72722576E12, 88.75], [1.7272263E12, 107.96666666666667], [1.72722582E12, 126.51666666666667], [1.72722612E12, 113.83333333333333], [1.72722618E12, 119.0], [1.727226E12, 131.6], [1.72722606E12, 118.51666666666667], [1.72722636E12, 4.666666666666667], [1.72722588E12, 133.36666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72722636E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 6.333333333333333, "minX": 1.72722576E12, "maxY": 133.03333333333333, "series": [{"data": [[1.72722594E12, 121.13333333333334], [1.72722624E12, 118.76666666666667], [1.72722576E12, 88.41666666666667], [1.7272263E12, 107.96666666666667], [1.72722582E12, 126.18333333333334], [1.72722612E12, 113.83333333333333], [1.72722618E12, 119.01666666666667], [1.727226E12, 131.25], [1.72722606E12, 118.51666666666667], [1.72722636E12, 6.333333333333333], [1.72722588E12, 133.03333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72722636E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 6.333333333333333, "minX": 1.72722576E12, "maxY": 133.03333333333333, "series": [{"data": [[1.72722594E12, 121.13333333333334], [1.72722624E12, 118.76666666666667], [1.72722576E12, 88.41666666666667], [1.7272263E12, 107.96666666666667], [1.72722582E12, 126.18333333333334], [1.72722612E12, 113.83333333333333], [1.72722618E12, 119.01666666666667], [1.727226E12, 131.25], [1.72722606E12, 118.51666666666667], [1.72722636E12, 6.333333333333333], [1.72722588E12, 133.03333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72722636E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 6.333333333333333, "minX": 1.72722576E12, "maxY": 133.03333333333333, "series": [{"data": [[1.72722594E12, 121.13333333333334], [1.72722624E12, 118.76666666666667], [1.72722576E12, 88.41666666666667], [1.7272263E12, 107.96666666666667], [1.72722582E12, 126.18333333333334], [1.72722612E12, 113.83333333333333], [1.72722618E12, 119.01666666666667], [1.727226E12, 131.25], [1.72722606E12, 118.51666666666667], [1.72722636E12, 6.333333333333333], [1.72722588E12, 133.03333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72722636E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -14400000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

