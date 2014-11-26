UTILS = function () {
    this.getLocationFromAddress = function ( address ) {
        var geocoder = new google.maps.Geocoder();
        var geolocation = {latitude: 0, longitude: 0};
        geocoder.geocode({
            'address': address
        },
                         function(results, status) {      
            geolocation.latitude = results[0].geometry.location.lat();    
            geolocation.longitude = results[0].geometry.location.lng();      
        });
        return geolocation;
    };
};
var Utils = new UTILS();