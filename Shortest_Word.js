function findShort(s){
let words = s.split(' ')

let shortWord = 100

for (let i = 0; i < words.length; i++) {
  if (words[i].length < shortWord) {
    shortWord = words[i].length
  }
}
return shortWord

}


function findShort(s){
  let arr = s.split(' ');

  let smallest = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].length < smallest.length){
      smallest = arr[i];
    }
  }
  return smallest.length;
}
