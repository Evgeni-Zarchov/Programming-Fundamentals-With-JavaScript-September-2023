function lowerUpperCase(args) {
    let char = args.charCodeAt();
    if (char >= 65 && char <= 90) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }
}
lowerUpperCase('L');
lowerUpperCase('f');