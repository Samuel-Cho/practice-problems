function commonCharacterCount(s1, s2) {
    var commonCharacterNumber = 0;
    if (s1.length >= s2.length) {
        var string2 = s2;
        for (var i = 0; i < s1.length; i++) {
            if (string2.includes(s1[i]) ) {
                commonCharacterNumber++
                string2 = string2.replace(s1[i], ' ');
            }
        }
    }
    if (s2.length > s1.length) {
        var string1 = s1
        for (var j = 0; j < s2.length; j++) {
            if (string1.includes(s2[j]) ) {
                commonCharacterNumber++
                string1 = string1.replace(s2[j], ' ');
            }
        }
    }
    return commonCharacterNumber;
}
