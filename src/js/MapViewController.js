MapViewController = function () {
    var currentTransform = {
        translate: [0,0],
        scale: 1
    };
    var currentZoom = {
        translate: [0,0],
        scale: 1
    }
    var innerMapHeigth = map.svg.attr("height");
    
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
        // go through all our components again (this is maybe wasteful in terms of performance)
        for ( idx = 0; idx < product.components.length; idx++ ) {
            // if the component has more than zero subcomponents
            if ( product.components[idx].components.length > 0 ) {
                // call recursion of this function
                var subLayerRenderData = renderComponentsManufacturers(product.components[idx], currentLayer+1);
                // append the results to our current renderData
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
    // setTransform
    // sets the transform of the svg object
    this.setTransform = function ( translate, scale ) {
        var width = map.svg.attr("width");
        var height = map.svg.attr("height");
        if ( translate[0] < (1-scale)*width ) {
            translate[0] = (1-scale)*width;
        }
        if ( translate[0] > 0 ) {
            translate[0] = 0;
        }
        
        if ( translate[1] > 0 ) {
            translate[1] = 0;
        }
        else if ( translate[1] < (1-scale)*height + (height-innerMapHeigth) ) {
            translate[1] = (1-scale)*height + (height-innerMapHeigth);
        }
        currentTransform = { translate: translate, scale: scale}; // cache current transform for later use
        // apply this transform to the svg
        map.svg.selectAll('g').attr(
            "transform", "translate("+ 
            currentTransform.translate + 
            ")scale(" + 
            currentTransform.scale + 
            ")");
    };
    // updateSize
    // is called when the window has been resized and to ensure that the map is as long as the sidebar
    this.updateSize = function () {
        var prevW = map.svg.attr("width");      // previous width
        var prevH = map.svg.attr("height");     // previous height
        
        mapParent = document.getElementById("map-container"); // get the div containing the map
        var newW = mapParent.offsetWidth; // get its width
        var newH = mapParent.offsetHeight; // get its height
        // IMPORTANT: set the height as the height of the sidebar
        // otherwise the map will be longer than the page
        // we still have a scrollbar like this but only like one px too much (idk why)
        newH = document.getElementById("sidebar").offsetHeight;
        
        var newScale = newH/prevH * currentTransform.scale; // calculate new scale
        var newTranslate = [];
        // calculate new x and y translation
        newTranslate[0] = newH/prevH * (currentTransform.translate[0] - prevW/2) + newW/2;
        newTranslate[1] = newH/prevH * (currentTransform.translate[1] - prevH/2) + newH/2;
        
        map.svg.attr("width", newW).attr("height", newH); // resize the svg container to fit the page
        this.setTransform(newTranslate, newScale); // apply new transform
    }
    // zoomEvent
    // handles the zoom event
    this.zoomEvent = function (event) {
        // create new transform
        var newTransform = {
            translate:  
                [currentTransform.translate[0] + event.translate[0] - currentZoom.translate[0],
                 currentTransform.translate[1] + event.translate[1] - currentZoom.translate[1]],
            scale:      currentTransform.scale      + (event.scale      - currentZoom.scale)
        };
        // cache current zoom
        currentZoom = {
            translate:  event.translate,
            scale:      event.scale
        };
        this.setTransform(newTransform.translate, newTransform.scale); // apply new transform
    }
}