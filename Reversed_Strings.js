function solution(str){
// .split to split string
  let splitString = str.split("");

// .reverse to reverse string
  let reverseString = splitString.reverse("");

//.join to join new string
  let joinString = reverseString.join("");

  return joinString
}

// refactored function
// chain three functions together
function reverseString(str) {
    return str.split("").reverse().join("");
}
