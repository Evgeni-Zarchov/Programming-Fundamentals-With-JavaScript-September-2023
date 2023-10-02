function equalArrays(arr1, arr2) {
    let sum = 0;
    let isTrue = true;
    for (let i = 0; i < arr1.length; i++) {
        let el1 = Number(arr1[i]);
        let el2 = Number(arr2[i]);
        sum += el1;
        if (el1 !== el2) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isTrue = false;
            break;
        }
    }

    if (isTrue) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

}
equalArrays(['10', '20', '30'], ['10', '20', '30']);
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);