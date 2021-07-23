/*  * Задание

Напишите функцию, которая создаёт массив email-адресов, не попавших в чёрный список. В качестве аргументов функция должна принимать: массив строк с исходными email адресами, массив строк с email адресами в чёрном списке.
В конце файла с кодом домашнего задания напишите конструкцию export default {название функции}, чтобы была возможность автоматической проверки получившейся функции.

    * Проверка результата

Для проверки задания вызывайте получившуюся функцию вручную с различными параметрами и сверяйте получившийся результат с тем, что вы считаете правильным. Для этого предварительно произведите самостоятельно несколько вычислений с различными вариантами аргументов. Также после создания MR или запуском команды npm test из консоли вы сможете увидеть результаты автоматизированного тестирования вашего кода.

*/

let list = ['1@gmail.com', '2@gmail.com', '3@gmail.com', '4@gmail.com', '5@gmail.com'];
let blackList = ['1@gmail.com', '4@gmail.com'];

function notInBlacklist (list, blackList) {
    let inBlackList = [];
    let notInBlacklist = [];
    for (let i = 0; i < list.length; ++i) {
        if (blackList.indexOf(list[i]) !== -1) {
            let black = list.indexOf(list[i]);
            inBlackList.push(list[black]); //массив email адресов, находящихся в чс
        } else {
            let notBlack = list.indexOf(list[i]);
            notInBlacklist.push(list[notBlack]); //массив email адресов, НЕ находящихся в чс
        }
    }
    console.log('Массив email-адресов, не попавших в чёрный список - ', notInBlacklist);
}

notInBlacklist(list, blackList);

