'use strict';

function roomType(roomtype, jsonObj){
  var obj = {};

  var count = 1;

  // looping through the category
  for (var i=0; i<jsonObj[roomtype].length; i++){

  	// if room is available
    if(jsonObj[roomtype][i].available){
      obj[count] = jsonObj[roomtype][i];
      count++;
    }

  }
  
  return JSON.stringify(obj);
}
