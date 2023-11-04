function game(arr) {
    let hp = 100;
    let bitcoins = 0;
    let rooms = arr.split('|');

    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i].split(' ');
        let type = room[0];
        let attackOrDefOrHealing = Number(room[1]);

        if (type == 'potion') {
            if (hp + attackOrDefOrHealing > 100) {
                attackOrDefOrHealing = 100 - hp;
            }
            hp += attackOrDefOrHealing;
            console.log(`You healed for ${attackOrDefOrHealing} hp.`);
            console.log(`Current health: ${hp} hp.`);
        } else if (type == 'chest') {
            bitcoins += attackOrDefOrHealing;
            console.log(`You found ${attackOrDefOrHealing} bitcoins.`);
        } else {
            hp -= attackOrDefOrHealing;
            if (hp <= 0) {
                console.log(`You died! Killed by ${type}.`);
                console.log(`Best room: ${i + 1}`);
                return;
            } else {
                console.log(`You slayed ${type}.`);
            }
        }

    }
    console.log('You\'ve made it!');
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${hp}`);
}
game("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest1000");
game("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");