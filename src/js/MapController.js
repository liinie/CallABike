MapController = function (mapContainerDiv) {
    /*var currentTransform = {
        translate: [0,0],
        scale: 1
    };
    var currentZoom = {
        translate: [0,0],
        scale: 1
    }*/
    
    
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
            arcSharpness: 0,
            animationSpeed: 600
        }
    });
    //this.map.bubbles([]);
    this.map.arc([]);
    
    var dataPreparator = new DataPreparator();
    this.bubbleDrawer = new BubbleDrawer(this.map);
    
    var checkTransform = function (translate, scale) {
        var t = translate;
        var s = scale;
        var width  = document.getElementById("map-container").offsetWidth;
        var height = document.getElementById("map-container").offsetHeight;
        var h = 50;
        
        t[0] = Math.min(0, Math.max(width  * (1 - s), t[0]));
        t[1] = Math.min(height/2 * (s - 1) + h * s, Math.max(height * (1 - s) - h * s, t[1]));
        return {translate: t, scale: s};
    };
    
    this.renderProduct = function ( product, numLayers ) {
        // the following is legacy code to build the arcs and bubbles arrays that are supported by datamaps.js
        // however, we do the drawing ourselves now (in BubbleDrawer.initialDraw())
        // we still use this since it produces the borders for the automatic zoom and pan
        // when cleaning up the code, this could be remover/replaced...
        var arcsnbubbles = dataPreparator.getRenderDataFromProduct(product);
        
        // draw the bubbles of the product
        this.bubbleDrawer.initialDraw(product, 1);
        
        // the following code realizes the automatic zoom and pan to center on product bubbles
        var t = [0,0];  // translation
        var s = 1;      // scale
        var bordersLatLng_min = arcsnbubbles.borders_min; // get the min.x and min.y borders
        var bordersLatLng_max = arcsnbubbles.borders_max; // same for max.x and max.y
        
        // convert the latlng values to xy pixel values by the latLngToXY method provided by datamaps
        var bordersXY_min = this.map.latLngToXY(bordersLatLng_min.latitude, bordersLatLng_min.longitude);
        var bordersXY_max = this.map.latLngToXY(bordersLatLng_max.latitude, bordersLatLng_max.longitude);
        
        // get the current size of the map container element
        var w = document.getElementById("map-container").offsetWidth;
        var h = document.getElementById("map-container").offsetHeight;
        // calculate the new scale (the 200 value is a buffer so that bubbles do not end up on the edges of the div)
        var s_x = w/(bordersXY_max[0] - bordersXY_min[0]+200);
        var s_y = h/(bordersXY_max[1] - bordersXY_min[1]+200);
        // make sure that we don't zoom in too much for one dimension to be clipped
        s = Math.min(s_x, s_y);
        
        // calculate the new translation based on the new scale
        // this was mind-fucking to figure out...
        t[0] = -(s*(bordersXY_min[0] + (bordersXY_max[0] - bordersXY_min[0])/2) - w/2);
        t[1] = -(s*(bordersXY_min[1] + (bordersXY_max[1] - bordersXY_min[1])/2) - h/2);
        
        // make sure we do not go out of pan and zoom range
        var checked = checkTransform(t,s);
        t = checked.translate;
        s = checked.scale;
        
        // set the new values to the zoom object (so that this will be consistent through other calls like zoom event)
        mapController.zoom.translate(t);
        mapController.zoom.scale(s);
        
        // set the actual transforms on the elements required with transition
        mapController.map.svg.select('g.datamaps-subunits').transition().duration(2000).attr("transform", "translate(" + t + ")scale(" + s + ")");
        mapController.map.svg.select('g.bubbles').transition().duration(2000).attr("transform", "translate(" + t + ")scale(" + s + ")");
        mapController.map.svg.select('g.arcs').transition().duration(2000).attr("transform", "translate(" + t + ")scale(" + s + ")");
    };
    
    // zoomEvent
    // handles the zoom event
    this.zoomEvent = function () {
        // get the transform from the event object
        var t = d3.event.translate;
        var s = d3.event.scale;
        
        // make sure we do not go out of the pan and zoom range
        var checked = checkTransform(t,s);
        t = checked.translate;
        s = checked.scale;
        
        // set the new values to the zoom object
        mapController.zoom.translate(t);
        mapController.zoom.scale(s);
        // do the actual transform without transition
        mapController.map.svg.select('g.datamaps-subunits').attr("transform", "translate(" + t + ")scale(" + s + ")");
        mapController.map.svg.select('g.bubbles').attr("transform", "translate(" + t + ")scale(" + s + ")");
        mapController.map.svg.select('g.arcs').attr("transform", "translate(" + t + ")scale(" + s + ")");
        //mapController.map.svg.selectAll('path').style("stroke-width", 1 / s);
        //mapController.map.svg.selectAll('circle').style("stroke-width", 1 / s).attr('r', 6 / s);
    };
    // create a zoom behavior
    this.zoom = d3.behavior.zoom()
        .scaleExtent([1,8])             // set the possible extent of the scale
        .on("zoom", this.zoomEvent);    // crete the event listener
    this.map.svg.call(this.zoom);       // assign this behavior to our map svg
    
};