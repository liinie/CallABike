MapController = function (mapContainerDiv) {
    /*var currentTransform = {
        translate: [0,0],
        scale: 1
    };
    var currentZoom = {
        translate: [0,0],
        scale: 1
    }*/
    
    
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
            arcSharpness: 0,
            animationSpeed: 600
        }
    });
    this.map.bubbles([]);
    this.map.arc([]);
    
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
    
    this.renderProduct = function ( product ) {
        var arcsnbubbles = dataPreparator.getRenderDataFromProduct(product);
        this.map.arc(arcsnbubbles.arcs,
                {
                    strokeWidth: 2,
                    strokeColor: 'rgb(0,0,130)',
                    arcSharpness: 0.3
                });
        this.map.bubbles(arcsnbubbles.bubbles,
        {
            popupTemplate:
            function(geo, data) {
                return '<div class="hoverinfo"><body><table><tr><td><strong>Manufacturer:</strong></td><td>'+ data.name + '</td></tr><tr><td><strong>Product:</strong></td><td>' + data.productName + '</td></tr><tr><td>Location:</td><td>' + data.longitude + ', ' + data.latitude + '</tr> </table></div>'}
        });
        
        var t = [0,0];
        var s = 1;
        var bordersLatLng_min = arcsnbubbles.borders_min;
        var bordersLatLng_max = arcsnbubbles.borders_max;
        
        var bordersXY_min = this.map.latLngToXY(bordersLatLng_min.latitude, bordersLatLng_min.longitude);
        var bordersXY_max = this.map.latLngToXY(bordersLatLng_max.latitude, bordersLatLng_max.longitude);
        
        var w = document.getElementById("map-container").offsetWidth;
        var h = document.getElementById("map-container").offsetHeight;
        var s_x = w/(bordersXY_max[0] - bordersXY_min[0]+200);
        var s_y = h/(bordersXY_max[1] - bordersXY_min[1]+200);
        s = Math.min(s_x, s_y);
        
        t[0] = -(s*(bordersXY_min[0] + (bordersXY_max[0] - bordersXY_min[0])/2) - w/2);
        t[1] = -(s*(bordersXY_min[1] + (bordersXY_max[1] - bordersXY_min[1])/2) - h/2);
        
        var checked = checkTransform(t,s);
        t = checked.translate;
        s = checked.scale;
        
        mapController.zoom.translate(t);
        mapController.zoom.scale(s);
        
        mapController.map.svg.selectAll('g').transition().duration(2000).attr("transform", "translate(" + t + ")scale(" + s + ")");
        mapController.map.svg.selectAll('path').transition().duration(2000).style("stroke-width", 1 / s);
        //mapController.map.svg.selectAll('circle').transition().duration(2000).style("stroke-width", 1 / s).attr('r', 1 / s);
    };
    
    // zoomEvent
    // handles the zoom event
    this.zoomEvent = function () {
        var t = d3.event.translate;
        var s = d3.event.scale;
        
        var checked = checkTransform(t,s);
        t = checked.translate;
        s = checked.scale;
        
        mapController.zoom.translate(t);
        mapController.map.svg.selectAll('g').attr("transform", "translate(" + t + ")scale(" + s + ")");
        mapController.map.svg.selectAll('path').style("stroke-width", 1 / s);
        //mapController.map.svg.selectAll('circle').style("stroke-width", 1 / s).attr('r', 6 / s);
    };
    this.zoom = d3.behavior.zoom()
        .scaleExtent([1,8])
        .on("zoom", this.zoomEvent);
    this.map.svg.call(this.zoom);
    
};