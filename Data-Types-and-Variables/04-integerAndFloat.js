function integerOrFloat(firstNum, secondNum, thirdNum) {
    let result = firstNum + secondNum + thirdNum;

    result % 1 === 0 ? result += " - Integer" : result += " - Float";
    console.log(result);
}
integerOrFloat(9, 100, 1.1);
integerOrFloat(100, 200, 303);