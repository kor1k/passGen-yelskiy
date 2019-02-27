// function reloadBtn() {location.reload();}
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


// function generatePassword() {/
function rand(lower, upper) {
    return Math.floor(Math.random() * (upper - lower) + lower);
}
document.getElementById('elem').onclick = function() {
    let lower = +document.getElementById('lower').value;
    let upper = +document.getElementById('upper').value;
    let quantity = +document.getElementById('quantity').value;
    for( let i = 0; i< quantity; i++) {
        // console.log('bla')
        console.log(rand(lower,upper))
    }
};


// let generate = document.getElementById('elem');
// generate.click();







// generate.onclick = function () {
//  alert(rand(low, high));
// }
// length of password
// let test_low = document.getElementById('lower');
//     let notValid = '';
//     let lenOfPass = +prompt('Enter your length of password');
//     // let lenOfPass = test_low;
//     if (isNaN(lenOfPass) === true) {
//         alert('There is no numbers! Please try one more time ')
//     }
//     if (lenOfPass === false) {
//         alert('You pressed Cancel')
//     }
//     if (lenOfPass == null) {
//         alert('Try one more time!')
//     }
//     if (lenOfPass === notValid) {
//         alert('0 does not exist!')
//     }
//     let length = lenOfPass;
//     let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
//     // value of password
//     let retVal = '';
//     // cycle for gen password
//     for (let i = 0, n = charset.length; i < length; ++i) {
//         retVal += charset.charAt(Math.floor(Math.random() * n));
//     }
//     // login in console
//     console.log(retVal);
//     // adding pass in HTML by .innerText
//     let typeInHtml = document.getElementById('typeInHtml');
//     typeInHtml.innerText = `${retVal} <- random pass`;
//     return retVal;
// }
//
// // taking element from HTML by Id and giving function to this element
// let generate = document.getElementById('elem');
// generate.onclick = function () {
//     alert('Random number is: ' + generatePassword());
// };


//TODO: Кол-во выводимых паролей
//TODO: Добавить диапазон длинны ОТ и До
//TODO: Добавить проверку на -число
//TODO: Кол-во сиволов, который должны быть выведены || Done
// TODO: Вывод сгенерированого числа в HTML || Done
//TODO: Добавить проверку на 0 || Done
