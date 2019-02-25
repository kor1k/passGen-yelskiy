// function passGen() {
//     let userName = prompt('Enter ur name')
//     console.log('user name is: ' + userName)
//     let lengthOfPass = prompt('Enter length of pass')
//     console.log('length of pass is: ' + lengthOfPass)
//
//     let gen = Math.random()
// }
// passGen();


function generatePassword() {
    let length = 10,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(retVal);
    return retVal;
}

let generate = document.getElementById('elem');
generate.onclick = function () {
    alert(generatePassword());
};


