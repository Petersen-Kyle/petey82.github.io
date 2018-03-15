var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var weatherTowns = request.response;
  populateTowns(weatherTowns);
}

function populateTowns(jsonObj) {


 var towns = jsonObj['towns'];

 var franklin_motto = towns[0].motto;

 document.getElementById("town_motto").innerHTML = franklin_motto;
}