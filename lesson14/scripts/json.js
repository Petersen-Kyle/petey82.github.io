var requestURL = 'data/services.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var servicePackages = request.response;
  populateServices(servicePackages);
}

function populateServices(jsonObj) {
  var services = jsonObj['services'];
      
  for (var i = 0; i < services.length; i++) {
     
    
    var myList = document.createElement('ul');
    var pkgName = document.createElement('li');
    var pkgPrice = document.createElement('li');
    var pkgButton = document.createElement('li');
    var buttonLink = document.createElement('a');
    var buttonSpan = document.createElement('span');
    

    /*add classes*/
    buttonLink.setAttribute('href', "#");
    myList.classList.add('theplan');
    pkgName.classList.add('title');
    buttonLink.classList.add('pricebutton');
    buttonSpan.classList.add('icon-tag');
    buttonLink.textContent = 'BUY';
    pkgButton.appendChild(buttonLink);
    pkgButton.appendChild(buttonSpan);

    /*append JSON*/
    pkgName.textContent = services[i].name;
    pkgPrice.textContent = 'Price:  '+ services[i].amount;
    
    myList.appendChild(pkgName);
    myList.appendChild(pkgPrice);   
     

    var pkgDetails = services[i].work;
          for (var j = 0; j < pkgDetails.length; j++){
            var listItem = document.createElement('li');
            listItem.textContent = pkgDetails[j];
            myList.appendChild(listItem);
    }      

    myList.appendChild(pkgButton);
   
    document.getElementById("pricingdiv").appendChild(myList);
  
  }
 }