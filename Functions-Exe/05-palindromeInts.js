function palindromeInts(arr) {
    for (currNum of arr) {
        let isPalindrome = checkIsPalindrome(currNum);
        console.log(isPalindrome);
    }

    function checkIsPalindrome(num) {
        let numAsString = String(num);
        let reversedNum = '';

        for (let i = numAsString.length - 1; i >= 0; i--) {
            let currNum = numAsString[i];
            reversedNum += currNum;

        }
        let isPalindrome = numAsString == reversedNum;
        return isPalindrome;
    }
}
palindromeInts([123, 323, 421, 121])