function searchedNumbers(arr1, arr2) {
    let firstElToTake = arr2[0];
    let secondElToDelete = arr2[1];
    let searchedEl = arr2[2];

    let newEl = arr1.slice(0, firstElToTake);
    newEl.splice(0, secondElToDelete);

    let counter = newEl.filter(el => el === searchedEl).length;

    console.log(`Number ${searchedEl} occurs ${counter} times.`);
}
searchedNumbers([5, 2, 3, 4, 1, 6], [5, 2, 3]);