function countBy(x, n) {

  // given empty array
  var z = [];

// loop through list of length (n)
// the key is n is simlar to array.length
  for (let i = 1; i <= n; i++) {
// push multiples of x times the array value into empty z array
    z.push(x * [i])
  }

// return new array
  return z;
}
