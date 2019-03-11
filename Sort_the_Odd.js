function sortArray(array) {
  // Return a sorted array.
  const oddArray = []
  const evenArray =[]
  const result = []

// loop through, push even to evenArray, else push odd to oddArraY
  for (let i = 0; i < array.length; i++) {
  if (array[i]%2 === 0) {
   evenArray.push(array[i])
   } else {
     oddArray.push(array[i])
   }
 }

// Sort odd array
 oddArray.sort((a,b) => a - b)

//loop through, evens are returned to original spot, replace sorted odds when needed

 for (let i = 0; i < array.length; i++) {
   if (array[i]%2 === 0) {
     result.push(evenArray.shift())
   } else {
     result.push(oddArray.shift())
   }
 }

// return result
 return result
}

Test.assertSimilar(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
Test.assertSimilar(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])
Test.assertSimilar(sortArray([]),[])
