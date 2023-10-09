function simpleCalculator(numOne, numTwo, operator) {
    let multiply = (a, b) => a * b;
    let divide = (a, b) => a / b;
    let add = (a, b) => a + b;
    let substract = (a, b) => a - b;
    let result = 0;
    switch (operator) {
        case 'multiply': result = multiply(numOne, numTwo); break;
        case 'divide': result = divide(numOne, numTwo); break;
        case 'add': result = add(numOne, numTwo); break;
        case 'subtract': result = substract(numOne, numTwo); break;
    }
    console.log(result);
}
simpleCalculator(50, 13, 'subtract');