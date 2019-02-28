function rand(lower, upper) {
    return Math.floor(Math.random() * (upper - lower) + lower);
}

document.getElementById('elem').onclick = function randAction() {
    // taking value from low input
    let lower = +document.getElementById('lower').value;
    // taking value from upper input
    let upper = +document.getElementById('upper').value;
    // taking value from quantity input
    let quantity = +document.getElementById('quantity').value;
    // check for l > u
    if (lower > upper) {
        alert('wrong, lower is bigger than upper or there is number with -   ');
        return false;
    }
    // check for isNaN quantity
    if (isNaN(quantity) == true) {
        alert('u have wrong quantity. check it')
    }
    // check for isNaN lower and upper
    if (isNaN(lower || upper) == true) {
        alert('there is not a number!')
    }
    //cycle for type n-th quantity of numbers
    for (let i = 0; i < quantity; i++) {
        console.log(rand(lower, upper))
        // let value = rand(lower, upper);
    }
};

// function for make console clear
function consoleClear() {
    let c = document.getElementById('clean-console');
    location.reload();
    c.onclick = console.clear();
}

//TODO: Кол-во выводимых паролей || Done
//TODO: Добавить диапазон длинны ОТ и До || Done
//TODO: Добавить проверку на -число || Done
//TODO: Добавить проверку на 0 || Done
//TODO: Добавить проверку на букву || Done
//TODO: Добавить проверку на символ || Done
