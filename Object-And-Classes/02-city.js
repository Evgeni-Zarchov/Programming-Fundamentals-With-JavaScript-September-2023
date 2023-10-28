function city(city) {
    for (let [keys, value] of Object.entries(city)) {
        console.log(`${keys} -> ${value}`);
    }
}
city({

    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
});