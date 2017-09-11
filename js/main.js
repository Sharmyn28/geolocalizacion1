
const app  = {
    item :  {
        map: undefined,
        latitude: undefined,
        longitude: undefined
    },
    init : function () {
        app.item.map = new google.maps.Map($('#map')[0],{
            zoom: 10,
            center: {lat: -9.1191427, lng: -77.0349046},
            mapTypeControl: false,
            zoomControl: false,
            streetViewControl: false,
        });
        app.setup();
    },

    setup: function () {
        $('#findMe').click(app.searchPosition);
    },

    searchPosition: function () {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(app.successFunction, app.errorFunction);
        }
    },

    successFunction: function (position) {
        app.item.latitude = position.coords.latitude;
        app.item.longitude = position.coords.longitude;

        let myPosition = new google.maps.Marker({
            position: {lat: app.item.latitude, lng: app.item.longitude},
            animation: google.maps.Animation.DROP,
            map: app.item.map
        });

        app.item.map.setZoom(17);
        app.item.map.setCenter({lat: app.item.latitude, lng: app.item.longitude});
    },

    errorFunction: function(){
        alert('Tenemos un problema con encontrar tu ubicacion');
    }
};

$(document).ready (app.init);
