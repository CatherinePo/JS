/*  * Задание

Запишите в переменные x и y координаты двух произвольных точек: x1, y1 — первая точка, x2, y2 — вторая точка. Вычислите площадь прямоугольника, противоположные углы которого представлены указанными точками. Выведите результат с помощью console.log.

    * Проверка результата

Для проверки подставляйте разные значения в переменные x1, y1, x2, y2 и смотрите на получившуюся площадь. Примеры для проверки:
Для x1 = 2, y1 = 3, x2 = 10, y2 = 5 площадь равна 16;
Для x1 = 10, y1 = 5, x2 = 2, y2 = 3 площадь равна 16;
Для x1 = -5, y1 = 8, x2 = 10, y2 = 5 площадь равна 45;
Для x1 = 5, y1 = 8, x2 = 5, y2 = 5 площадь равна 0;
Для x1 = 8, y1 = 1, x2 = 5, y2 = 1 площадь равна 0. */

let x1 = 2;
let y1 = 3;
let x2 = 10;
let y2 = 5;

function square (x1, y1, x2, y2) {
    let width = x2 - x1;
    let height = y2 - y1;
    return Math.abs(width * height); 
}

let S = square(x1, y1, x2, y2);

console.log('Площадь равна ', S)