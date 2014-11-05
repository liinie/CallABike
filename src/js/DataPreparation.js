DataPreparation = function () {
    // we use this to count on which layer we are currently on
    var layerCounter = 0;
    
    this.dbgArray = [];
    
    // we use this method to get the components of a product
    var getLayerComponents = function (components) {
        var componentArray = [];
        
        console.log(components.length);
        
        for ( idx = 0; idx < components.length; idx++ ) {
            for ( idy = 0; idy < components[idx].components.length; idy++) {
                if (components[idx].components.length > 0) {
                    componentArray.push(components[idx].components[idy]);
                }
            }
        }
        console.log(componentArray);
        return componentArray;
    }
    
    this.buildProductArray = function (product) {
        var productArray = [];
        productArray[0] = [];
        productArray[0][0] = product;
        layerCounter = 0;
        
        while (productArray[layerCounter].length > 0) {
            layerCounter++;
            productArray.push(getLayerComponents(productArray[layerCounter-1]));
        }
        productArray.pop();
        return productArray;
    }
}