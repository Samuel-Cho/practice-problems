function digitDegree(n) {
  let number = n + '';
  let count = 0;
  let length = number.length;
  while (length > 1) {
    let sum = 0;
    for (let i = 0; i < length; i++) {
      sum += parseInt(number[i]);
    }
    sum += '';
    number = sum;
    count++;
    length = number.length;
  }
  return count;
}
