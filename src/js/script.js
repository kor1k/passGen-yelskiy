function rand(lower, upper) {
    return Math.floor(Math.random() * (upper - lower) + lower);
}

document.getElementById('elem').onclick = function randAction () {
    let lower = +document.getElementById('lower').value;
    let upper = +document.getElementById('upper').value;
    let quantity = +document.getElementById('quantity').value;
    if (lower > upper) {
        alert('wrong, lower is bigger than upper or there is number with -   ');
        return false;
    }
    if (isNaN(quantity) == true) {
        alert('u have wrong quantity. check it')
    }
    if (isNaN(lower || upper) == true) {
        alert('there is not a number!')
    }
    for (let i = 0; i < quantity; i++) {
        console.log(rand(lower, upper))
        // let value = rand(lower, upper);
    }
    let typeInHtml = document.getElementById('typeInHtml');
    // typeInHtml.innerText = rand(lower, upper);

    return rand;
};


// let typeInHtml = document.getElementById('typeInHtml');
// typeInHtml.innerText = typeInHtml


//TODO: Кол-во выводимых паролей || Done
//TODO: Добавить диапазон длинны ОТ и До || Done
//TODO: Добавить проверку на -число || Done
//TODO: Вывод сгенерированого числа в HTML ||
//TODO: Добавить проверку на 0 ||
//TODO: Добавить проверку на букву || Done
//TODO: Добавить проверку на символ
