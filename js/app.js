'use strict';

//Monday Lab
//Tuesday

function shop (name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.hourlyArray = [];
}

//note: declared functions do not need ';' after the '}'

shop.prototype.custPerHour = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
};

shop.prototype.cookiesBought = function() {
  for(var i = 0; i < 15; i++){
    this.hourlyArray[i] = Math.floor(this.custPerHour() * this.avgCookie);
  }
};

var pike = new shop('1st and Pike', 23, 65, 6.3);

var seaTac = new shop('SeaTac Airport', 3, 24, 1.2);

var seaCenter = new shop('Seattle Center', 11, 38, 3.7);

var capHill = new shop('Capitol Hill', 20, 38, 2.3);

var alki = new shop('Alki', 2, 16, 4.6);

var hours=['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm',
  '3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];

function simulateAndDisplayStoreData(location,id){
  location.cookiesBought();

  var locationlist=document.getElementById(id);

  var cookieTotal = 0;

  for(var i = 0; i < location.hourlyArray.length; i++){
    var cookiesForThisHour = location.hourlyArray[i];

    cookieTotal = cookieTotal + cookiesForThisHour;
    console.log({ cookiesForThisHour, cookieTotal});

    var listString=hours[i] + ': ' + cookiesForThisHour + ' cookies.';

    // Create <li> with that string, and add to <ul>
    var li=document.createElement('li');
    li.textContent=listString;
    locationlist.appendChild(li);
  }

  var totalLI = document.createElement('li');
  locationlist.appendChild(totalLI);

  var totalStrong = document.createElement('strong');
  totalStrong.textContent = 'Total: ' + cookieTotal;
  totalLI.appendChild(totalStrong);
}

simulateAndDisplayStoreData(pike,'pike');
simulateAndDisplayStoreData(seaTac,'seaTac');
simulateAndDisplayStoreData(seaCenter,'seaCenter');
simulateAndDisplayStoreData(capHill,'capHill');
simulateAndDisplayStoreData(alki,'alki');