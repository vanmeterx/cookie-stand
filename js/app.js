'use strict';

function Shop (name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.hourlyArray = [];
}
//radonmizes number
Shop.prototype.custPerHour = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
};

Shop.prototype.cookiesBought = function() {
  for(var i = 0; i < 15; i++){
    this.hourlyArray[i] = Math.floor(this.custPerHour() * this.avgCookie);
  }
};

var pike = new Shop('1st and Pike', 23, 65, 6.3);

var seaTac = new Shop('SeaTac Airport', 3, 24, 1.2);

var seaCenter = new Shop('Seattle Center', 11, 38, 3.7);

var capHill = new Shop('Capitol Hill', 20, 38, 2.3);

var alki = new Shop('Alki', 2, 16, 4.6);

var hours=['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm',
  '3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];

var thead = document.createElement('thead');

var theadtr = document.createElement('tr');

var totalFooter = document.createElement('tfoot');

var salesTable = document.getElementById('salesData');

salesTable.appendChild(thead);
thead.appendChild(theadtr);

for(var i = 0; i < hours.length; i++){
  var businessHours = hours[i];

  var th = document.createElement('th');
  th.textContent = businessHours;
  theadtr.appendChild(th);

  console.log(businessHours);
}

var HourOneCookies = [];


function simulateAndDisplayStoreData(location,id){ //displays the store data
  location.cookiesBought();

  var cookieTotal = 0;

  var tr = document.createElement('tr');

  HourOneCookies.push(location.hourlyArray[0]); //creates an array from the hour 1 data into the footer

  tr.setAttribute('id', id);
  salesTable.appendChild(tr);

  for(var i = 0; i < location.hourlyArray.length; i++){
    var cookiesForThisHour = location.hourlyArray[i];

    cookieTotal = cookieTotal + cookiesForThisHour;

    var listString = cookiesForThisHour + ' cookies';

    var td = document.createElement('td');
    td.textContent = listString;
    tr.appendChild(td);
  }
}

//TODO: change so this populates the whole row and not just the first cell.


function arraySum() {
  var sum = 0;
  console.log(HourOneCookies.length);
  for (var i = 0; i < HourOneCookies.length; i++){
    sum += HourOneCookies[i];
  }

  var hourOneTotal = document.createElement('td');
  hourOneTotal.textContent = sum;
  totalFooter.appendChild(hourOneTotal);
}

simulateAndDisplayStoreData(pike,'pike');
simulateAndDisplayStoreData(seaTac,'seaTac');
simulateAndDisplayStoreData(seaCenter,'seaCenter');
simulateAndDisplayStoreData(capHill,'capHill');
simulateAndDisplayStoreData(alki,'alki');

salesTable.appendChild(totalFooter);

arraySum();