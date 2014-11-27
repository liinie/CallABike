BubbleDrawer = function (map_) {
    var map = map_;
    var bubbleConfig = {
        radiusSmall: 6,
        radiusLarge: 20,
        enlargingDuration: 700
    };
    
    // create a g node to append all bubbles to
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
    //var clickfun = function (e, data) {
    //    console.log(d3.select(d3.event.srcElement).attr('data-info').name);
    //};
    
    // Expand a product bubble
    this.expand = function (product, numLayers) {
        var p = product;
        var c = p.getComponents();
        for (var idx in c) {
            p.compArcs.push_back(this.drawArc(p, c[idx]));
            p.compBubbles.push_back(this.drawBubble(c[idx]));
        }
        if (numLayers > 1) {
            for ( idx in c) {
                this.expand(c[idx], numLayers-1);
            }
        }
    };
    
    // Collapse a product bubble (recursively)
    this.collapse = function (product) {
        var p = product;
    };
    
    // First draw of the first product
    this.initialDraw = function (product, numLayers) {
        
    };
    
    // Draw a single bubble
    this.drawBubble = function (product) {
        var p = product;
        var man = p.getManufacturer();
        var loc = man.location;
        var xy_pos = map.latLngToXY(loc.latitude, loc.longitude);
        var bubble = 
        map.svg.select('g.bubbles').append('svg:circle')
        .on("mouseover", mouseoverfun)
        .on("mouseout", mouseoutfun)
        .attr('class','map-bubble')
        .attr('cx', xy_pos[0])
        .attr('cy', xy_pos[1])
        .attr('r', 0)
        .transition()
        .duration(bubbleConfig.enlargingDuration)
        .attr('r',bubbleConfig.radiusSmall);
        return bubble;
    };
    
    // draw a single arc
    this.drawArc = function (parentProduct, childProduct) {
        var p1 = parentProduct;
        var p2 = childProduct;
        return "d3.selection";
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