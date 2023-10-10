function oddAndEvenSum(num) {
    let numAsString = String(num);

    let evenSum = 0;
    let oddSum = 0;

    for (let char of numAsString) {
        let digit = Number(char);

        if (digit % 2 == 0) {
            evenSum += digit;
        } else {
            oddSum += digit
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);