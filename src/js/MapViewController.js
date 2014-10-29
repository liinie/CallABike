MapViewController = function () {
    var renderComponentsManufacturers = function (product) {
        var renderData = {arcs: [], bubbles: []};
        for ( idx = 0; idx < product.components.length; idx++) {
            renderData.arcs.push(
            {
                origin:
                {
                    longitude: product.manufacturer.location.longitude,
                    latitude: product.manufacturer.location.latitude
                },
                destination:
                {
                    longitude: product.components[idx].manufacturer.location.longitude,
                    latitude: product.components[idx].manufacturer.location.latitude
                },
                options:
                {
                    strokeWidth: 2,
                    strokeColor: 'rgb(0,0,130)'
                }
            });
            renderData.bubbles.push(
            {
                name: product.components[idx].manufacturer.name,
                radius: 6,
                fillKey: 'bubbles',
                productName: product.components[idx].name,
                longitude: product.components[idx].manufacturer.location.longitude,
                latitude: product.components[idx].manufacturer.location.latitude
            });
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