app.controller('MilestonesCtrl',['$scope','$state',function($scope,$state){
  $scope.milestones = [
    {
      date: new Date("2016-12-01"),
      goal: 'Getting the whole stack to run'
    },
    {
      date: new Date("2016-12-15"),
      goal: 'Getting all the needed queries'
    },
    {
      date: new Date("2016-12-29"),
      goal: 'Finish all charts'
    },
    {
      date: new Date("2017-01-12"),
      goal: 'Finish all interactions'
    },
  ]
}]);
