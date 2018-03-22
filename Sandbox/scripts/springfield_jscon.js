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

 var franklin_motto = towns[3].motto;

 document.getElementById("town_motto").innerHTML = franklin_motto;
 var myList = document.createElement('ul');
 var townEvents = towns[3].events;
          for (var j = 0; j < townEvents.length; j++){
            var listItem = document.createElement('li');
            listItem.textContent = townEvents[j];
            myList.appendChild(listItem);

			}
  document.getElementById("Events").appendChild(myList);
 };

 