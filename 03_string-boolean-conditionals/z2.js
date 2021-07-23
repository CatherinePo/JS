/*  * Задание
    
В переменных name, surname написаны имя и фамилия человека. При этом в строках беспорядок с большими и маленькими буквами, и нужно привести строки в порядок. Для этого первые буквы имени и фамилии приведите к верхнему регистру, а оставшиеся буквы — к нижнему. Запишите результат в новые переменные и выведите их значения с помощью console.log. С помощью тернарных операторов и console.log выведите сообщение «Имя было преобразовано» или «Имя осталось без изменений» для имени и фамилии в зависимости от того, были ли исходные строки равны преобразованным. */

let name = 'Ekaterina';
let surname = 'PolIKARpoVa';

let rightName = name[0].toUpperCase() + name.substr(1, name.length).toLowerCase();
let rightSurname =  surname[0].toUpperCase() + surname.substr(1, surname.length).toLowerCase();

console.log('Имя ' + rightName);
console.log('Фамилия ' + rightSurname);

rightName = name === rightName ? console.log('Имя осталось без изменений') : console.log('Имя было преобразовано');
rightSurame = surname === rightName ? console.log('Фамилия осталась без изменений') : console.log('Фамилия была преобразована');





