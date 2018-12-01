function titleCase(str) {
let convertToArray = str.toLowerCase().split(" ");
let result = convertToArray.map(function(arrayElement){
    return arrayElement.replace(arrayElement.charAt(0), arrayElement.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

titleCase("I'm a little tea pot");