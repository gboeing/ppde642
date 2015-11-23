//create the Leaflet map container
var map = L.map('map');
var initialMapCenter = [37.5, -97];
var initialZoomLevel = 4;
var layerOptions = null;
var legend = null;

//2 vars are loaded by category-propertiess.js: rentCatProps and rentChangeCatProps, we'll switch between them when datasets are switched. initialize with rentCatProps.
var catProps = rentCatProps;
var catName = 'rent_cat';
var rentDesc = '<span><b>2014 Median Rent</b></span><span>Click any metro area for details.</span><span><button onclick="javascript:switchData();">Switch Data</button>';
var rentChangeDesc = '<span><b>Rise in Median Rent 2010&ndash;14</b></span><span>Click any metro area for details.</span><span><button onclick="javascript:switchData();">Switch Data</button>';

//add tile layer basemap to the map
basemapUrl = 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png';
basemapAttribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>';
basemapProperties = {minZoom: 3, maxZoom: 9, attribution: basemapAttribution};
var basemap = L.tileLayer(basemapUrl, basemapProperties);
map.addLayer(basemap);

//create a function to create all the styles and functionality for the point data so it's reusable when we switch datasets dynamically
function createFeatures() {
    //set the overlay description based on whether we on looking at rent categories or switched datasets to rent change categories
    var overlayDesc = document.getElementById('overlay-desc');
    if (catName == 'rent_change_cat') { descText = rentChangeDesc; } else { descText = rentDesc; }
    //if they're not viewing this in an iframe, link to my blog post
    if (inIframe()) { descText += '</span>' } else { descText += ' <a href="http://geoffboeing.com/2015/11/landscape-us-rents/">More Info</a></span>' }
    overlayDesc.innerHTML = descText

    //specify what the circle markers should look like (radius and fill color are dynamically set later)
    var markerStyle = {radius: null, fillOpacity: 0.7, color: '#666666', opacity: 1, weight: 1, fillColor: null};
    var markerStyleHover = {radius: null, fillOpacity: 0.9, color: '#333333', opacity: 1, weight: 3, fillColor: null};
    
    //specify how to load the individual features
    layerOptions = { 
        pointToLayer: pointToLayer,
        onEachFeature: onEachFeature
    };
    
    //create a circle marker for each feature
    function pointToLayer(feature, latlng) {
        var category = feature.properties[catName];
        markerStyle.fillColor = catProps[category].color;
        markerStyle.radius = getRadius();
        return L.circleMarker(latlng, markerStyle);
    }
    
    //radius should be current zoom level raised to the 1.5th power, so it scales with zoom
    function getRadius() {
        if (map.getZoom()) { radius = Math.pow(map.getZoom(), 1.5); } //if map already exists, get current zoom level
        else { radius = Math.pow(initialZoomLevel, 1.5); } //if it's the initial startup, use initial zoom level
        return radius;
    }
    
    //make marker size scale with zoom
    map.on('zoomend', function() {
        for (var key in geojsonLayer._layers) {
            geojsonLayer._layers[key].setRadius(getRadius());
        }
    });
    
    //check if someone's viewing this page directly instead of in iframe
    function inIframe() {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    }
    
    //************************************************************************
    //define interactions with a feature: clicks and hovers
    //************************************************************************
    function onEachFeature(feature, layer) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: clickFeature
        });
    }
    
    //on mouseover, highlight the feature hovered over
    function highlightFeature(e) {
        var target = e.target;
        var category = target.feature.properties[catName];
        markerStyleHover.fillColor = catProps[category].color;
        markerStyleHover.radius = getRadius() * 1.2; //make radius 20% bigger when hovering
        target.setStyle(markerStyleHover);
        target.bringToFront();
    }
    
    //on mouseout, reset highlighted feature's style
    function resetHighlight(e) {
        var target = e.target;
        var category = target.feature.properties[catName];
        markerStyle.fillColor = catProps[category].color;
        markerStyle.radius = getRadius();
        target.setStyle(markerStyle);
    }
    
    //on click, pan/zoom to feature and show popup
    function clickFeature(e) {
        var target = e.target;
        var latlng = target._latlng;
        var props = target.feature.properties;
        var popupContent = '<div class="popup-container">' + 
                           '<h4>' + props.msa_name + '</h4>' + 
                           '<br /><span class="popup-label">Median rent: ' + props.median_contract_rent_s + '</span> (' + props.rent_change_pct_s + ' since 2010)' +
                           '<br /><span class="popup-label">Population: ' + props.pop_est_14_s + '</span> (' + props.pop_change_pct_s + ' since 2010)' +
                           '</div>';
        var popup = L.popup().setContent(popupContent).setLatLng(latlng);
        target.bindPopup(popup).openPopup(); 
        
        //pan to feature and zoom in 1 if map is currently at/above initial zoom
        var zoomLevel = map.getZoom();
        if (map.getZoom() <= initialZoomLevel) { zoomLevel++; }
        map.setView(latlng, zoomLevel);
    
    }//end of defining interactions: clicks and hovers
    
    //************************************************************************
    //create legend
    //************************************************************************
    function keys(myObj) {//extract keys from obj
        var ks = [];
        for (var k in myObj) {if (myObj.hasOwnProperty(k)) {ks.push(k);}}
        return ks;
    }
    legend = L.control({position: 'bottomright'});
    legend.onAdd = function (map) {
        if (catName == 'rent_change_cat') { var title = 'Increase in Rent'; } else { var title = 'Median Rent'; }
        var div = L.DomUtil.create('div', 'overlay legend');
        div.innerHTML = '<h4>' + title + '</h4>';
        //loop from high to low to put legend ranges in descending order
        for (var i=keys(catProps).length-1; i>=0; i--) { 
            div.innerHTML += '<i style="background:' + catProps[i]['color'] + '"></i> ' + catProps[i]['label'] + '<br>';
        }
        return div;
    };
    legend.addTo(map);//end of legend creation

}//end of createFeatures()

//create all the styles and functionality for the point data
createFeatures();

//switch between median rent and change in rent datasets
function switchData() {
    if (catName == 'rent_change_cat') {
        catProps = rentCatProps;
        catName = 'rent_cat';
    }
    else {
        catProps = rentChangeCatProps;
        catName = 'rent_change_cat';
    }           
    //remove the old data and legend from the map and add the other dataset
    map.removeLayer(geojsonLayer);
    map.removeControl(legend);
    createFeatures();
    geojsonLayer = L.geoJson(dataset, layerOptions); 
    map.addLayer(geojsonLayer);
}

//create the geojson point data layer and add it to map
var geojsonLayer = L.geoJson(dataset, layerOptions); 
map.addLayer(geojsonLayer);

//center the map window on the contiguous US
map.setView(initialMapCenter, initialZoomLevel);