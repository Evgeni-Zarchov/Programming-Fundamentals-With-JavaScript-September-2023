function charInRange(char1, char2) {
    let asci1 = char1.charCodeAt(0);
    let asci2 = char2.charCodeAt(0);

    let minCode = Math.min(asci1, asci2);
    let maxCode = Math.max(asci1, asci2);

    let result = '';

    for (let i = minCode + 1; i < maxCode; i++) {
        let currentChar = String.fromCharCode(i);
        result += currentChar + ' ';
    }
    console.log(result);
}
charInRange('a', 'd');
charInRange('#',':');
charInRange('C','#');