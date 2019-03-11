function squareDigits(num){
  // new emptry array
  sqr_array = []

  num = num.toString()

    //loop through
  for (i = 0; i < num.length; i++) {
    // convert to number
    n = Number(num[i])
    // push nuber into new array time itself (to square)
    sqr_array.push(n*n)
  }
  // return the array as a joined number
  return Number(sqr_array.join(""))
}
