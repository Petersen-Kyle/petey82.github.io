
var weatherObject = new XMLHttpRequest();

weatherObject.open('GET','http://api.wunderground.com/api/ab517042123fbc95/conditions/q/MN/Franklin.json');

weatherObject.send();

weatherObject.onload = function(){

	var weatherInfo = JSON.parse(weatherObject.responseText);
	console.log(weatherInfo);
	document.getElementById("currenttemp").innerHTML= "Current Temperature: " + 
		weatherInfo.current_observation.temp_f;
	document.getElementById("currentwind").innerHTML = "Current Windspeed: " +
		weatherInfo.current_observation.wind_string;
	document.getElementById("currentdescription").innerHTML = "Current Conditions: " + 
		weatherInfo.current_observation.weather;
	document.getElementById("currentweather").innerHTML = "<img src ='" + weatherInfo.current_observation.icon_url +
	 "' alt='"+ weatherInfo.current_observation.icon + "''>";
}



