BubbleDrawer = function (map_) {
    var map = map_;
    var bubbleConfig = {
        radiusSmall: 6,
        radiusLarge: 20,
        enlargingDuration: 300
    };
    var arcOptions = {
        arcSharpness: 1,
        animationSpeed: 200
    };
    
    // create a g node to append all bubbles to
    map.svg.append('g').attr('class','arcs');
    map.svg.append('g').attr('class','bubbles');
    
    // Define hover-callback: mouseover
    var mouseoverfun = function() {
        d3.select(this)                             // select the hovered element
        .transition()                               // make animation
        .duration(bubbleConfig.enlargingDuration)   // set duration
        .attr('r',bubbleConfig.radiusLarge);        // increase radius
    };
    
    // Define hover-callback: mouseout
    var mouseoutfun = function () {
        d3.select(this)                             // select the hovered element
        .transition()                               // make animation
        .duration(bubbleConfig.enlargingDuration)   // set duration
        .attr('r', bubbleConfig.radiusSmall);       // reduce radius
    };
    
    // Define click-callback
    var clickfun = function () {
        var id = d3.select(this).attr('product-id');
        var p = products({id: id}).first();
        if (!p.isExpanded) {
            mapController.bubbleDrawer.expand(p);
        }
        else {
            mapController.bubbleDrawer.collapse(p);
        }
    };
    
    // Expand a product bubble
    this.expand = function (product, numLayers) {
        var p = product;
        var c = p.components;
        if (c.length > 0) {                                         // do this only if there are components
            for (var idx in c) {                                    // iterate through all components
                p.compArcs.push(this.drawArc(p, c[idx]));           // draw arc and add ref to product.compArcs
                p.compBubbles.push(this.drawBubble(c[idx]));        // draw bubble and add ref to product.compBubbles
            }
            if (numLayers > 1) {                                    // if we still have layers to go through
                for ( idx in c) {                                   // iterate through components again
                    this.expand(c[idx], numLayers-1);               // call ourselves recursively
                }
            }
            p.isExpanded = true;
        }
    };
    
    // Collapse a product bubble (recursively)
    this.collapse = function (product) {
        var p = product;
        var c = p.components;
        if (c.length > 0) {
            for (var idx in c) {
                this.collapse(c[idx]);
            }
            for (idx in c) {
                d3.select('path[product-id="' + c[idx].id +'"]')
                .remove();
                d3.select('circle[product-id="' + c[idx].id +'"]')
                .transition()
                .duration(bubbleConfig.enlargingDuration)
                .attr('r', 0)
                .remove();
            }
            p.compBubbles = [];
            p.compArcs = [];
            p.isExpanded = false;
        }
    };
    
    // First draw of the first product
    this.initialDraw = function (product, numLayers) {
        var p = product;
        var b = this.drawBubble(p);                             // draw the bubble for the first product
        b.attr('class','map-bubble-highlight');               // set the first bubble to be highlighted
        this.expand(p, numLayers);                              // expand it to a given number of layers
    };
    
    // Draw a single bubble
    this.drawBubble = function (product) {
        var p = product;
        var man = p.manufacturer;                                   // get manufacturer of product
        var loc = man.location;                                     // get location of manufacturer
        var xy_pos = map.latLngToXY(loc.latitude, loc.longitude);   // convert latitude and longitude to xy-coordinates
        var bubble =                                                // save ref to created element
        map.svg.select('g.bubbles').append('svg:circle')            // select the bubbles layer and append a circle
        .on("mouseover", mouseoverfun)                              // add mouseover event function
        .on("mouseout", mouseoutfun)                                // add mouseout event function
        .on("click", clickfun)                                      // add click event function
        .attr('product-id', p.id)                                   // set product id
        .attr('class','map-bubble')                                 // apply class map-bubble
        .attr('cx', xy_pos[0])                                      // set x position
        .attr('cy', xy_pos[1])                                      // set y position
        .attr('r', 0)                                               // set radius to 0 to animate it growing larger
        .transition()                                               // animate
        .duration(bubbleConfig.enlargingDuration)                   // set duration
        .attr('r',bubbleConfig.radiusSmall);                        // increase radius
        
        return bubble;                                              // return ref to created element
    };
    
    // draw a single arc
    this.drawArc = function (parentProduct, childProduct) {
        var p1 = parentProduct;
        var p2 = childProduct;
        var man1 = p1.manufacturer;
        var man2 = p2.manufacturer;
        var loc1 = man1.location;
        var loc2 = man2.location;
        console.log(loc1, loc2);
        var originXY = map.latLngToXY(loc1.latitude, loc1.longitude);
        var destXY = map.latLngToXY(loc2.latitude, loc2.longitude);
        console.log(originXY, destXY);
        var midXY = [ (originXY[0] + destXY[0]) / 2, (originXY[1] + destXY[1]) / 2];
        
        var pathData = 
            "M" + originXY[0] + ',' + originXY[1] + 
            "S" + (midXY[0] + (50 * arcOptions.arcSharpness)) + "," + (midXY[1] - (75 * arcOptions.arcSharpness)) + "," + destXY[0] + "," + destXY[1];
        
        var arc =
        map.svg.select('g.bubbles').append('svg:path')
        .attr('class','map-arc')
        .attr('d', pathData)
        .attr('product-id', p2.id)
        .transition()
        .duration(bubbleConfig.enlargingDuration)
        .delay(10)
        .style('fill', function() {
            var length = this.getTotalLength();
            this.style.transition = this.style.WebkitTransition = 'none';
            this.style.strokeDasharray = length + ' ' + length;
            this.style.strokeDashoffset = length;
            this.getBoundingClientRect();
            this.style.transition = this.style.WebkitTransition = 'stroke-dashoffset ' + arcOptions.animationSpeed + 'ms ease-out';
            this.style.strokeDashoffset = '0';
            return 'none';
        });
        return arc;
    };
    
/*    this.drawBubbles = function (bubblesArray, options) {
        for (var idx in bubblesArray) {
            var latLng = map.latLngToXY(bubblesArray[idx].latitude, bubblesArray[idx].longitude);
            map.svg.select('g.bubbles').append('svg:circle')
            .on("mouseover", mouseoverfun)
            .on("mouseout", mouseoutfun)
            .on("click", clickfun)
            .attr('class','map-bubble')
            .attr('cx', latLng[0])
            .attr('cy', latLng[1])
            .attr('r', 0)
            .transition()
            .duration(bubbleConfig.enlargingDuration)
            .attr('r',bubbleConfig.radiusSmall);
        }
    };*/
};