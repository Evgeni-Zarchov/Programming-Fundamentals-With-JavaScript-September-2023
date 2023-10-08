function equalSum(arr) {
    let result = 'no';
    for (let a = 0; a < arr.length; a++) {

        let leftSum = 0;
        let rightSum = 0;

        for (let b = 0; b < a; b++) {
            leftSum += arr[b];
        }

        for (let c = arr.length - 1; c > a; c--) {
            rightSum += arr[c];
        }

        if (leftSum == rightSum) {
            result = a;
            break;
        }
    }
    console.log(result);
}
equalSum([1, 2, 3, 3]);