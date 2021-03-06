function allLongestStrings(inputArray) {
  var longestLength = 0;
  var returnArray = [];
  for (var i = 0; i < inputArray.length; i++) {
    if (longestLength <= inputArray[i].length) {
      longestLength = inputArray[i].length;
    }
  }
  for (var j = 0; j < inputArray.length; j++) {
    if (inputArray[j].length === longestLength) {
      returnArray.push(inputArray[j]);
    }
  }
  return returnArray;
}
