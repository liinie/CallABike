app.controller('LoginCtrl',['$scope','$state',function($scope,$state){
  $scope.message="";
  $scope.show_message=false;
  $scope.email = 'Lin.Xu@campus.lmu.de';
  $scope.password = 'InfoVisIsCool';
  console.group('Login Data');
  console.log('Email: ');
  console.log('%c' + $scope.email, 'color:green');
  console.log('Password:');
  console.log('%c' + $scope.password, 'color:blue');
  console.groupEnd();
  $scope.loginAction=function(){
    var data=$scope.user;
    if(data.email==='Lin.Xu@campus.lmu.de' && data.password==='InfoVisIsCool'){
      localStorage.session_id = Date.now();
      $state.go('main.dashboard');
    }
    else{
      $scope.show_message=true;
      $scope.message='Sorry incorrect username or password please try again';
    }
  }
}]);
