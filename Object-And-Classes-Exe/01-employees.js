function employees(arr) {
    for (let name of arr) {
        let employes = {
            name: name, theLengthOfName: name.length
        };

        console.log(`Name: ${employes.name} -- Personal Number: ${employes.theLengthOfName}`);
    }
}
employees([

    'Silas Butler',

    'Adnaan Buckley',

    'Juan Peterson',

    'Brendan Villarreal'

]);