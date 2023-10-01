function specialNum(n) {
    let sum = 0;
    let output = '';
    for (let i = 1; i <= n; i++) {
        sum = i % 10 + parseInt(i / 10);
        output = sum == 5 || sum == 7 || sum == 11;
        console.log(output ? `${i} -> True` : `${i} -> False`);

    }
}
specialNum(15);
// specialNum(20);