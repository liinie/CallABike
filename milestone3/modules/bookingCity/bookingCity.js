app.controller('BookingCityCtrl',['$state','$scope','dataService', function($state,$scope,dataService){

    $scope.first10  = [];
    $scope.second10  = [];
    $scope.third10 = [];
    $scope.fourth10 = [];
    $scope.fifth10 = [];

    $scope.getData = function(subset){

        switch(subset){
            case 1: {
                $scope.bookingCountDailyData = $scope.origData.filter(c => $scope.first10.indexOf(c.key) > -1);
                $scope.select.value = $scope.first10;
                break;
            }
            case 2: {
                $scope.bookingCountDailyData = $scope.origData.filter(c => $scope.second10.indexOf(c.key) > -1);
                $scope.select.value = $scope.second10;
                break;
            }
            case 3: {
                $scope.bookingCountDailyData = $scope.origData.filter(c => $scope.third10.indexOf(c.key) > -1);
                $scope.select.value = $scope.third10;
                break;
            }
            case 4: {
                $scope.bookingCountDailyData = $scope.origData.filter(c => $scope.fourth10.indexOf(c.key) > -1);
                $scope.select.value = $scope.fourth10;
                break;
            }
            case 5: {
                $scope.bookingCountDailyData = $scope.origData.filter(c => $scope.fifth10.indexOf(c.key) > -1);
                $scope.select.value = $scope.fifth10;
                break;
            }
            default: {
                $scope.bookingCountDailyData = $scope.origData.filter(c => $scope.first10.indexOf(c.key) > -1);
                $scope.select.value = $scope.first10;
                break;
            }
        }
        console.log( $scope.select.value);
    };
    /* Chart options */
    $scope.bookingCountDailyOptions = {
        chart: {
            type: 'lineWithFocusChart',
            height: 800,
            margin : {
                top: 60,
                right: 60,
                bottom: 60,
                left: 60
            },
            duration: 500,
            useInteractiveGuideline: true,
            xAxis: {
                axisLabel: 'Date',
                rotateLabels: false,
                tickFormat: function(d){
                    return d3.time.format('%x')(new Date(d))
                }
            },
            x2Axis: {
                tickFormat: function(d){
                    return d3.time.format('%x')(new Date(d))
                }
            },
            yAxis: {
                axisLabel: 'Bookings',
                tickFormat: function(d){
                    return d3.format('d')(d);
                },
                rotateYLabel: false
            },
            y2Axis: {
                tickFormat: function(d){
                    return d3.format('d')(d);
                }
            },
            tooltip: {
                keyFormatter: function(d) {
                    return d3.time.format('%x')(new Date(d));
                }
            },


        },
        title: {
            enable: false,
            html: "<h5>Call A Bike Bookings per city daily</h5>"
        },
        subtitle: {
            "enable": false,
            "html": ""
            ,
            "css": {
                "text-align": "center",
                "margin": "10px 13px 0px 7px"
            }
        },
        caption: {
            "enable": false,
            "html":
            "<b>Figure 1.</b> " +
            "Lorem ipsum dolor sit amet, at eam blandit sadipscing, " +
            "<span style=\"text-decoration: underline;\">vim adhuc sanctus disputando ex</span>, " +
            "cu usu affert alienum urbanitas. <i>Cum in purto erat, mea ne nominavi persecuti reformidans." +
            "</i> Docendi blandit abhorreant ea has, minim tantas alterum pro eu. <span style=\"color: darkred;\">" +
            "Exerci graeci ad vix, elit tacimates ea duo</span>. " +
            "Id mel eruditi fuisset. Stet vidit patrioque in pro, eum ex veri verterem abhorreant, " +
            "id unum oportere intellegam nec<sup>[1, " +
            "<a href=\"https://github.com/krispo/angular-nvd3\" target=\"_blank\">2</a>, 3]</sup>.",
            "css": {
                "text-align": "justify",
                "margin": "10px 13px 0px 7px"
            }
        }
    };


    function getBookingCountDaily() {
        dataService.getBookingsDailyPerCity().then(function(data){
            dataService.getBookingStationPerCity().then(function (rankedCities) {
                let cities = rankedCities.data.rows;
                for(let x = 0; x<cities.length; x++){
                    if(x<10) $scope.first10.push(cities[x].city);
                    else if(x<20) $scope.second10.push(cities[x].city);
                    else if(x<30) $scope.third10.push(cities[x].city);
                    else if(x<40) $scope.fourth10.push(cities[x].city);
                    else if(x<50) $scope.fifth10.push(cities[x].city);
                }
                $scope.select = {
                    value: angular.copy($scope.first10),
                    choices: cities.map(c=>c.city)
                };

                $scope.origData =
                    data.data.map( d=> {
                        return {
                            key: d.city,
                            values: d.bookings.map(b=>{
                                return {
                                    x: new Date(b.date).getTime(),
                                    y: b.count
                                }
                            })
                        }
                    });

                $scope.bookingCountDailyData = $scope.origData.filter(c=>
                    $scope.first10.indexOf(c.key) > -1
                );
            })


        });
    }
    getBookingCountDaily();

}]);