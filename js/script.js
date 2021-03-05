function Quad(a, b, c) {
    var D = null,
    x1 = null,
    x2 = null

    D = (b * b) - (4 * a * c); // находим дескриминант

    x1 = (-b + Math.sqrt(D)) / (2 * a); // первый корень
    x2 = (-b - Math.sqrt(D)) / (2 * a); // второй корень

    return {
        D: D,
        x1: x1,
        x2: x2
    }
}

document.querySelector('.push').onclick = function (e) {
    e.preventDefault(); // чтобы страница не обновлялась

    let a = document.querySelector('.a').value 
    let b = document.querySelector('.b').value // получаем данные с полей
    let c = document.querySelector('.c').value

    let result = Quad(a, b, c);

    document.querySelector('.D').innerText = result.D;
    document.querySelector('.x1').innerText = result.x1;
    document.querySelector('.x2').innerText = result.x2;
    
}