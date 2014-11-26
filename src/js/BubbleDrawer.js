BubbleDrawer = function (map_) {
    var map = map_;
    var bubbleConfig = {
        radiusSmall: 6,
        radiusLarge: 20,
        enlargingDuration: 700
    };
    
    // create a g node to append all bubbles to
    map.svg.append('g').attr('class','bubbles');
    
    this.drawBubbles = function (bubblesArray, options) {
        var mouseoverfun = function() {
            d3.select(this)
            .transition()
            .duration(bubbleConfig.enlargingDuration)
            .attr('r',bubbleConfig.radiusLarge);
        };
        var mouseoutfun = function () {
            d3.select(this)
            .transition(bubbleConfig.enlargingDuration)
            .attr('r', bubbleConfig.radiusSmall);
        };
        for (var idx in bubblesArray) {
            var latLng = map.latLngToXY(bubblesArray[idx].latitude, bubblesArray[idx].longitude);
            map.svg.select('g.bubbles').append('svg:circle')
            .on("mouseover", mouseoverfun)
            .on("mouseout", mouseoutfun)
            .attr('class','map-bubble')
            .attr('cx', latLng[0])
            .attr('cy', latLng[1])
            .attr('r', 0)
            .transition()
            .duration(bubbleConfig.enlargingDuration)
            .attr('r',bubbleConfig.radiusSmall);
        }
    };
};