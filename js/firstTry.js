
function initMap(){
    let map = new google.maps.Map(document.getElementById('map'),{
        zoom: 5,
        center: {lat: -9.1191427, lng: -77.0349046},
        mapTypeControl: false,
        zoomControl: false,
        streetViewControl: false,
    });

    function search(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
        }
    }

    //document.getElementById('findMe').addEventListener('click', search);
   
    let latitude, longitude;

    let successFunction = function(position){
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

        let myPosition = new google.maps.Marker({
            position: {lat: latitude, lng: longitude},
            animation: google.maps.Animation.DROP,
            map: map
        });

        map.setZoom(17);
        map.setCenter({lat: latitude, lng: longitude});
    }

    let errorFunction = function(error){
        alert('Tenemos un problema con encontrar tu ubicacion');
    }
    $('#findMe').click(search());
}

