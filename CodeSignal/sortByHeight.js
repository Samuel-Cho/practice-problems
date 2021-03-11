function sortByHeight(a) {
  let numbers = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      numbers.push(a[i]);
    }
  }
  numbers.sort(function (a, b) {
    return a - b;
  });
  let numbersIndex = 0;
  for (let j = 0; j < a.length; j++) {
    if (a[j] !== -1) {
      a[j] = numbers[numbersIndex];
      numbersIndex++;
    } else {
      continue;
    }
  }
  return a;
}
