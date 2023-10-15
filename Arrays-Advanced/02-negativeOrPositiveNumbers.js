function negativeOrPositiveNum(arr) {
    let output = [];

    for (let numAsString of arr) {
        let num = Number(numAsString);

        if (num < 0) {
            output.unshift(num);
        } else {
            output.push(num);
        }
    }

    for (let num of output) {
        console.log(num);
    }

}
negativeOrPositiveNum(['7', '-2', '8', '9']);
negativeOrPositiveNum(['3', '-2', '0', '-1']);