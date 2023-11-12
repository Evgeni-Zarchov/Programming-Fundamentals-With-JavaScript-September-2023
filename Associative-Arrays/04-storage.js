function shopStorage(arr) {
    let storage = {};

    for (let items of arr) {
        let tokens = items.split(' ');

        let product = tokens[0];
        let quanity = Number(tokens[1]);

        if (product in storage) {
            storage[product] += quanity;
        } else {
            storage[product] = quanity;
        }
    }
    let entries = Object.entries(storage);
    console.log(entries);

    for (let [prodcuts, quantity] of entries) {
        console.log(`${prodcuts} -> ${quantity}`);
    }
}
shopStorage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);
// shopStorage(['apple 50',
//     'apple 61',
//     'coffee 115',
//     'coffee 40']);