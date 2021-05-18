const circleOfNumbers = (n, firstNumber) => {
  let returnValue = firstNumber + (n / 2);
  if (returnValue >= n) {
    returnValue -= n;
  }
  return returnValue;
}
