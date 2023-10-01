function sumDigits(number) {
    let numAsString = String(number);
    let num = 0;
    for (let i = 0; i < numAsString.length; i++) {
        num += Number(numAsString[i]);
    }
    console.log(num);

}
sumDigits(245678);
sumDigits(97561);
sumDigits(543);