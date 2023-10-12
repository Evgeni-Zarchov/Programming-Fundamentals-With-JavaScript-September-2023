function passwordValidator(pass) {
    let isValid = checkPass(pass);
    let isDigitsOrLetters = digitOrLetters(pass);
    let checkDigitsIs2 = checkDigits(pass);

    if (isValid && isDigitsOrLetters && checkDigitsIs2) {
        console.log('Password is valid');
    }

    function checkPass(pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            console.log('Password must be between 6 and 10 characters');
            return false;
        }
    }

    function digitOrLetters(pass) {
        for (let currChar of pass) {
            let ascii = currChar.charCodeAt(0);

            if (
                !((ascii >= 48 && ascii <= 57) ||
                    (ascii >= 65 && ascii <= 90) ||
                    (ascii >= 97 && ascii <= 122))
            ) {
                console.log('Password must consist only of letters and digits');
                return false;
            }
        }
        return true;
    }

    function checkDigits(pass) {
        let digitCount = 0;

        for (let digits of pass) {
            let ascii = digits.charCodeAt(0);

            if (ascii >= 48 && ascii <= 57) {
                digitCount++;
            }
        }

        if (digitCount < 2) {
            console.log('Password must have at least 2 digits');
            return false;
        } else {
            return true;
        }
    }
}
passwordValidator('MyPass123');

