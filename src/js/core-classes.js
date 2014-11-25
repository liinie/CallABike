Manufacturer = function () {
    this.name = "";
    this.location = {latitude: Number(), longitude: Number()};
    //this.location.latitude = Number();
    //this.location.longitude = Number();
    this.workingConditions = {
        salery: Number(),
        workingHours: Number(),
        employmentProtection: Number()
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
};

Retailer = function () {
    this.location = "";
    this.products = {};
};