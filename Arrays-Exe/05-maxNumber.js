function maxNumber(arr) {
    let leftSum = [];

    for (let i = 0; i < arr.length; i++) {
        let leftNum = arr[i];
        let isTrue = true;

        for (let j = i + 1; j < arr.length; j++) {
            let rightNum = arr[j];

            if (rightNum >= leftNum) {
                isTrue = false;
                break;
            }
        }
        if (isTrue) {
            leftSum.push(leftNum);
        }
    }
    console.log(leftSum.join(' '));
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);