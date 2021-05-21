function arrayMaxConsecutiveSum(inputArray, k) {
  if (k === 1) {
    return inputArray.reduce((a, b) => {
      return Math.max(a, b);
    });
  } else {
    let sum = inputArray.slice(0, k).reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    let maxSum = sum;
    for (let i = 1; (i + k - 1) <= inputArray.length; i++) {
      sum = sum - inputArray[i - 1] + inputArray[i + k - 1];
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
    return maxSum;
  }
}
