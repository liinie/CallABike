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
    this.viewData = {
        carbonFootprint: Number(),
        addedCarbonFootprint: Number(),
        address: [""]
    };
    this.hasComponents = function () {
        return this.components.length > 0;
    };
    this.getCarbonFootprint = function () {
        if (this.hasComponents()) {
            var sumCarbonFootprint = 0.0;
            
            for (var idx in this.components) {
                sumCarbonFootprint += this.components[idx].getCarbonFootprint();
            }
            return sumCarbonFootprint + this.addedCarbonFootprint;
        }
        else {
            return this.addedCarbonFootprint;
        }
    };
    this.prepareViewData = function () {
        this.viewData.carbonFootprint = Math.round(100*this.carbonFootprint)/100;
        this.viewData.addedCarbonFootprint = Math.round(100*this.addedCarbonFootprint)/100;
        this.viewData.address = this.manufacturer.address.split(', ');
    };
    // we need this method since we can only access poperties from insed the data binding in sidebar
    this.computeData = function () {
        this.carbonFootprint =this.getCarbonFootprint();
        for (var idx in this.components) {
            this.components[idx].computeData();
        }
        this.prepareViewData();
    };
    this.getComponentNames = function () {
        var names = [];
        for (var idx in this.components) {
            names.push(this.components[idx].name);
        }
        return names;
    };
    this.getComponentCarbonFootprints = function () {
        var data = [];
        for (var idx in this.components) {
            data.push(this.components[idx].carbonFootprint);
        }
        return data;
    };
};

Retailer = function () {
    this.id = Utils.generateId();
    this.location = "";
    this.products = {};
};