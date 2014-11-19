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
    firstBubble = {
        radius: 6,
        fillKey: 'bubbles',
        longitude: -180,
        latitude: -90,
        // our own layer reference again
    };
    this.map.bubbles([]);
    this.map.arc([]);
    
    var innerMapHeigth = this.map.svg.attr("height");
    
    var checkTransform = function (translate, scale) {
        var t = translate;
        var s = scale;
        var width  = document.getElementById("map-container").offsetWidth;
        var height = document.getElementById("map-container").offsetHeight;
        var h = 50;
        
        t[0] = Math.min(0, Math.max(width  * (1 - s), t[0]));
        t[1] = Math.min(height/2 * (s - 1) + h * s, Math.max(height * (1 - s) - h * s, t[1]));
        return {translate: t, scale: s};
    }
    
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
        bordersLatLng_min = arcsnbubbles.borders_min;
        bordersLatLng_max = arcsnbubbles.borders_max;
        
        bordersXY_min = this.map.latLngToXY(bordersLatLng_min.latitude, bordersLatLng_min.longitude);
        bordersXY_max = this.map.latLngToXY(bordersLatLng_max.latitude, bordersLatLng_max.longitude);
        console.log(bordersXY_min);
        console.log(bordersXY_max);
        
        w = document.getElementById("map-container").offsetWidth;
        h = document.getElementById("map-container").offsetHeight;
        s_x = w/(bordersXY_max[0] - bordersXY_min[0]+200);
        s_y = h/(bordersXY_max[1] - bordersXY_min[1]+200);
        s = Math.min(s_x, s_y);
        
        t[0] = -(s*(bordersXY_min[0] + (bordersXY_max[0] - bordersXY_min[0])/2) - w/2);
        t[1] = -(s*(bordersXY_min[1] + (bordersXY_max[1] - bordersXY_min[1])/2) - h/2);
        
        var checked = checkTransform(t,s);
        t = checked.translate;
        s = checked.scale;
        
        mapController.zoom.translate(t);
        mapController.zoom.scale(s);
        
        mapController.map.svg.selectAll('g').transition().duration(2000).attr("transform", "translate(" + t + ")scale(" + s + ")").style("stroke-width", 1 / s);
    }
    
    // zoomEvent
    // handles the zoom event
    this.zoomEvent = function () {
        var t = d3.event.translate;
        var s = d3.event.scale;
        
        var checked = checkTransform(t,s);
        t = checked.translate;
        s = checked.scale;
        
        mapController.zoom.translate(t);
        mapController.map.svg.selectAll('g').attr("transform", "translate(" + t + ")scale(" + s + ")").style("stroke-width", 1 / s);
        
        //mapController.setTransform(event.translate, event.scale); // apply new transform
    }
    this.zoom = d3.behavior.zoom()
        .scaleExtent([1,8])
        .on("zoom", this.zoomEvent);
    this.map.svg.call(this.zoom);
    
}