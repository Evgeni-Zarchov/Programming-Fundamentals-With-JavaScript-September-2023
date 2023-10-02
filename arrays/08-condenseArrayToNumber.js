function condenseArrays(nums) {
    let num = nums;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < nums.length - 1; j++) {
            num[j] = num[j] + num[j + 1];
        }
    }
    console.log(num[0]);
}
condenseArrays([2, 10, 3]);