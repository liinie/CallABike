app.controller('DashboardCtrl',['$state','$scope',function($state,$scope){
	$scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
	$scope.series = ['Series A', 'Series B'];
	$scope.data = [
		[65, 59, 80, 81, 56, 55, 40],
		[28, 48, 40, 19, 86, 27, 90]
	];
	$scope.labelsPie = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
	$scope.dataPie = [300, 500, 100];

    $scope.select = {
        value: "Option1",
        choices: ["Option1", "I'm an option", "This is materialize", "No, this is Patrick."]
    };

}]);