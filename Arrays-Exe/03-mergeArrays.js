function mergeArr(arr1, arr2) {
    let thirdArr = [];

    for (let i = 0; i < arr1.length; i++) {
        let el1 = arr1[i];
        let el2 = arr2[i];

        if (i % 2 == 0) {
            let num = Number(el1) + Number(el2);
            thirdArr.push(num);
        } else {
            let string = el1 + el2;
            thirdArr.push(string);
        }
    }
    console.log(thirdArr.join(' - '));
}
mergeArr(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
mergeArr(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);