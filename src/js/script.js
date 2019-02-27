function rand(lower, upper) {
    return Math.floor(Math.random() * (upper - lower) + lower);
}

document.getElementById('elem').onclick = function () {
    let lower = +document.getElementById('lower').value;
    let upper = +document.getElementById('upper').value;
    let quantity = +document.getElementById('quantity').value;
    for (let i = 0; i < quantity; i++) {
        console.log(rand(lower, upper))
    }
};

//TODO: Кол-во выводимых паролей ||
//TODO: Добавить диапазон длинны ОТ и До ||
//TODO: Добавить проверку на -число ||
//TODO: Кол-во сиволов, который должны быть выведены ||
//TODO: Вывод сгенерированого числа в HTML || Done
//TODO: Добавить проверку на 0 || Done
//TODO: Добавить проверку на букву
//TODO: Добавить проверку на символ
