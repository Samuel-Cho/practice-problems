function isLucky(n) {
  let firstHalf = 0;
  let secondHalf = 0;
  const stringNumber = n.toString();
  for (let i = 0; i < stringNumber.length / 2; i++) {
    firstHalf += parseInt(stringNumber[i]);
  }
  for (let j = stringNumber.length / 2; j < stringNumber.length; j++) {
    secondHalf += parseInt(stringNumber[j]);
  }
  return firstHalf === secondHalf;
}
