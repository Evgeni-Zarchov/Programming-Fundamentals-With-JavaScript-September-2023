function wordTracker(arr) {
    let token = arr.shift().split(' ');

    let searchedWords = {};

    for (let item of token) {
        searchedWords[item] = 0;
    }

    for (let item of arr) {
        if (item in searchedWords) {
            searchedWords[item]++;
        }
    }
    let entries = Object.entries(searchedWords).sort((a, b) => b[1] - a[1]);
    for (let [word, num] of entries) {
        console.log(`${word} - ${num}`);
    }
}
// wordTracker([
//     'this sentence',
//     'In', 'this', 'sentence', 'you', 'have',
//     'to', 'count', 'the', 'occurrences', 'of',
//     'the', 'words', 'this', 'and', 'sentence',
//     'because', 'this', 'is', 'your', 'task']);
wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']);
