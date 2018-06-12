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

function simlulate() {
  pike.custPerHour();
  pike.cookiesBought();
  seaTac.custPerHour();
  seaTac.cookiesBought();
  seaCenter.custPerHour();
  seaCenter.cookiesBought();
  capHill.custPerHour();
  capHill.cookiesBought();
  alki.custPerHour();
  alki.cookiesBought();
}

var hours=['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm',
  '3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];

function storeData(location,id){
  var locationlist=document.getElementById(id);
  for(var liIndex=0; liIndex<location.hourlyArray.length; liIndex++){
    var li=document.createElement('li');
    var listString=hours[liIndex]+': '+location.hourlyArray[liIndex]+' cookies';
    li.textContent=listString;
    locationlist.appendChild(li);
  }
}

simlulate();
storeData(pike,'pike');
storeData(seaTac,'seaTac');
storeData(seaCenter,'seaCenter');
storeData(capHill,'capHill');
storeData(alki,'alki');
