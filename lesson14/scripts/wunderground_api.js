
var weatherObject = new XMLHttpRequest();

weatherObject.open('GET','//api.wunderground.com/api/ab517042123fbc95/conditions/q/MT/Bozeman.json');

weatherObject.send();

weatherObject.onload = function(){

	var weatherInfo = JSON.parse(weatherObject.responseText);
	console.log(weatherInfo);
	document.getElementById("currenttemp").innerHTML= "Temperature: " + 
		weatherInfo.current_observation.temp_f;
	document.getElementById("currentwind").innerHTML = "Windspeed: " +
		weatherInfo.current_observation.wind_string;
	document.getElementById("currentdescription").innerHTML = "Conditions: " + 
		weatherInfo.current_observation.weather;
	document.getElementById("currentweather").innerHTML = "<img id= 'currentweather_img' src ='" + weatherInfo.current_observation.icon_url +
	 "' alt='"+ weatherInfo.current_observation.icon + "''>";
}



