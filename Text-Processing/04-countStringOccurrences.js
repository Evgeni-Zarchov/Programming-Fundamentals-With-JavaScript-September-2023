function searchingWords(input, str) {
    let words = input.split(' ');

    let counter = 0;

    for (let word of words) {
        if (word == str) {
            counter++;
        }
    }
    console.log(counter);
}
searchingWords('This is a word and it also is a sentence', 'is');
searchingWords('softuni is great place for learning newprogramming languages', 'softuni');