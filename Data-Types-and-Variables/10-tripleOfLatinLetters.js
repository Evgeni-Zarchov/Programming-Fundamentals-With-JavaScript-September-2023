function tripleOfLatinLetters(n) {
    let num = Number([n]);
    for (let a = 0; a < num; a++) {
        let first = String.fromCharCode(a + 97)
        for (let b = 0; b < num; b++) {
            let second = String.fromCharCode(b + 97);
            for (let c = 0; c < num; c++) {
                let third = String.fromCharCode(c + 97);
                console.log(`${first}${second}${third}`);
            }
        }
    }
}
tripleOfLatinLetters('3');