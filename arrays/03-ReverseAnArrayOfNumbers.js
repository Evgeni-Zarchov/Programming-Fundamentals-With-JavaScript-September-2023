function reversedArrays(n, index) {
    let result = [];

    for (let i = 0; i < n; i++) {
        result[i] = index[i];
    }
    let rev = [];
    for (let i = n - 1; i >= 0; i--) {
        rev[rev.length] = result[i]
    }
    console.log(rev.join(' '));
}
reversedArrays(3, [10, 20, 30, 40, 50]);
reversedArrays(4, [-1, 20, 99, 5]);