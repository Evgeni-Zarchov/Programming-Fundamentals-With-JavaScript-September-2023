function arraysRotation(arr, rotations) {
    for (let rotation = 1; rotation <= rotations; rotation++) {
        let firstEl = arr.shift();
        arr.push(firstEl);
    }
    console.log(arr.join(' '));

}
arraysRotation([51, 47, 32, 61, 21], 2);
arraysRotation([32, 21, 61, 1], 4);
arraysRotation([2, 4, 15, 31], 5);