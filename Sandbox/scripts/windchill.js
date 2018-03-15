var temperatures = [];
var windspeeds = [];
var day;
var dayInput;
var avg;


/*Pull in Temperatures from Table*/
for (var i=0; i<10; ++i){
	dayInput = document.getElementById("forecast-data").rows[1].cells[i].innerHTML;
	day = parseFloat(dayInput.slice(0,-2));
	temperatures.push(day);
}

/*Pull in Windspeed from Table*/
for (var i=0; i<10; ++i){
	dayInput = document.getElementById("forecast-data").rows[2].cells[i].innerHTML;
	day = parseFloat(dayInput.slice(0,-4));
	windspeeds.push(day);
}


/*Pull min and max tempertures from array temperatures and calculate average*/
maxtemp = Math.max(...temperatures);
/*window.alert (maxtemp);*/

mintemp = Math.min(...temperatures);
/*window.alert (mintemp);*/

avgtemp = (maxtemp + mintemp)/2;
/*window.alert (avg);*/

/*Pull min and max tempertures from array temperatures and calculate average*/
maxwind = Math.max(...windspeeds);
minwind = Math.min(...windspeeds);
avgwind = (maxwind + minwind)/2;
/*window.alert (avgtemp + " "   + avgwind);*/

/*Calculate Windchill */
var calcWC = 35.74 + 0.6215 * avgtemp - 35.75 * avgwind**0.16 + 0.4275 * avgtemp * avgwind**0.16;
calcWC = calcWC.toFixed(0);

document.getElementById("windchill").innerHTML="Windchill: "+calcWC+"&degF";