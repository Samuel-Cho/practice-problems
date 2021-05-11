const arrayMaximalAdjacentDifference = (inputArray) => {
  let maximalDifference = 0;
  for (let i = 1; i < inputArray.length; i++) {
    const left = inputArray[i - 1] - inputArray[i];
    const right = inputArray[i] - inputArray[i - 1];
    if (left > maximalDifference) {
      maximalDifference = left;
    }
    if (right > maximalDifference) {
      maximalDifference = right;
    }
  }
  return maximalDifference;
};
