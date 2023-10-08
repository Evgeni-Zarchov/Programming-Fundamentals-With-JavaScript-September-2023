function magicSum(arr1, arr2) {
    let firstEl = [];
    let secondEl = [];
    for (let i = 0; i < arr1.length - 1; i++) {
        firstEl = arr1[i];
        for (let j = i + 1; j < arr1.length; j++) {
            secondEl = arr1[j];
            if (firstEl + secondEl == arr2) {
                console.log(arr1[i] + ' ' + arr1[j]);
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23], 8);