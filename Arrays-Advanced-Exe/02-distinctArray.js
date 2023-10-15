function distinctArray(arr) {
    let nonDuplicateNum = [];

    for (let num of arr) {
        if (!nonDuplicateNum.includes(num)) {
            nonDuplicateNum.push(num);
        }
    }
    console.log(nonDuplicateNum.join(' '));
}
distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);