app.controller('BookingCityCtrl',['$state','$scope','dataService', function($state,$scope,dataService){

  /*

   $scope.options = {
   chart: {
   type: 'parallelCoordinates',
   height: 450,
   margin: {
   top: 30,
   right: 0,
   bottom: 10,
   left: 0
   },
   dimensions: [
   "bookings",
   "stations"
   ],
   showLegend: true,
   },
   showLegend: true,
   title: {
   enable: true,
   html: "<h5>Call A Bike Bookings and Stations per City</h5>"
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


   function getData() {
   dataService.getBookingStationPerCity().then(function(data){
   console.log(data.data);
   $scope.data = data.data.rows.map(d=>{
   return {
   "name": d.city,
   "bookings": d.num_bookings,
   "stations": d.num_stations
   }
   });
   console.log($scope.data);

   });

   }

   getData();
   */

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