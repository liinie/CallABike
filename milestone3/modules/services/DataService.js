//TODO: use this for all data
app.service('dataService',['$q','$http',function($q,$http){
    return {

        getData: function getData(){
            return $http.get('modules/users/data.json').then(function(data){
                return data;
            })
        },

        getBookingCountDaily: function () {
            return $http.get('data/BookingCountDaily.json').then(function(data){
                return data;
            })
        },

        getBookingStationPerCity: function () {
            return $http.get('data/BookingStationCountPerCity.json').then(function(data){
                return data;
            })
        },

        getBookingsDailyPerCity: function () {
            return $http.get('data/cityBookingsDaily.json').then(function(data){
                return data;
            })
        },
    };
}]);