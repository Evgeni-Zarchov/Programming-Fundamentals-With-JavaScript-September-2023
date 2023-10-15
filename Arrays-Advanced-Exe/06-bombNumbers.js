function bombNumbers(num, bomb) {
    let [bombNum, power] = bomb;

    while (num.includes(bombNum)) {
        let index = num.indexOf(bombNum);
        num.splice(Math.max(0, index - power), power * 2 + 1, 0);

    }
    let sum = 0;

    for (let nums of num) {
        sum += nums;
    }
    console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);