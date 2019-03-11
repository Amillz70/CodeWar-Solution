function isIsogram(str){

// lowercase to compare
str = str.toLowerCase()

// return true if now value
  if (str.length == 0) {
    return true
  }

// loop through str[i]
  for (let i = 0; i < str.length; i++) {
    // j is next to i
    for (let j = i + 1; j < str.length; j++) {
      // if any i or j are equal, return false
    if (str[i] === str[j]) {
      return false
    }
  }
  }
// else return true
  return true

}
