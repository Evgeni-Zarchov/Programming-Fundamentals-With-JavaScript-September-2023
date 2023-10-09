function repeating(str, num) {
    let result = '';
    
    for(let i = 0; i < num; i++) {
        result += str;
    }
    return result;

}
let resultRepeat = repeating('abc', 3);
console.log(resultRepeat);