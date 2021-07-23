/*  * Задание

Написать генератор нечётных случайных чисел в диапазоне между n и m включительно. Учесть, что n и m могут быть отрицательными, а также может быть n > m или n < m. Вывести результат с помощью console.log.

    * Проверка результата

Для проверки подставляйте различные значения m и n и смотрите на корректность результата. Так как число случайное, для одного набора входных параметров рекомендуется запустить код 5–10 раз. Примеры чисел m и n, для которых алгоритм должен корректно работать:
n = 0, m = 100;
n = 2, m = 5;
n = 100, m = −5;
n = -3, m = −10. */

let n = -3;
let m = -10;

function oddRandom(n, m){
    let range = Math.abs(n-m);
    let numberInRange = Math.round(Math.random()*range);
    let min = Math.min(n,m)
    return min + numberInRange;
} 

let random = oddRandom(n, m);

while (random%2 === 0){
   random = oddRandom(n, m); 
} 
   console.log('Случайное число в диапозоне от ', n, ' до ', m , ' - ', random); 


