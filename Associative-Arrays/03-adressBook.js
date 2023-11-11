function adressBook(arr) {
    let adressInf = {};

    for (let item of arr) {
        let [name, adress] = item.split(':');

        adressInf[name] = adress;
    }
    let adressArr = Object.entries(adressInf);

    adressArr.sort((a, b) => a[0].localeCompare(b[0]));

    let sorted = Object.fromEntries(adressArr);

    for (let [name, address] of Object.entries(sorted)) {
        console.log(name, '->', address);
    }

}
adressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);
