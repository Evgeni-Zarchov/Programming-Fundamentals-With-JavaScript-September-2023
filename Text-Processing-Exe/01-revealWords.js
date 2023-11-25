function revealWords(str, text) {
    let words = str.split(', ');

    for (let word of words) {
        let wordLength = word.length;

        let count = '*'.repeat(wordLength);

        text = text.replace(count, word);
    }
    console.log(text);
}
revealWords('great',
    'softuni is ***** place for learning new programming languages');