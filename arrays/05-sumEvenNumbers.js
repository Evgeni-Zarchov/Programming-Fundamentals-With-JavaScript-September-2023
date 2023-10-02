function sumEvenNum(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            sum += Number(num);
        }
    }
    console.log(sum);
}
sumEvenNum(['1', '2', '3', '4', '5', '6']);
sumEvenNum(['3', '5', '7', '9']);