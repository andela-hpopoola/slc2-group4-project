'use strict';

var jsonObj = require ('./bookingApp.js').database;

function roomType(roomtype){
  var obj = {};

  var j = 1;
  for (var i=0; i<jsonObj[roomtype].length; i++){
    if(jsonObj[roomtype][i].available){
      obj[j] = jsonObj.meetings[i];
      j++;
    }
  }
  
  return JSON.stringify(obj);
}
