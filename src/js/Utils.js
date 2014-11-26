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
    
    this.generateId = function () {
        // Source: http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random()*16)%16 | 0;
            d = Math.floor(d/16);
            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uuid;
    };
};
var Utils = new UTILS();