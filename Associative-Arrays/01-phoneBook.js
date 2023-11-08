function phoneBook(input) {
    let info = {};

    for (let item of input) {
        let [name, phoneNumber] = item.split(' ');

        info[name] = phoneNumber;
    }

    for (let [name, phoneNum] of Object.entries(info)) {
        console.log(name, '->', phoneNum);
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);