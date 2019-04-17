function rand(lower, upper) {
    return Math.floor(Math.random() * (upper - lower) + lower);
}

document.getElementById('elem').onclick = function () {
    let limitVal = 2147483647;
    let lower = +document.getElementById('lower').value;
    let upper = +document.getElementById('upper').value;
    let quantity = +document.getElementById('quantity').value;
    // переписать без такого кол-ва if-ов
    if (lower > limitVal) {
        alert('Number is not valid! Check text in head of page');
        return false;
    }

    if (upper > limitVal) {
        alert('Number is not valid! Check text in head of page');
        return false;
    }
    if (quantity > limitVal) {
        alert('Number is not valid! Check text in head of page');
        return false;

    }
    if (lower > upper) {
        alert('Wrong, lower is bigger than upper or there is number with -   ');
        return false;
    }
    if (isNaN(lower) === true) {
        alert('Wrong! Input is not a number!');
        return false;
    }
    if (isNaN(lower || upper) === true) {
        alert('Wrong! Input is not a number!');
        return false;
    }
    if (isNaN(quantity) === true) {
        alert('Wrong! Input is not a number!');
        return false;
    }
    for (let i = 0; i < quantity; i++) {
        let gogi = rand(lower, upper);
        // console.log('-> ' + rand(lower, upper));
        // $('#typeInHtml').append('<p>' + gogi + '</p>');
        const htmlElement = document.createElement('div');
        htmlElement.innerText = gogi;
        document.getElementById('typeInHtml').appendChild(htmlElement);
        // let value = rand(lower, upper);
    }
};

function clearNumbers() {
    location.reload(true);
}

//TODO: Кол-во выводимых паролей || Done
//TODO: Добавить диапазон длинны ОТ и До || Done
//TODO: Добавить проверку на -число || Done
//TODO: Добавить проверку на 0 || Done
//TODO: Добавить проверку на букву || Done
//TODO: Добавить проверку на символ || Done
//TODO: ограничения на инпуты, проверка ловера на стрингу || Done
//TODO: Добавить "ячейку" для чисел || Done