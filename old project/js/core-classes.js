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
    
    // tells us whether a product has components or not
    this.hasComponents = function () {
        return this.components.length > 0;
    };
    
    // this aggregates the carbon footprint of the product by getting it from every component recursively
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
    
    // this creates the data that is uses by our sidebar component
    // it is separate from the real data since it is rounded and we use the direct data binding
    // this is not beautiful but it was the fastest way of making it work without messing up everything with long values
    this.prepareViewData = function () {
        this.viewData.carbonFootprint = Math.round(100*this.carbonFootprint)/100;
        this.viewData.addedCarbonFootprint = Math.round(100*this.addedCarbonFootprint)/100;
        // prepare the address as an string array split by a comma
        this.viewData.address = this.manufacturer.address.split(', ');
    };
    
    // we need this method since we can only access poperties from insed the data binding in sidebar
    // it prepares the data that is shown for all components
    this.computeData = function () {
        this.carbonFootprint =this.getCarbonFootprint();
        for (var idx in this.components) {
            this.components[idx].computeData();
        }
        this.prepareViewData();
    };
    
    // this returns the names of all components of the product
    this.getComponentNames = function () {
        var names = [];
        for (var idx in this.components) {
            names.push(this.components[idx].name);
        }
        return names;
    };
    
    // this returns the carbon footprints of all components
    this.getComponentCarbonFootprints = function () {
        var data = [];
        for (var idx in this.components) {
            data.push(this.components[idx].carbonFootprint);
        }
        return data;
    };
};

// not used since nobody had the time to implement it
Retailer = function () {
    this.id = Utils.generateId();
    this.location = "";
    this.products = {};
};