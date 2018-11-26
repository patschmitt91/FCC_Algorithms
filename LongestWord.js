// Return the longest word in a provided string.

function findLongestWordLength(str) {
  let array = str.split(' ');
  let counter = 0;
  let i = 0;
  
  for (i = 0; i < array.length; i++) {
    while (array[i].length > counter) {
      counter = array[i].length;
    }
  }
  console.log(counter);
  return counter;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");