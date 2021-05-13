const minesweeper = (matrix) => {
  const length = matrix.length;
  const entryLength = matrix[0].length;
  const returnArray = [];
  for (let i = 0; i < length; i++) {
    const entryArray = [];
    for (let j = 0; j < entryLength; j++) {
      let entry = 0;
      if (matrix[i - 1] !== undefined) {
        if (matrix[i - 1][j - 1]) {
          entry++
        }
        if (matrix[i - 1][j]) {
          entry++
        }
        if (matrix[i - 1][j + 1]) {
          entry++
        }
      }
      if (matrix[i][j - 1]) {
        entry++
      }
      if (matrix[i][j + 1]) {
        entry++
      }
      if (matrix[i + 1] !== undefined) {
        if (matrix[i + 1][j - 1]) {
          entry++
        }
        if (matrix[i + 1][j]) {
          entry++
        }
        if (matrix[i + 1][j + 1]) {
          entry++
        }
      }
      entryArray.push(entry);
    }
    returnArray.push(entryArray);
  }
  return returnArray;
}
