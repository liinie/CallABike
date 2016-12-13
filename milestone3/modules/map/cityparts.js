app.controller('CitypartsCtrl',['$state','$scope','dataService', function($state,$scope,dataService){

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