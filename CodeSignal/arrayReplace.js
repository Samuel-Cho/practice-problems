const arrayReplace = (inputArray, elemToReplace, substitutionElem) => {
  return inputArray.map(input => {
    if (input === elemToReplace) {
      return substitutionElem;
    } else {
      return input;
    }
  });
}
