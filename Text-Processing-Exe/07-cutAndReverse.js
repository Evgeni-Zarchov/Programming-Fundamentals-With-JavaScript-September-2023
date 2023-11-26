function cutAndReverse(str) {
    let middle = str.length / 2;

    let leftSideOfText = str.slice(0, middle).split('').reverse().join('');
    let rightSideOfText = str.slice(middle).split('').reverse().join('');

    console.log(leftSideOfText);
    console.log(rightSideOfText);

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');