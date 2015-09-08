//var map = L.map('map', {
//    center: [33.83,-84.38],
//    zoom: 3,
//    minzoom: 2,
//    maxZoom: 18
//    });
//
//L.tileLayer('http://{s}.tiles.mapbox.com/v4/mapbox.light/{z}/{x}/{y}.png?access_token= pk.eyJ1IjoibGNhY2VkYSIsImEiOiIzNmM4MGRlN2I4NDhiY2UxZjA4MmJjZjE5OWEzYjUzNSJ9.Wc5KTJpWxmpxVMZfcuEQNg')
//.addTo(map);
    
//Add some GeoJSON
function projectInfo (feature, layer){
    layer.bindPopup("<h1>Test!<h1>");
};
L.geoJson(Proj,{
    onEachFeature: projectInfo
    })
    .addTo(map);