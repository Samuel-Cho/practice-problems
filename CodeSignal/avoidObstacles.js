const avoidObstacles = (inputArray) => {
  inputArray.sort(function (a, b) {
    return a - b;
  });
  let placeholder = 0;
  let interval = 1;
  while (placeholder < inputArray[inputArray.length - 1]) {
    placeholder += interval;
    if (inputArray.includes(placeholder)) {
      placeholder = 0;
      interval++;
    }
  }
  return interval;
}
