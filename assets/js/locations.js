//Slide effect from Animate on scroll library (AOS) https://michalsnik.github.io/aos/
AOS.init();

//Responsive hamburger menu
$(document).ready(function () {
    $('.header-burger').click(function (event) {
        $('.header-burger, .header-menu').toggleClass('active');
        $('body').toggleClass('lock')
    });
});

//Initialize google map 
let map;

function initMap() { 
let mapCenter= {lat: 51.898669, lng: -8.403624};

let locations = [
[`<h6 class="popup-header">Holybean (Blackrock)</h6> <p class="popup-content">Visit our Blackrock coffeeshop </br> and try our famous <strong>Holychino <i class="fas fa-mug-hot" aria-hidden="true"></i>.</strong></p>
<a class="popup-link" href="https://goo.gl/maps/61eDWDqqRhK91W3y5" target="_blank"> Get directions</a>`, 51.898669, -8.403624 ],
[`<h6 class="popup-header">Holybean (Cork)</h6> <p class="popup-content">Visit our first Cork coffeeshop ever. </br> Try our classic filter coffee, because classic never gets old!</p>
<a class="popup-link" href="https://goo.gl/maps/uSmUje2NXm1irkdC8" target="_blank"> Get directions</a>`, 51.895301, -8.471848 ],
[`<h6 class="popup-header">Holybean (Little Island)</h6> <p class="popup-content">Welcome to our <span class="popup-new-promo">New</span> Little Island coffeeshop!</br>You know what, we have discounts for you!</br> Click <a class="popup-link-promo" href="index.html#promo" target="_blank"> HERE </a> to get your discount.</p>
<a class="popup-link" href="https://goo.gl/maps/MWuHpxCrvS878Ysn9" target="_blank"> Get directions</a>`, 51.904308, -8.357043]
];
map = new google.maps.Map(document.getElementById("map"), {
    center: mapCenter,
    zoom:12,
  });

//Zoom a location by clicking on external button
$(".location-button").click(function() {
  console.log(this.dataset.lat+","+this.dataset.lng);
  map.setCenter(new google.maps.LatLng(this.dataset.lat, this.dataset.lng));
  map.setZoom(15);
  });  

  let infowindow = new google.maps.InfoWindow({});

//Add markers on map according the information in locations array
  let marker, count;
  let bounds = new google.maps.LatLngBounds();
  for (count = 0; count<locations.length; count++) {
       marker = new google.maps.Marker ({
       position: new google.maps.LatLng(locations[count][1], locations[count][2]),
       map: map,
       animation: google.maps.Animation.DROP
  });

bounds.extend(marker.getPosition());

//Pop up an infowindow after clicking on marker
google.maps.event.addListener(marker, 'click', (function (marker, count) {
      return function () {
        infowindow.setContent(locations[count][0]);
        infowindow.open(map, marker);
      }
    })(marker, count));
  }
map.fitBounds(bounds);
  
}


