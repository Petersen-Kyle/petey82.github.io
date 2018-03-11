
var weatherObject = new XMLHttpRequest();

weatherObject.open('GET','http://api.wunderground.com/api/ab517042123fbc95/conditions/q/MN/Franklin.json');

weatherObject.send();

weatherObject.onload = function(){

	var weatherInfo = JSON.parse(weatherObject.responseText);
	console.log(weatherInfo);
	document.getElementById("current_weather").innerHTML= weatherInfo.current_observation.display_location.full;
}


