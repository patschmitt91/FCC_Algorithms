/* Return an array consisting of the largest number from each provided sub-array. */

function largestOfFour(arr) {
  let i = 0;
  let j = 0;
  let max = [];

  let bigArray = [];
  console.log("Outer array length is: " + arr.length);
  for (i = 0; i < 4; i++) {
    let max = arr[i][0];
        console.log("The current outer loop iteration is : " + i);
    for (j = 0; j < 4; j++) {
        console.log("The current inner loop iteration is : " + j);
        if (arr[i][j] > max) {
            max = arr[i][j];  
      }
    }
      bigArray.push(max);
      console.log(bigArray);
  }
    
  return bigArray;
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);