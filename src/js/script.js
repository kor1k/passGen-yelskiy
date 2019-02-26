function reloadBtn() {
    location.reload();
}

//-------------------------
// Only numbers password
// let charset = '1234567890';
//---------------------------
// Only small letters
//let charset = 'qwertyuiopasdfghjklzxcvbnm'
//---------------------------
//Only big letters
// let charset = 'QWERTYUIOPASDFGHJKLZXCVBNM'
//-------------------------
//Charset with symbols, letters and numbers
// let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}:"?|<>~'


function generatePassword() {
    // length of password
    let notValid = 0;
    let lenOfPass = +prompt('Enter your length of password');
    if (isNaN(lenOfPass) === true) {
        alert('There is no numbers! Please try one more time ')
    }
    if (lenOfPass === false) {
        alert('You pressed Cancel')
    }
    if (lenOfPass === notValid) {
        alert('0 does not exist!')
    }
    let length = lenOfPass;
    // charset
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    // value of password
    let retVal = '';
    // cycle for genering password
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    // login in console
    console.log(retVal);
    return retVal;
}

// taking element from HTML by Id and giving function to this element
let generate = document.getElementById('elem');
generate.onclick = function () {
    alert(generatePassword());
};

//TODO: Добавить диапазон длинны ОТ и До
//TODO: Кол-во сиволов, который должны быть выведены || Done
//TODO: Кол-во выводимых паролей
//TODO: Добавить проверку на 0
//TODO: Добавить проверку на -число
