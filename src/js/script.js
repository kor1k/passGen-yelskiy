function generatePassword() {
    let length = 10;
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let retVal = '';
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

//TODO: Добавить диапазон длинны ОТ и До
//TODO: Кол-во паролей, которые должны быть выведены
//TODO: Кол-во выводимых паролей


