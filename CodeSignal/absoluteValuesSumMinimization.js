const absoluteValuesSumMinimization = (a) => {
  let returnValue = 0;
  let absolutePlaceholder = Infinity;
  for (let i = 0; i < a.length; i++) {
    let sum = 0;
    a.forEach(number => {
      sum += Math.abs(number - a[i]);
    });
    if (sum < absolutePlaceholder) {
      absolutePlaceholder = sum;
      returnValue = a[i];
    }
  }
  return returnValue;
}
