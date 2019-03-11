var number = function(busStops){
  // looking for amount of people left at end of route
  // first number is people entering bus
  // second is people leaving bus

// set reamining people at 0, add to later
  let remainPeople = 0

  for (let i = 0; i < busStops.length; i++) {
    // currStop is for each tuple, will be minipulated later
   let currStop = busStops[i];
   // declare the first point in the currStop array
   let getOn = currStop[0];
   // declare the second part of the currStop array
   let getOff = currStop[1];

// Add number of people to get on the bus
   remainPeople += getOn;
// Subtract number of people who get off bus
   remainPeople -= getOff;
  }
// give remaining people on bus
  return remainPeople
}

//Simplified version of above

var number = function(busStops){
  // Set reamining/ total people
  let totalPeople = 0;

  for (let i=0; i<busStops.length; i++) {

    // refactor to get rid of getOn and getOff variables
    totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
}
