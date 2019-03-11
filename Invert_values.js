function invert(array) {
  let newArr = []; // Create new empty array

  for(var i = 0; i < array.length; i++){ // set up loop to go through array length
    newArr.push(-array[i]); // pushes the negative value of i into the new empty array
  }
   return newArr; // Return the new full array
}


function invert(array) { // longer version of above

  let newAry = []; // create new empty array

  for (let i = 0; i < array.length; i++) { // Start loop to loop through entire array
    if ( array[i] === 0) { //look for i value being zero is true
      newAry.push(array[i]); // if true, push as is to new array
    } else {
      newAry.push(array[i] * -1) // if it i's value being zero is not true, multiple by -1 then push to new array
    }
  }
  return newAry; // return new array
}
