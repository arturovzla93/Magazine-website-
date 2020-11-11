var mymap = L.map('mapid').setView([43.36029, -5.84476], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYXJ0aHVyOSIsImEiOiJja2cyZmNwMnMwMGFhMnJvNWowYndrM2l5In0.HJBsqwXVOoLl39pdp4vrSw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 13,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYXJ0aHVyOSIsImEiOiJja2cyZmNwMnMwMGFhMnJvNWowYndrM2l5In0.HJBsqwXVOoLl39pdp4vrSw'
}).addTo(mymap);

var marker = L.marker([43.36029, -5.84476]).addTo(mymap);


