function squareAndSort(array) {
  let resultArray = []; //initialize results array for squared values
  let tracker = 0; // initialize a variable from which to keep track of the squared value.

  for (i = 0; i < array.length; i++) {
    // iterate through the array values and push them onto resultArray
    tracker = array[i] * array[i];
    resultArray.push(tracker);
}
  //put resultArray in proper order
  resultArray.sort();

  return resultArray;

}

console.log(squareAndSort([-1, 0, -5, 4, 20]));
// Returns  [0, 1, 16, 25, 400]

//runtime complexity of O(n) + complexity of sorting algorithm