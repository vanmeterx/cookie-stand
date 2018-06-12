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

