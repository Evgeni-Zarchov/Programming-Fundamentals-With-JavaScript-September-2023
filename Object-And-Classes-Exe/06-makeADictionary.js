function makeADictionary(input) {
    let dictionaryObj = {};
    for (let item of input) {

        let myObj = JSON.parse(item);

        dictionaryObj = Object.assign(dictionaryObj, myObj);
    }
    let sorted = Object.keys(dictionaryObj);
        sorted.sort((a, b) => a.localeCompare(b))


    for (let items of sorted) {
        let output = dictionaryObj[items];

        console.log(`Term: ${items} => Definition: ${output}`);
    }
}
makeADictionary();