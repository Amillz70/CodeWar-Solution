
function binaryArratToNumber(arr) {

  // parseInt to turn string into binary
  // then join the array as base
  // for binary, always do 2
  return parseInt(arr.join(""), 2)
}
