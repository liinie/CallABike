app.controller('MilestonesCtrl',['$scope','$state',function($scope,$state){
  $scope.milestones = [
    {
      date: new Date("2016-12-01"),
      goal: 'Getting the whole stack to run'
    },
    {
      date: new Date("2016-12-15"),
      goal: 'Vertical Prototype: to keep the charts readable, we clusterd the cities by their total booking amount, you can interactively select subsets as well as single selections, on hover will show you the exact data'
    },
    {
      date: new Date("2017-01-12"),
      goal: 'We prepared some multivariate data that we want to encode, the SQL statement to prepare the data can be found in the text file of the submission. '
    },
  ]
}]);
