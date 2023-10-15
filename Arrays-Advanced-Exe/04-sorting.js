function sorting(arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let finalArr = [];

    while (sortedArr.length > 0) {
        let firstEl = sortedArr.pop();
        let secondEl = sortedArr.shift();

        finalArr.push(firstEl);
        finalArr.push(secondEl);
    }
    console.log(finalArr.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);