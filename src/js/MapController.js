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
    this.zoomEvent = function () {
        var t = d3.event.translate;
        var s = d3.event.scale;
        var width  = document.getElementById("map-container").offsetWidth;
        var height = document.getElementById("map-container").offsetHeight;
        var h = 50;

        t[0] = Math.min(0, Math.max(width  * (1 - s), t[0]));
        t[1] = Math.min(height/2 * (s - 1) + h * s, Math.max(height * (1 - s) - h * s, t[1]));

        mapController.zoom.translate(t);
        mapController.map.svg.selectAll('g').attr("transform", "translate(" + t + ")scale(" + s + ")").style("stroke-width", 1 / s);
        //mapController.setTransform(event.translate, event.scale); // apply new transform
    }
    this.zoom = d3.behavior.zoom()
        .scaleExtent([1,8])
        .on("zoom", this.zoomEvent);
    this.map.svg.call(this.zoom);
}