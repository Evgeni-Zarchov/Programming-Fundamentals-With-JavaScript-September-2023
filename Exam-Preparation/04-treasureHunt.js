function pirateLoot(arr) {
    let loot = arr.shift().split('|');
    let command = arr.shift();

    while (command != 'Yohoho!') {
        let tokens = command.split(' ');
        let action = tokens.shift();

        if (action == 'Loot') {
            tokens.filter(item => !loot.includes(item)).forEach(item => loot.unshift(item));
        } else if (action == 'Drop') {
            let index = Number(tokens.shift());

            if (index >= 0 && index < loot.length) {
                let removedItems = loot.splice(index, 1).shift();
                loot.push(removedItems);
            }
        } else if (action == 'Steal') {
            let count = Number(tokens.shift());
            let stolenItems = loot.splice(-count);
            console.log(stolenItems.join(', '));
        }
        command = arr.shift();
    }

    if (loot.length == 0) {
        console.log('Failed treasure hunt.');
    } else {
        let totalGain = 0;
        
        for (let item of loot) {
            totalGain += item.length;
        }

        let averageGain = totalGain / loot.length;
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    }
}
pirateLoot(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"]);