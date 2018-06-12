'use strict';

//Monday Lab

var pike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  hourlyArray:[],

  custPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  //next section came from code review: Day 7
  cookiesBought: function(){
    for(var i = 0; i < 15; i++){
      this.hourlyArray[i] = Math.floor(this.custPerHour() * this.avgCookie);
    }
  },
};

var seaTac = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  hourlyArray:[],

  custPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  cookiesBought: function(){
    for(var i = 0; i < 15; i++){
      this.hourlyArray[i] = Math.floor(this.custPerHour() * this.avgCookie);
    }
  },
};

var seaCenter = {
  name : 'Seattle Center',
  minCust : 11,
  maxCust: 38,
  avgCookie: 3.7,
  hourlyArray:[],

  custPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },
  cookiesBought: function(){
    for(var i = 0; i < 15; i++){
      this.hourlyArray[i] = Math.floor(this.custPerHour() * this.avgCookie);
    }
  },
};

var capHill = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  hourlyArray:[],

  custPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },

  cookiesBought: function(){
    for(var i = 0; i < 15; i++){
      this.hourlyArray[i] = Math.floor(this.custPerHour() * this.avgCookie);
    }
  },
};

var alki = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  hourlyArray:[],


  custPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },

  cookiesBought: function(){
    for(var i = 0; i < 15; i++){
      this.hourlyArray[i] = Math.floor(this.custPerHour() * this.avgCookie);
    }
  },
};

var hours=['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm',
  '3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];

function simulateAndDisplayStoreData(location,id){
  location.cookiesBought();

  var locationlist=document.getElementById(id);

  var cookieTotal = 0;

  for(var i = 0; i < location.hourlyArray.length; i++){
    var cookiesForThisHour = location.hourlyArray[i];

    cookieTotal = cookieTotal + cookiesForThisHour;
    console.log({ cookiesForThisHour, cookieTotal });

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