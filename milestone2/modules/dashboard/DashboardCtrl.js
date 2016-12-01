app.controller('DashboardCtrl',['$state','$scope','dataService', function($state,$scope,dataService){

  $scope.select = {
    value: "Option1",
    choices: ["Option1", "I'm an option", "This is materialize", "No, this is Patrick."]
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
        axisLabel: 'X Axis',
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
      html: "<h5>Call A Bike Bookings per day</h5>"
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


  function getBookingCountDaily() {
    dataService.getBookingCountDaily().then(function(data){
      $scope.bookingCountDailyData =
        [
          {
            key: 'Number of bookings daily',
            values: data.rows.map(d => {
              return {
                x: new Date(d['booking date']).getTime(),
                y: d['number of bookings']
              }
            })
          }
        ]
    });

  }

  getBookingCountDaily();

}]);