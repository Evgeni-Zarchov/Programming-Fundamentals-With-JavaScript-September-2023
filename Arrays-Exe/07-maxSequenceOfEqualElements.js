function maxSequenceOfElements(arr) {
    let arraysIn = [];

    for (let i = 0; i < arr.length; i++) {
        let currArr = arr[i];
        let currentSequence = [currArr];

        for (let j = i + 1; j < arr.length; j++) {
            let nextSum = arr[j];

            if (currArr == nextSum) {
                currentSequence.push(nextSum);
            } else {
                break;
            }
        }
        if (currentSequence.length > arraysIn.length) {
            arraysIn = currentSequence;
        }

    }
    console.log(arraysIn.join(' '));
}
maxSequenceOfElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
// maxSequenceOfElements([1, 1, 1, 2, 3, 1, 3, 3])
// maxSequenceOfElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);