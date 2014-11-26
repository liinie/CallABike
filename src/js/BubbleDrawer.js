BubbleDrawer = function (map_) {
    var map = map_;
    
    // create a g node to append all bubbles to
    map.svg.append('g').attr('class','bubbles');
    
    this.drawBubbles = function (bubblesArray, options) {
        for (var idx in bubblesArray) {
            var latLng = map.latLngToXY(bubblesArray[idx].latitude, bubblesArray[idx].longitude);
            map.svg.select('g.bubbles').append('svg:circle')
            .attr('class','map-bubble')
            .attr('cx', latLng[0])
            .attr('cy', latLng[1])
            .attr('r', 0)
            .transition()
            .duration(500)
            .attr('r',6);
        }
    };
};