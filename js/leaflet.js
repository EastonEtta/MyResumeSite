
var mymap = L.map('mapid', {gestureHandling: true}).setView([29.889174, -97.935004], 15);
/*29°53′20″N 97°56′20″W*/
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZWFzdG9uZXR0ZXIiLCJhIjoiY2thcjU0ZnpiMDNqdjJ4cGo2bHRhY2pyaSJ9.NBhrJULuhas6BssihDIncQ'

}).addTo(mymap);

L.control.locate({setview:'once', drawmarker: 'true'}).addTo(mymap);

var myIcon = L.icon({
    iconUrl: "assets/img/txstate_brighter.png",

});

var tstate = L.marker([29.891183, -97.942214], {icon: myIcon})

    tstate.addTo(mymap);

var popup = L.popup();

function onMapZoom(e) {
    tstate.remove()
}

mymap.on('zoom', onMapZoom);
