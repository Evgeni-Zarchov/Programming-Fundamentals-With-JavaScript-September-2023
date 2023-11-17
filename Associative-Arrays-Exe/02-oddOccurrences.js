function oddOccurrences(input) {
    let stringSplit = input.split(' ').map(el => el.toLowerCase());
    let wordStorage = {};

    for (let words of stringSplit) {
        if (!wordStorage.hasOwnProperty(words)) {
            wordStorage[words] = 0;
        }
        wordStorage[words]++;
    }

    let entries = Object.entries(wordStorage).filter(el => el[1] % 2 !== 0).sort((a, b) => b[1] - a[1])

    let output = '';

    for (let arr of entries) {
        output += `${arr[0]} `;
    }
    console.log(output);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');