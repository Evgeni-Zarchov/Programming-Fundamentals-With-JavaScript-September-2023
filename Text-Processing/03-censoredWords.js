function censored(text, str) {
    let wordToReplace = '*'.repeat(str.length);

    let output = text;

    while (output.includes(str)) {
        output = output.replace(str, wordToReplace);
    }
    console.log(output);
}
censored('A small sentence with some words', 'small');