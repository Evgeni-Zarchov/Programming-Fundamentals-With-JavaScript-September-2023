function printAndSum(start, end) {
    let string = '';
    let nums = 0;
    for (let i = start; i <= end; i++) {
        string += i + ' ';
        nums += i;
    }
    console.log(string);
    console.log(`Sum: ${nums}`);
}
printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);