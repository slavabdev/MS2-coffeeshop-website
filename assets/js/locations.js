let map;

function initMap() { 
let mapCenter= {lat: 51.898669, lng: -8.403624};

let locations = [
['Blackrock', 51.898669, -8.403624 ],
['Cork', 51.895301, -8.471848 ],
['Little Island', 51.904308, -8.357043]
];
map = new google.maps.Map(document.getElementById("map"), {
    center: mapCenter,
    zoom:12,
  });

$(".location-button").click(function() {
  console.log(this.dataset.lat+","+this.dataset.lng);
  map.setCenter(new google.maps.LatLng(this.dataset.lat, this.dataset.lng));
  map.setZoom(15);
  });  

  let infowindow = new google.maps.InfoWindow({});

  let marker, count;
  let bounds = new google.maps.LatLngBounds();
  for (count = 0; count<locations.length; count++) {
       marker = new google.maps.Marker ({
       position: new google.maps.LatLng(locations[count][1], locations[count][2]),
       map: map,
       animation: google.maps.Animation.DROP
  });

bounds.extend(marker.getPosition());
  
google.maps.event.addListener(marker, 'click', (function (marker, count) {
      return function () {
        infowindow.setContent(locations[count][0]);
        infowindow.open(map, marker);
      }
    })(marker, count));
  }
map.fitBounds(bounds);
  
}


