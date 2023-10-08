function myPow(x, y) {
    let result = 1;

    for (let i = 0; i < y; i++) {
        result = multiply(result, x);
    }
    console.log(result);
}
function multiply(a, b) {
    return a * b;
}
myPow(2, 8);
