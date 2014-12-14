BubbleDrawer = function (map_) {
    var map = map_;
    var bubbleConfig = {
        radiusSmall: 6,
        radiusLarge: 20,
        enlargingDuration: 300,
    };
    var expCollConfig = {
        radius: 8,
        expCollOffset: 22/Math.SQRT2
    };
    var arcOptions = {
        arcSharpness: 1,
        animationSpeed: 200
    };
    
    map.svg.append('g').attr('class','arcs');       // create a node to which we can add the arcs later
    map.svg.append('g').attr('class','bubbles');    // create a node to which we can add the bubbles later
    
    // Define hover-callback: mouseover
    var mouseoverfun = function() {
        var id = d3.select(this).attr('product-id');
        map.svg.select('circle.map-bubble[product-id="' + id +'"]')
        .transition()                               // make animation
        .duration(bubbleConfig.enlargingDuration)   // set duration
        .attr('r',bubbleConfig.radiusLarge);        // increase radius
        map.svg.select('circle.expand-collapse-bubble[product-id="' + id +'"]')
        .transition()
        .delay(70)
        .duration(bubbleConfig.enlargingDuration-70)
        .attr('r', expCollConfig.radius);
    };
    
    // Define hover-callback: mouseout
    var mouseoutfun = function () {
        var id = d3.select(this).attr('product-id');    // get the product-id of the hovered bubble
        map.svg.select('circle.map-bubble[product-id="' + id +'"]') // select the product bubble with the specified product-id
        .transition()                                   // make transition
        .delay(70)
        .duration(bubbleConfig.enlargingDuration-70)
        .attr('r', bubbleConfig.radiusSmall);       // reduce radius
        map.svg.select('circle.expand-collapse-bubble[product-id="' + id +'"]') // select all expand bubbles with the specified product-id
        .transition()                               // make animation
        .duration(bubbleConfig.enlargingDuration)   // set duration
        .attr('r', 0);
    };
    
    // Define click-callback
    var clickfun = function () {
        var id = d3.select(this).attr('product-id');    // get the product-id attribute of the clicked circle
        var p = products({id: id}).first();             // get the according product from the database
        if (!p.isExpanded) {                            // if the product is not expanded
            mapController.bubbleDrawer.expand(p);       // expand it
        }
        else {
            mapController.bubbleDrawer.collapse(p);     // otherwise collapse it
        }
    };
    
    // Expand a product bubble
    this.expand = function (product, numLayers) {
        var p = product;
        var c = p.components;
        if (p.hasComponents()) {                                    // do this only if there are components
            for (var idx in c) {                                    // iterate through all components
                p.compArcs.push(this.drawArc(p, c[idx]));           // draw arc and add ref to product.compArcs
                p.compBubbles.push(this.drawBubble(c[idx]));        // draw bubble and add ref to product.compBubbles
            }
            if (numLayers > 1) {                                    // if we still have layers to go through
                for ( idx in c) {                                   // iterate through components again
                    this.expand(c[idx], numLayers-1);               // call ourselves recursively
                }
            }
            p.isExpanded = true;                                    // set the product's isExpanded attribute to true
            d3.select('circle.expand-collapse-bubble[product-id="' + p.id +'"]')
            .attr('class', 'expand-collapse-bubble collapse-bubble');
        }
    };
    
    // Collapse a product bubble (recursively)
    this.collapse = function (product) {
        var p = product;
        var c = p.components;
        if (p.hasComponents()) {                                    // do this only if there are components
            for (var idx in c) {                                    // go through components
                this.collapse(c[idx]);                              // first collapse all child products
            }
            for (idx in c) {                                        // go through products again
                d3.select('path[product-id="' + c[idx].id +'"]')
                .remove();                                          // remove the path where the product-id attribute matches with the component product's id
                d3.selectAll('circle[product-id="' + c[idx].id +'"]')
                .transition()
                .duration(bubbleConfig.enlargingDuration)
                .attr('r', 0)
                .remove();                                          // do the same with the circle
                d3.selectAll('g[product-id="' + c[idx].id +'"]')
                .transition()
                .duration(bubbleConfig.enlargingDuration)
                .remove();
            }
            p.compBubbles = [];                                     // clear the product's component bubbles array
            p.compArcs = [];                                        // clear the component arcs array
            p.isExpanded = false;
            d3.select('circle.expand-collapse-bubble[product-id="' + p.id +'"]')
            .attr('class', 'expand-collapse-bubble expand-bubble')
            .text("+");
        }
    };
    
    // First draw of the first product
    this.initialDraw = function (product, numLayers) {
        map.svg.select('g.bubbles').selectAll('*').remove();
        map.svg.select('g.arcs').selectAll('*').remove();
        var p = product;
        var b = this.drawBubble(p);                             // draw the bubble for the first product
        b.attr('class','map-bubble map-bubble-highlight');                 // set the first bubble to be highlighted
        this.expand(p, numLayers);                              // expand it to a given number of layers
    };
    
    // Draw a single bubble
    this.drawBubble = function (product) {
        var p = product;
        var man = p.manufacturer;                                   // get manufacturer of product
        var loc = man.location;                                     // get location of manufacturer
        var xy_pos = map.latLngToXY(loc.latitude, loc.longitude);   // convert latitude and longitude to xy-coordinates
        var bubble =                                                // save ref to created element
        map.svg.select('g.bubbles').append('svg:g')
        .attr('product-id', p.id)
        .on("mouseover", mouseoverfun)                              // add mouseover event function
        .on("mouseout", mouseoutfun)                                // add mouseout event function
        .append('svg:circle')
        .attr('product-id', p.id)                                   // set product id
        .attr('class','map-bubble')                                 // apply class map-bubble
        .attr('cx', xy_pos[0])                                      // set x position
        .attr('cy', xy_pos[1])                                      // set y position
        .attr('r', 0)                                               // set radius to 0 to animate it growing larger
        .transition()                                               // animate
        .duration(bubbleConfig.enlargingDuration)                   // set duration
        .attr('r',bubbleConfig.radiusSmall);                        // increase radius
        
        if (p.hasComponents()) {
            var offset = [expCollConfig.expCollOffset,-expCollConfig.expCollOffset];
            map.svg.select('g[product-id="' + p.id +'"]')
            .append('svg:circle')
            .on("click", clickfun)                                      // add click event function
            .attr('class', 'expand-collapse-bubble expand-bubble')
            .attr('product-id',p.id)
            .attr('cx', xy_pos[0] + offset[0])
            .attr('cy', xy_pos[1] + offset[1])
            .attr('r', 0);
        }
        
        return bubble;                                              // return ref to created element
    };
    
    // draw a single arc
    this.drawArc = function (parentProduct, childProduct) {
        var p1 = parentProduct;
        var p2 = childProduct;
        var man1 = p1.manufacturer;         // get the p's manufacturer
        var man2 = p2.manufacturer;
        var loc1 = man1.location;           // get the man's location
        var loc2 = man2.location;
        
        var originXY = map.latLngToXY(loc1.latitude, loc1.longitude);       // convert locations to XY coordinates
        var destXY = map.latLngToXY(loc2.latitude, loc2.longitude);
        
        // calculate midpoint for path data
        var midXY = [ (originXY[0] + destXY[0]) / 2, (originXY[1] + destXY[1]) / 2];
        
        // create the bezier description string
        var pathData = 
            "M" + originXY[0] + ',' + originXY[1] + 
            "S" + (midXY[0] + (50 * arcOptions.arcSharpness)) + "," + (midXY[1] - (75 * arcOptions.arcSharpness)) + "," + destXY[0] + "," + destXY[1];
        
        // create the arc
        var arc =
        map.svg.select('g.arcs').append('svg:path')          // append a path element
        .attr('class','map-arc')                                // apply class
        .attr('d', pathData)                                    // specify description string
        .attr('product-id', p2.id)                              // set attribute product-id
        .transition()                                           // make animation
        .duration(bubbleConfig.enlargingDuration)               // set transition duration
        .delay(10)                                              // use a delay
        .style('fill', function() {                             // set style (taken from datamaps for animation)
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
};