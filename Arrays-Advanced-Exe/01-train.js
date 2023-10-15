function train(arr) {
    let wagons = arr[0].split(' ').map(Number);

    let capacity = Number(arr[1]);

    for (let i = 2; i < arr.length; i++) {
        let command = arr[i];

        let tokens = command.split(' ');

        if (tokens[0] == 'Add') {
            let passanger = Number(tokens[1]);
            wagons.push(passanger);
        } else {
            let passanger = Number(tokens[0]);

            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + passanger <= capacity) {
                    wagons[i] += passanger;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23',
    '75', 'Add 10', 'Add 0', '30', '10', '75'])