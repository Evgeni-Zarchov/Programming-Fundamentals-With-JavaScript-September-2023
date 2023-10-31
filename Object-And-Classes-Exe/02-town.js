function townInfo(arr) {
    for (let towns of arr) {
        let [city, latitude, longitude] = towns.split(' | ');
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        let townObj = {
            town: city,
            latitude: latitude,
            longitude: longitude

        };
        console.log(townObj);
    }
}
townInfo(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);