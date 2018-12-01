function truncateString(str, num) {
  let trunc;
    if (str.length > num) {
      trunc = str.slice(0, num) + "...";
    } else {
      return str;
    }

  console.log(trunc);

  return trunc;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);


// "Truncate a string (first argument) if it is longer than the given maximum string length 
// (second argument). Return the truncated string with a ... ending."