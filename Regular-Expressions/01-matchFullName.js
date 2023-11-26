function matchReg(input) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let output = input.match(pattern);

    console.log(output.join(' '));
}
matchReg('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov');