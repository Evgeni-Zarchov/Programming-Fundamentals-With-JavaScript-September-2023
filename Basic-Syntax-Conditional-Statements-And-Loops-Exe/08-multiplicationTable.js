function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        let multiply = num * i;
        console.log(`${num} X ${i} = ${multiply}`);
    }
}
multiplicationTable(5);
multiplicationTable(2);