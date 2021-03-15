function reverseInParentheses(inputString) {
    let reverseString = '';
    let numParentheses = 0;
    let returnString = inputString;
    let layeredParentheses = false;
    let layeredOpen = 0;
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === '(') {
            numParentheses++;
            layeredOpen++;
            if (layeredOpen > 1) {
                layeredParentheses = true;
            } else {
                layeredParentheses = false;
            }
        }
        if (inputString[i] === ')') {
            layeredOpen--;
        }
    }
    for (let k = numParentheses; k > 0; k--) {
        if (layeredParentheses) {
            let openParenthesesIndex = returnString.lastIndexOf('(');
            let closeParenthesesIndex = returnString.indexOf(')');
            for (let j = closeParenthesesIndex - 1; j > openParenthesesIndex; j--) {
                reverseString += returnString[j];
            }
            let stringPart1 = returnString.slice(0, openParenthesesIndex);
            let stringPart2 = returnString.slice(closeParenthesesIndex + 1);
            returnString =  stringPart1 + reverseString + stringPart2;
            reverseString = '';
        } else {
            let openParenthesesIndex = returnString.indexOf('(');
            let closeParenthesesIndex = returnString.indexOf(')');
            for (let j = closeParenthesesIndex - 1; j > openParenthesesIndex; j--) {
                reverseString += returnString[j];
            }
            let stringPart1 = returnString.slice(0, openParenthesesIndex);
            let stringPart2 = returnString.slice(closeParenthesesIndex + 1);
            returnString =  stringPart1 + reverseString + stringPart2;
            reverseString = '';
        }
    }
    return returnString
}
