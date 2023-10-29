function convertToJson(name, lastName, hairColor) {
    let obj = {
        name,
        lastName,
        hairColor
    }

    let jsonString = JSON.stringify(obj)

    console.log(jsonString);
}
convertToJson('George', 'Jones', 'Brown');