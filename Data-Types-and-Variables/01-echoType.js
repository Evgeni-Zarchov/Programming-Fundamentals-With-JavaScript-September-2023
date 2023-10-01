function echoType(args) {
    let type = typeof (args);
    console.log(type);
    if (type == "string" || type == "number") {
        console.log(args);
    } else {
        console.log("Parameter is not suitable for printing");
    }
}
echoType('Hello, JavaScript!');
echoType(18);
echoType(null);