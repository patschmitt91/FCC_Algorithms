function repeatStringNumTimes(str, num) {
  
  let convertedString = String(str);
  let stringCounter = convertedString;
  let i = 0;
    for (i = 1; i < num; i++) {
    stringCounter = stringCounter + convertedString;
    }
    if (num < 0) {
      return "";
    } else {
      return stringCounter; 
    }
}

repeatStringNumTimes("abc", 3);


// could not used repeat() method in exercise.
// if statement is in place to allow negative numbers to return a blank.