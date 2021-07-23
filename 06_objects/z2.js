/*  * Задание

    Напишите функцию, создающую выпадающий список на веб-странице (HTML select) из массива объектов со значениями. Массив должен содержать объекты со свойствами:

    value — значение для атрибута value тэга option
    label — значение для содержимого тэга option (заголовок элемента при открытии списка или выбранного значения)
    Вторым аргументом функция должна принимать выбранное значение (value выбранного по умолчанию элемента). По умолчанию выбирается 0-й элемент массива значений. Если переданное значение не найдено в массиве элементов, то нужно также выбрать 0-й элемент.

    Возвращаемое значение — DOM-элемент select.

    Создайте базовую html-разметку в файле index.html. В неё поместите получившийся код с помощью <script src="./main.js"></script>. Внутри другого тэга script перед </body> поместите код, который создаст новый select с произвольным массивом значений и поместит его в любое место в body. 
    
    Для создания тэгов можно использовать функцию document.createElement('select/option'), которая вернёт объект DOM-элемента, название которого передано в первом параметр.

    Для того, чтобы вложить один DOM-элемент в другой, можно воспользоваться методом DOM-элемента append. Например, при наличии элемента select и option в одноимённых переменных можно вложить 2-й в 1-й с помощью конструкции select.append(option).

    document.body - это ссылка на DOM-элемент тэга body, в него можно вложить select с помощью того же append.

    Для установки атрибута value тэга option нужно просто приравнять к свойству value DOM-элемента нужное значение.

    Для размещения текста внутри DOM-элемента можно приравнять нужный текст свойству innerHTML. */ 

    let array = [
        {value: 1, label: 'один'},
        {value: 2, label: 'два'},
        {value: 3, label: 'три'},
        {value: 4, label: 'четыре'},
        {value: 5, label: 'пять'},
        {value: 6, label: 'шесть'}
    ]

    function newList(array, labelDefault) {
        
        let select = document.createElement("select");
        select.id = "mySelect";
        document.body.appendChild(select);

        for (let i = 0; i < array.length; i++) {
            if (labelDefault === array[i].label ) {
                count = 1;
                break;
            } else {
                count = 0;
            }
        }

        for (let i = 0; i < array.length; i++) {
            let option = document.createElement("option");
            option.value = array[i].value;
            if (array[i].label !== undefined) { //label есть
                option.label = array[i].label;
                select.appendChild(option);
            } else if (array[i].label === undefined && count === 1) {
                option.label = labelDefault;
                select.appendChild(option);
                option.selected = true;
            } else {
                option.label = array[0].label;
                select.appendChild(option);
            }

            if (option.label === labelDefault) {
            option.selected = true;
            }
         }
    }

    newList(array, 'два');

    