var map;
var marker
function initMap() {
  
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 51.8443, lng: 0.6257},
    zoom: 13
  })

  marker = new google.maps.Marker({
    position: {lat: 51.8443, lng: 0.6257}, 
    map:map
  });
}
