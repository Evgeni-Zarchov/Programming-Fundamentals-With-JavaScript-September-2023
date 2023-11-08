function meetings(input) {
    let adress = {};

    for (let info of input) {
        let [weekDay, name] = info.split(' ');

        if (weekDay in adress) {
            console.log(`Conflict on ${weekDay}!`);
            continue;
        } else {
            console.log(`Scheduled for ${weekDay}`);
        }
        adress[weekDay] = name;
    }

    for (let [day, name] of Object.entries(adress)) {
        console.log(day, '->', name);
    }
}
// meetings(['Monday Peter',
//     'Wednesday Bill',
//     'Monday Tim',
//     'Friday Tim']);

meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']);