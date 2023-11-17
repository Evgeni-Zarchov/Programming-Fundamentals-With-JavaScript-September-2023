function mining(arr) {
    let storage = {};

    for (let i = 0; i < arr.length; i += 2) {
        let products = arr[i];
        let quantity = Number(arr[i + 1]);

        if (products in storage) {
            storage[products] += quantity;
        } else {
            storage[products] = quantity;
        }
    }
    let entries = Object.entries(storage);

    for (let [products, quantity] of entries) {
        console.log(`${products} –> ${quantity}`);
    }
}
// mining(['Gold','155','Silver','10','Copper','17']);
mining(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']);