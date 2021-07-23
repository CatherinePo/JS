/*  Задание

    Возьмите выполненное предыдущее задание. Сделайте так, чтобы функция создания выпадающего списка могла обрабатывать не только массив объектов, но и другие виды входящих значений, а именно:

    Массив примитивных значений типа string или number. В таком случае value и label будут равны. Например: [1, 2, 'три', 'четыре', ...]
    Объект с произвольными свойствами и значениями типа string или number. В таком случае каждый элемент должен формироваться из ключа (value) и значения (label) каждого свойства переданного объекта. Например: { value1: 'Значение 1', value2: 'Значение 2', ... }


    Рекомендации к выполнению

    Есть принцип разработки, который называется "Принцип единой ответственности" или "Single responsibility principle". В соответствии с ним, любая сущность в программе должна отвечать за что-то одно и не стараться делать всю работу сразу. Соблюдение этого правила делает код программы более понятным для разработчика и легко поддающимся изменениям в будущем.

    Вы уже написали код, который делает своё дело, то есть создаёт выпадающий список со значениями. Чтобы научить вашу программу работать с разными форматами входных данных, необязательно усложнять уже существующий код. Вы можете создать отдельную функцию, которая преобразует входящие данные в массив объектов для функции из предыдущего задания. Помимо выше указанных преимуществ, такой подход позволит вам тестировать работу только этой функции, так как функция с прошлого задания должна быть уже протестирована, а её работу вы не изменяете. */ 

    let array = [
        {value: 1, label: 'один'},
        {value: 2, label: 'два'},
        {value: 3, label: 'три'},
        {value: 4, label: 'четыре'},
        {value: 5, label: 'пять'},
        {value: 6, label: 'шесть'}
    ]

    let stNumb = [1, 4, 'пять', 6]

    // console.log(typeof(array));

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

    function transform(array, labelDefault) {
        if (array[0].label === undefined && array[0].value === undefined ) {
            let array1 = [];
            for (let i = 0; i < array.length; i++) {
                array1[i] = {
                    value: '',
                    label: '' }
                array1[i].value = array[i];
                array1[i].label = array[i];
            }  
            newList(array1, labelDefault);  
        } else {
            newList(array, labelDefault);
        }
    }

    transform(stNumb, '4');