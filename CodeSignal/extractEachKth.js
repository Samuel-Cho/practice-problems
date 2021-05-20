const extractEachKth = (inputArray, k) => {
  if (k > inputArray.length) {
    return inputArray;
  }
  const array = [];
  const index = k - 1;
  for (let i = index; i < inputArray.length; i += k) {
    array.push(inputArray[i]);
  }
  for (let j = 0; j < array.length; j++) {
    const index2 = inputArray.indexOf(array[j]);
    inputArray.splice(index2, 1);
  }
  return inputArray;
}
