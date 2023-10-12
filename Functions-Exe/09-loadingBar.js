function loadingBar(num) {
    let perCent = '%'.repeat(num / 10);

    let dots = '.'.repeat(10 - num / 10);

    if (num === 100) {
        console.log(`${num}% Complete!`);
        console.log(`[${perCent}]`);
    } else {
        console.log(`${num}% [${perCent}${dots}]`);
        console.log(`Still loading...`);
    }

}

loadingBar(100);