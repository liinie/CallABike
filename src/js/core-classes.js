Manufacturer = function () {
    this.id = Utils.generateId();
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
    this.id = Utils.generateId();
    this.retailer = {};
    this.manufacturer = [];
    this.components = [];
    this.carbonFootprint = Number();
    this.addedCarbonFootprint = Number();
    this.price = {
        energyCosts: Number(),
        materialCosts: Number(),
        manufacturingCosts: Number(),
        productPrice: Number()
    };
    this.compBubbles = [];
    this.compArcs = [];
    this.isExpanded = false;
    this.hasComponents = function () {
        return this.components.length > 0;
    };
    this.getCarbonFootprint = function () {
        if (this.hasComponents()) {
            var sumCarbonFootprint = 0.0;
            
            for (var idx in this.components) {
                sumCarbonFootprint += this.components[idx].getCarbonFootprint();
                console.log(sumCarbonFootprint);
            }
            return sumCarbonFootprint + this.addedCarbonFootprint;
        }
        else {
            return this.addedCarbonFootprint;
        }
    };
    // we need this method since we can only access poperties from insed the data binding in sidebar
    this.computeData = function () {
        this.carbonFootprint = this.getCarbonFootprint();
    };
};

Retailer = function () {
    this.id = Utils.generateId();
    this.location = "";
    this.products = {};
};