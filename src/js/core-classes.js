Manufacturer = function () {
    this.name = "";
    this.location = {latitude: Number(), longitude: Number()};
    //this.location.latitude = Number();
    //this.location.longitude = Number();
};

Product = function () {
    this.name = "";
    this.type = "";
    this.id = "";
    this.retailer = {};
    this.manufacturer = [];
    this.components = [];
};

Retailer = function () {
    this.location = "";
    this.products = {};
};