Manufacturer = function () {
    this.name = "";
    this.address = "";
    this.location = {latitude: Number(), longitude: Number()};
    //this.location.latitude = Number();
    //this.location.longitude = Number();
    this.workingConditions = {
        salery: Number(),
        workingHours: Number(),
        employmentProtection: Number()
    };
    this.setAddress = function(address) {
        this.address = address;
            geocoder = new google.maps.Geocoder();
            geocoder.geocode({
            'address': address
            }, function(results, status) {      
                this.location.latitude = results[0].geometry.location.lat();    
                this.location.longitude = results[0].geometry.location.lng();      
                console.log(location.latitude);
                console.log(location.longitude);
            });
    }
};

Product = function () {
    this.name = "";
    this.type = "";
    this.id = "";
    this.retailer = {};
    this.manufacturer = [];
    this.components = [];
    this.carbonFootprint = Number();
    this.price = {
        energyCosts: Number(),
        materialCosts: Number(),
        manufacturingCosts: Number(),
        productPrice: Number()
    };
};

Retailer = function () {
    this.location = "";
    this.products = {};
};