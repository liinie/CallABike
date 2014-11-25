BubbleDrawer = function (map_) {
    var map = map_;
    
    this.drawBubbles = function (bubblesArray, options) {
        map.bubbles(bubblesArray, options);
    };
};