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
        this.location = Utils.getLocationFromAddress(address);
    };
    
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
    this.compBubbles = [];
    this.compArcs = [];
    this.isExpanded = false;
};

Retailer = function () {
    this.location = "";
    this.products = {};
};