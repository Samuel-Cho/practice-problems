const palindromeRearranging = (inputString) => {
  let palindrome = true;
  const lettersArray = inputString.split('').sort();
  let numberOfOddLetters = 0;
  let letterCount = 0;
  if (inputString.length % 2 === 0) {
    for (let i = 0; i < lettersArray.length; i++) {
      if (lettersArray[i] !== lettersArray[i - 1]) {
        if (letterCount % 2 !== 0) {
          palindrome = false;
          break;
        } else {
          letterCount = 1;
        }
      } else {
        letterCount++
      }
    }
  } else {
    for (let j = 0; j < lettersArray.length; j++) {
      if (lettersArray[j] !== lettersArray[j - 1]) {
        if (letterCount % 2 !== 0) {
          if (numberOfOddLetters === 1) {
            palindrome = false;
            break;
          } else {
            numberOfOddLetters++;
            letterCount = 1
          }
        } else {
          letterCount = 1;
        }
      } else {
        letterCount++
      }
    }
  }
  return palindrome;
};
