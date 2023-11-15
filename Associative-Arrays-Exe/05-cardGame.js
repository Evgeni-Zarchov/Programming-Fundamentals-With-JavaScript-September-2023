function cardGame(arr) {
    let playerHands = {};
    let pwValue = { 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 11, Q: 12, K: 13, A: 14, };
    let typeV = { S: 4, H: 3, D: 2, C: 1 };

    for (let playerDeck of arr) {
        let [playerName, cardAsString] = playerDeck.split(': ');
        let cards = cardAsString.split(', ');

        if (playerName in playerHands) {
            playerHands[playerName].push(...cards);
        } else {
            playerHands[playerName] = cards;
        }
    }

    let entries = Object.entries(playerHands);

    for (let [name, deck] of entries) {
        let uniqueDeck = new Set(deck);
        let count = 0;

        for (let card of uniqueDeck) {
            let power = card.slice(0, card.length - 1);
            let type = card[card.length - 1];

            let cardValue = pwValue[power] * typeV[type];
            count += cardValue;

        }
        console.log(`${name}: ${count}`);
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);