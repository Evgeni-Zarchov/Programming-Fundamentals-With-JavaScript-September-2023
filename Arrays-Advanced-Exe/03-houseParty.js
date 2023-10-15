function houseParty(arr) {
    let guestsList = [];

    for (let command of arr) {
        let tokens = command.split(' ');
        let names = tokens[0];

        if (tokens.includes('not')) {
            if (guestsList.includes(names)) {
                let index = guestsList.indexOf(names);
                guestsList.splice(index, 1);
            } else {
                console.log(`${names} is not in the list!`);
            }
        } else {
            if (guestsList.includes(names)) {
                console.log(`${names} is already in the list!`);
            } else {
                guestsList.push(names);
            }
        }
    }
    console.log(guestsList.join('\n'));
}
houseParty(['Allie is going!',

    'George is going!',

    'John is not going!',

    'George is not going!']);
houseParty(['Tom is going!',

    'Annie is going!',

    'Tom is going!',

    'Garry is going!',

    'Jerry is going!']);