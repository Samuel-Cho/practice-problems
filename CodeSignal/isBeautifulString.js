function isBeautifulString(inputString) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  const lettersArray = inputString.split('');
  lettersArray.sort();
  let notIncludedLetter = 0;
  for (let j = 0; j <= letters.indexOf(lettersArray[lettersArray.length - 1]); j++) {
    if (lettersArray.includes(letters[j]) === false) {
      notIncludedLetter++;
    }
  }
  if (notIncludedLetter > 1) {
    return false;
  }
  let letterChange = false;
  let previousLetterCount = 0;
  let currentLetterCount = 0;
  for (let i = 0; i < lettersArray.length; i++) {
    if (i === 0) {
      if (lettersArray[0] === 'a') {
        currentLetterCount++;
        continue;
      } else {
        return false;
      }

    }
    if (lettersArray[i] !== lettersArray[i - 1]) {
      letterChange = true;
      if (previousLetterCount === 0 || currentLetterCount <= previousLetterCount) {
        previousLetterCount = currentLetterCount;
        currentLetterCount = 1;
      } else {
        return false;
      }
    } else {
      currentLetterCount++;
    }
  }
  if (currentLetterCount > previousLetterCount && letterChange === true) {
    return false;
  } else {
    return true;
  }
}
