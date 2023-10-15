function sumFirstLast(arr) {

    let firstEl = arr.shift();
    let secondEl = arr.pop();

    console.log(Number(firstEl) + Number(secondEl));
}
sumFirstLast(['5', '10']);