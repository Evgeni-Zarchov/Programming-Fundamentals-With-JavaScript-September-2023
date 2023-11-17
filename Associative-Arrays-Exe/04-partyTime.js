function party(arr) {
    let vipList = [];
    let regularList = [];

    let command = arr.shift();

    while (command !== 'PARTY') {
        let firstChar = command[0];

        if (isNaN(firstChar)) {
            regularList.push(command);
        } else {
            vipList.push(command);
        }
        command = arr.shift();
    }
    let allGests = vipList.concat(regularList);

    for (let guest of arr) {
        if (allGests.includes(guest)) {
            allGests.splice(allGests.indexOf(guest), 1);
        }
    }
    console.log(allGests.length);
    allGests.forEach(guest => console.log(guest));
}
party(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);