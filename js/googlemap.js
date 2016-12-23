//style maps
var map_template = [{
    "stylers": [{
        "hue": "#ff1a00"
    }, {
        "invert_lightness": true
    }, {
        "saturation": -100
    }, {
        "lightness": 33
    }, {
        "gamma": 0.5
    }]
}, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
        "color": "#2D333C"
    }]
}];
//map in main & modal
var mapCompany;
//map
function initialize() {
    //location for mainmap
    var myCenterCompany = new google.maps.LatLng(13.880147, 100.549387);
    var SportCity = new google.maps.LatLng(13.880073, 100.549830);
    var markerCompany = new google.maps.Marker({
        position: SportCity,
        icon: 'images/marker.png', // null = default icon
        title:"บริษัท Triple I Geographic",
    });

    // create the main map
    var mapPropCompany = {
        center: myCenterCompany,
        zoom: 19,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        draggable: true,
        scrollwheel: false,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: false,
        // Apply the map style array to the map.
        styles: map_template,
    };

    //get mapMain
    mapCompany = new google.maps.Map(document.getElementById('mapCompany'), mapPropCompany);
    markerCompany.setMap(mapCompany);


};
