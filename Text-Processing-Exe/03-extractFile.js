function extractFile(path) {
    let file = path.split('\\').pop();

    let dot = file.lastIndexOf('.');

    let fileName = file.slice(0, dot);

    let extension = file.slice(dot + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');