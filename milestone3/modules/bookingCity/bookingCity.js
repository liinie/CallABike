app.controller('BookingCityCtrl',['$state','$scope','dataService', function($state,$scope,dataService){

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
            enable: true,
            html: "<h5>Call A Bike Bookings per city daily</h5>"
        },
        subtitle: {
            "enable": true,
            "text": "Available datasets ranges from 2014-01-01 to 2016-07-04",
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

  $scope.bookingCountDailyData2 =
    [
      {
        key: 'Number of bookings daily',
        values: data.data.rows.map(d => {
          return {
            x: new Date(d['booking date']).getTime(),
            y: d['number of bookings']
          }
        })
      }
    ];

    function getBookingCountDaily() {
        dataService.getBookingsDailyPerCity().then(function(data){
            console.log(data);
            $scope.bookingCountDailyData =
                data.data.map( (d, i)=> {
                    return {
                        key: d.city,
                        values: {
                            x: d.day,
                            y: d.count
                        }
                    }
                });
          /*
           [
           {
           key: data.data.map(d=> d.city),
           values: data.data.map(d => {
           return {
           x: new Date(d['day']).getTime(),
           y: d['bookings']
           }
           })
           }
           ]
           */
        });

    }

    getBookingCountDaily();

    $scope.options = {
        chart: {
            type: 'multiBarHorizontalChart',
            height: 2000,
            margin : {
                top: 60,
                right: 60,
                bottom: 60,
                left: 110
            },
            x: function(d){return d.label;},
            y: function(d){return d.value;},
            //yErr: function(d){ return [-Math.abs(d.value * Math.random() * 0.3), Math.abs(d.value * Math.random() * 0.3)] },
            showControls: true,
            showValues: true,
            duration: 500,
            xAxis: {
                showMaxMin: false
            },
            yAxis: {
                axisLabel: 'Values',
                tickFormat: function(d){
                    return d3.format(',.2f')(d);
                }
            }
        },
        title: {
            enable: true,
            html: "<h5>Call A Bike Bookings and Stations per City</h5>"
        },
        subtitle: {
            "enable": true,
            "text": "Based on available datasets (ranges from 2014-01-01 to 2016-07-04)",
            "css": {
                "text-align": "center",
                "margin": "10px 13px 0px 7px"
            }
        },
    };


    function getData() {

        dataService.getBookingsDailyPerCity().then(function(data){
            $scope.data =
                [
                    {
                        key: 'Bookings',
                        values: data.data.rows.map(d => {
                            return {
                                label: d.city,
                                value: d.num_bookings
                            }
                        })
                    },
                    {
                        key: 'Stations',
                        values: data.data.rows.map(d => {
                            return {
                                label: d.city,
                                value: d.num_stations
                            }
                        })
                    }
                ];
            console.log(     JSON.stringify( $scope.data))
        });
    }
    function getRankData() {
        dataService.getBookingStationPerCity().then(function(data){
            $scope.data =
                [
                    {
                        key: 'Bookings',
                        values: data.data.rows.map(d => {
                            return {
                                label: d.city,
                                value: d.num_bookings
                            }
                        })
                    },
                    {
                        key: 'Stations',
                        values: data.data.rows.map(d => {
                            return {
                                label: d.city,
                                value: d.num_stations
                            }
                        })
                    }
                ];
            console.log(     JSON.stringify( $scope.data))
        });

    }

    getData();

}]);