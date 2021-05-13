function boxBlur(image) {
  const entryLength = image[0].length;
  const numberOfEntries = image.length;
  const returnArray = [];
  for (let j = 0; j + 2 < numberOfEntries; j++) {
    const arrayEntry = [];
    for (let i = 0; i + 2 < entryLength; i++) {
      const sum = image[j][i] + image[j][i + 1] + image[j][i + 2] + image[j + 1][i] + image[j + 1][i + 1] + image[j + 1][i + 2] + image[j + 2][i] + image[j + 2][i + 1] + image[j + 2][i + 2];
      const result = Math.floor(sum / 9);
      arrayEntry.push(result);
    }
    returnArray.push(arrayEntry);
  }
  return returnArray;
}
