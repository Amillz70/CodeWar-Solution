function descendingOrder(n){
  return parseInt(n.toString().split("").sort().reverse().join(""));

  // n.sort((a,b) => a -b)

//   return Math.sign(n) * parseInt(reverse)
}
