'use strict';

//Monday Lab

var pike = {
  name: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,

  custPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  }
};

var seaTac = {
  name: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,

  custPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  }
};

var seaCenter = {
  name : 'Seattle Center',
  minCust : 11,
  maxCust: 38,
  avgCookie: 3.7,

  custPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  }
};

var capHill = {
  name: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,

  custPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  }
};

var alki = {
  name: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,

  custPerHour: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  }
};

