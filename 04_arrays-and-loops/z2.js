/*  * Задание

С помощью цикла создать перевёрнутый вариант произвольной строки. Например, строка «Привет, мир!» должна превратиться в «!рим ,тевирП».

    * Проверка результата

Для проверки подставляйте различные варианты строк и проверьте результат. Примеры для проверки:

    'Привет, мир!' → '!рим ,тевирП';
    '1' → '1';
    '' → ''. 
    */

let string  = 'Привет, мир!';
let invString = '';
let i = string.length-1;

while (i >= 0){
    invString += string[i];
    i--;
}

console.log(invString);