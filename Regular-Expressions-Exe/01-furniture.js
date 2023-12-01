function furniture(input) {
    let itemsPushed = [];

    let totalPrice = 0;

    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/;

    let command = input.shift();

    while (command != 'Purchase') {
        let match = command.match(pattern);

        if (match) {
            let { name, price, qty } = match.groups;

            let finalSum = Number(price) * Number(qty);

            totalPrice += finalSum;

            itemsPushed.push(name);
        }
        command = input.shift();
    }
    console.log('Bought furniture:');
    if (itemsPushed.length > 0) {
        console.log(itemsPushed.join('\n'));
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);
furniture(['>Invalid<<!4', '>Invalid<<!2', '>Invalid<<!5', 'Purchase'])