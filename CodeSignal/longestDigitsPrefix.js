function longestDigitsPrefix(inputString) {
  let prefix = '';
  for (let i = 0; i < inputString.length; i++) {
    if (!isNaN(parseInt(inputString[i]))) {
      prefix += inputString[i];
    } else {
      break;
    }
  }
  return prefix;
}
