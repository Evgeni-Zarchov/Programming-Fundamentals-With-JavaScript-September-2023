function orders(products, quantity) {
    let price = 0;

    switch (products) {
        case 'water': price = 1.00 * quantity; break;
        case 'coffee': price = 1.50 * quantity; break;
        case 'coke': price = 1.40 * quantity; break;
        case 'snacks': price = 2.00 * quantity; break;
    }

    console.log(`${price.toFixed(2)}`);
}
orders('water', 5);