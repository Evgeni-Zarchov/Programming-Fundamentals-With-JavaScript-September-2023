function personInfo(firstName, lastName, age) {
    let personInformation = {
        firstName,
        lastName,
        age,
    };
    return personInformation;

}
console.log(personInfo("Peter", "Pan", "20"));