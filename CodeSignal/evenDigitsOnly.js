const evenDigitsOnly = (n) => {
  const string = n + '';
  for (let i = 0; i < string.length; i++) {
    if (parseInt(string[i]) % 2 !== 0) {
      return false;
    }
  }
  return true;
}
