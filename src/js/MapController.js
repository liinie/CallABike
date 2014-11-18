MapController = function (mapContainerDiv) {
    var currentTransform = {
        translate: [0,0],
        scale: 1
    };
    var currentZoom = {
        translate: [0,0],
        scale: 1
    }
    
    
    var dataPreparator = new DataPreparator();
    
    this.map = new Datamaps({
        element: mapContainerDiv,
        fills: {
            defaultFill: 'rgb(171, 221, 164)',
            bubbles: 'rgb(0, 0, 180)',
            highlightedBubble: 'rgb(171,0,0)'
        },
        geographyConfig: {
            hideAntarctica: true
        },
        projection: 'mercator',
        arcConfig: {
            strokeColor: '#DD1C77',
            strokeWidth: 1,
            arcSharpness: 3,
            animationSpeed: 600
        }
    });
    
    var innerMapHeigth = this.map.svg.attr("height");
    
    this.renderProduct = function ( product ) {
        var arcsnbubbles = dataPreparator.getRenderDataFromProduct(product);
        this.map.arc(arcsnbubbles.arcs);
        this.map.bubbles(arcsnbubbles.bubbles,
        {
            popupTemplate:
            function(geo, data) {
                return '<div class="hoverinfo"><body><table><tr><td><strong>Manufacturer:</strong></td><td>'+ data.name + '</td></tr><tr><td><strong>Product:</strong></td><td>' + data.productName + '</td></tr> </table></div>'}
        });
    }
    // setTransform
    // sets the transform of the svg object
    this.setTransform = function ( translate, scale ) {
        var width = this.map.svg.attr("width");
        var height = this.map.svg.attr("height");
        // WARNING: translation limits do not work if we zoom in...
//        if ( translate[0] < (1-scale)*width ) {
//            translate[0] = (1-scale)*width;
//        }
//        if ( translate[0] > 0 ) {
//            translate[0] = 0;
//        }
//        
//        if ( translate[1] > 0 ) {
//            translate[1] = 0;
//        }
//        else if ( translate[1] < (1-scale)*height + (height-innerMapHeigth) ) {
//            translate[1] = (1-scale)*height + (height-innerMapHeigth);
//        }
        currentTransform = { translate: translate, scale: scale}; // cache current transform for later use
        // apply this transform to the svg
        this.map.svg.selectAll('g').attr(
            "transform", "translate("+ 
            currentTransform.translate + 
            ")scale(" + 
            currentTransform.scale + 
            ")");
    };
    // updateSize
    // is called when the window has been resized and to ensure that the map is as long as the sidebar
    this.updateSize = function () {
        var prevW = this.map.svg.attr("width");      // previous width
        var prevH = this.map.svg.attr("height");     // previous height
        
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
        
        this.map.svg.attr("width", newW).attr("height", newH); // resize the svg container to fit the page
        this.setTransform(newTranslate, newScale); // apply new transform
    }
    
    
    // zoomEvent
    // handles the zoom event
    this.zoomEvent = function (event) {
        var event = d3.event;
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
        mapController.setTransform(newTransform.translate, newTransform.scale); // apply new transform
    }
    var zoom = d3.behavior.zoom()
        .translate([0,0])
        .scale(1)
        .scaleExtent([1,8])
        .on("zoom", this.zoomEvent);
    this.map.svg.call(zoom);
}