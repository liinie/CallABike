MapViewController = function () {
    var renderComponentsManufacturers = function (product, currentLayer) {
        // Initialze render data: we will create bubbles and arcs data
        var renderData = {arcs: [], bubbles: []};
        
        // go through all of the product's components
        for ( idx = 0; idx < product.components.length; idx++) {
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
                options:
                {
                    strokeWidth: 2,
                    strokeColor: 'rgb(0,0,130)'
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
        }
        for ( idx = 0; idx < product.components.length; idx++ ) {
            if ( product.components[idx].components.length > 0 ) {
                console.log(product.components[idx].name);
                var subLayerRenderData = renderComponentsManufacturers(product.components[idx], currentLayer+1);
                renderData.arcs = renderData.arcs.concat(subLayerRenderData.arcs);
                renderData.bubbles = renderData.bubbles.concat(subLayerRenderData.bubbles);
            }
        }
        return renderData;
    }
    
    this.renderProduct = function ( product ) {
        layer = 0;
        var renderData = {
            arcs: [],
            bubbles: []
        }
        var firstBubble = {
            name: product.manufacturer.name,
            radius: 6,
            fillKey: 'highlightedBubble',
            productName: product.name,
            longitude: product.manufacturer.location.longitude,
            latitude: product.manufacturer.location.latitude
        };
        renderData = renderComponentsManufacturers(product);
        renderData.bubbles.unshift(firstBubble);

        return renderData;
    }
}