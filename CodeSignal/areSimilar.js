const areSimilar = (a, b) => {
  let swapNumber = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      swapNumber++
    }
    if (b.includes(a[i]) === false || a.includes(b[i]) === false) {
      return false;
    }
    if (swapNumber > 2) {
      return false;
    }
  }
  if (a.length > 3) {
    if (swapNumber === 1) {
      return false;
    }
    let aSort = a.sort();
    let bSort = b.sort();
    for (let j = 0; j < a.length; j++) {
      if (aSort[j] !== bSort[j]) {
        return false;
      }
    }
  }
  return true;
}
