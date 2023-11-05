function numbers(string) {
    let nums = string.split(' ').map(Number);
    let avg = nums.reduce((acc, val) => acc + val) / nums.length;
    let topNums = nums.filter(num => num > avg).sort((a, b) => b - a).slice(0, 5);

    if (topNums.length == 0) {
        console.log('No');
    } else {
        console.log(topNums.join(' '));
    }
}
numbers('10 20 30 40 50');