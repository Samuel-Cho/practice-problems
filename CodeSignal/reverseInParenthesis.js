function reverseInParentheses(inputString) {
    let numParentheses = 0;
    let reverseString = '';
    let returnString = inputString;
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === '(') {
            numParentheses++;
        }
    }
    for (let j = 0; j < numParentheses; j++) {
        let innerOpenParentheses = returnString.lastIndexOf('(');
        let innerCloseParentheses = returnString.indexOf(')', innerOpenParentheses)
        for (let k = innerCloseParentheses - 1; k > innerOpenParentheses; k--) {
            reverseString += returnString[k];
        }
        let stringPart1 = returnString.slice(0, innerOpenParentheses);
        let stringPart2 = returnString.slice(innerCloseParentheses + 1);
        returnString = stringPart1 + reverseString + stringPart2;
        reverseString = '';
    }
    return returnString;
}
