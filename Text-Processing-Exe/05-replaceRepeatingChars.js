function replace(str) {
    let nonRepeat = '';

    let prevStr = '';

    for (let char of str) {
        if (char !== prevStr) {
            nonRepeat += char;
            prevStr = char;
        }
    }
    console.log(nonRepeat);
}
replace('aaaaabbbbbcdddeeeedssaa');
replace('qqqwerqwecccwd');