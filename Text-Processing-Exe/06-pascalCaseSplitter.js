function pascalSplitter(text) {
    let arr = [];

    let index = 1;
    let end = text.length;
    let cut = 0;
    while (index < end) {
        if (text.charCodeAt(index) >= 65 && text.charCodeAt(index) <= 90) {
            arr.push(text.slice(cut, text.length));
            cut = index;
        }
        index++;
    }
    arr.push(text.slice(cut, text.length));
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i - 1].replace(arr[i], '');
    }
    console.log(arr.join(', '));
}
pascalSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');