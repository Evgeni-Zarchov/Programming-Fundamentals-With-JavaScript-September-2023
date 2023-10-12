function perfectNumber(num) {
    let sumPropDivisor = 0;

    for (let i = 0; i < num; i++) {
        if (num % i == 0) {
            sumPropDivisor += i;
        }
    }
    if (sumPropDivisor == num) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }
}
perfectNumber(6);