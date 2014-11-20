DataPreparator = function () {
    var borders_min = {latitude: 0, longitude: 0};
    var borders_max = {latitude: 0, longitude: 0};
    
    var getRenderDataFromComponentsManufacturers = function (product, currentLayer) {
        // Initialze render data: we will create bubbles and arcs data
        var renderData = {arcs: [], bubbles: []};
        
        // go through all of the product's components
        for ( var idx = 0; idx < product.components.length; idx++) {
            // generate the arcs:
            // we append the arc data we generate to renderData.arcs
            renderData.arcs.push(
            {
                // required for DataMaps to be able to draw the arcs are the following properties:
                // origin:          {latitude, longitude}
                // destination:     {latitude, longitude}
                // [options] is opotional, so not necessarily required
                origin:
                {
                    // get the current product's manufacturer's location
                    longitude: product.manufacturer.location.longitude,
                    latitude: product.manufacturer.location.latitude
                },
                destination:
                {   // get the current component's manufacturer's location
                    longitude: product.components[idx].manufacturer.location.longitude,
                    latitude: product.components[idx].manufacturer.location.latitude
                },
                // added by us:
                // later we could use this to step through the layers and only draw them one after the other
                layer:          currentLayer
            });
            // generate bubbles:
            // and append them to renderData.bubbles
            renderData.bubbles.push(
            {
                // get the current product's manufacturer's name
                name: product.components[idx].manufacturer.name,
                radius: 6,
                fillKey: 'bubbles',
                // this is not natively supported by DataMaps but we use it in the template for the popups:
                // get the current product's name
                productName: product.components[idx].name,
                // get the current component's manufacturer's location (same as arc destination)
                longitude: product.components[idx].manufacturer.location.longitude,
                latitude: product.components[idx].manufacturer.location.latitude,
                // our own layer reference again
                layer:          currentLayer
            });

            borders_min.longitude = Math.min(borders_min.longitude, product.components[idx].manufacturer.location.longitude);
            borders_max.longitude = Math.max(borders_max.longitude, product.components[idx].manufacturer.location.longitude);
            
            borders_min.latitude = Math.min(borders_min.latitude, product.components[idx].manufacturer.location.latitude);
            borders_max.latitude = Math.max(borders_max.latitude, product.components[idx].manufacturer.location.latitude);
        }
        // go through all our components again (this is maybe wasteful in terms of performance)
        for ( idx = 0; idx < product.components.length; idx++ ) {
            // if the component has more than zero subcomponents
            if ( product.components[idx].components.length > 0 ) {
                // call recursion of this function
                var subLayerRenderData = getRenderDataFromComponentsManufacturers(product.components[idx], currentLayer+1);
                // append the results to our current renderData
                renderData.arcs = renderData.arcs.concat(subLayerRenderData.arcs);
                renderData.bubbles = renderData.bubbles.concat(subLayerRenderData.bubbles);
            }
        }
        return renderData;
    };
    
    this.getRenderDataFromProduct = function ( product ) {
        var layer = 0;
        var renderData = {
            arcs: [],
            bubbles: []
        };
        var firstBubble = {
            name: product.manufacturer.name,
            radius: 6,
            fillKey: 'highlightedBubble',
            productName: product.name,
            longitude: product.manufacturer.location.longitude,
            latitude: product.manufacturer.location.latitude
        };
        borders_min.latitude  = product.manufacturer.location.latitude;
        borders_min.longitude = product.manufacturer.location.longitude;
        borders_max.latitude  = product.manufacturer.location.latitude;
        borders_max.longitude = product.manufacturer.location.longitude;
        renderData = getRenderDataFromComponentsManufacturers(product);
        renderData.bubbles.unshift(firstBubble);
        renderData.borders_min = borders_min;
        renderData.borders_max = borders_max;
        
        return renderData;
    };
};