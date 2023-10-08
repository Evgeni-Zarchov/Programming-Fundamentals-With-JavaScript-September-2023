function addAndSubstract(arr) {
    let currentSum = 0;
    let newSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let sum = arr[i];
        currentSum += sum;

        if (sum % 2 == 0) {
            sum += i;
        } else {
            sum -= i;
        }
        newSum += sum;
        arr[i] = sum;
    }
    console.log(arr);
    console.log(currentSum);
    console.log(newSum);
}
addAndSubstract([5, 15, 23, 56, 35]);
addAndSubstract([-5, 11, 3, 0, 2]);