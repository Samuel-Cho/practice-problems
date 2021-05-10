const arrayChange = (inputArray) => {
  let moves = 0;
  for (let i = 1; i < inputArray.length; i++) {
    let previousValue = inputArray[i - 1];
    while (inputArray[i] <= previousValue) {
      inputArray[i]++;
      moves++;
    }
  }
  return moves;
};
