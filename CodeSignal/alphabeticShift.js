const alphabeticShift = (inputString) => {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  let returnString = '';
  for (let i = 0; i < inputString.length; i++) {
    const index = letters.indexOf(inputString[i]);
    if (index === 25) {
      returnString += 'a';
    } else {
      returnString += letters[index + 1];
    }
  }
  return returnString;
}
