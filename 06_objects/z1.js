/*  * Задание

    Напишите функцию, фильтрующую массив объектов по значению свойства. Массив, название свойства и нужное значение должны передаваться в качестве аргументов. Пример использования:

    let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
    ]

    // fn - функция, которую нужно написать (хорошее название тоже нужно придумать)
    let result = fn(objects, 'name', 'Иван');

    Результат выполнения должен быть:
    [
    { name: 'Иван', surname: 'Иванов' }
    ]

 */ 

let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
    ]

function filterByValue(objects, prop, value) {
    if (prop === 'name') {
        for (let i = 0; i < objects.length; i++) {
        if (objects[i].name === value) {
                b = objects[i].surname;
                result = [{name: value, surname: b}];
                console.log(result);
            }
        }
    } else if (prop === 'surname') {
        for (let i = 0; i < objects.length; i++) {
            if (objects[i].surname === value) {
                    b = objects[i].name;
                    result = [{name: b, surname: value}];
                    console.log(result);
                } 
            }
    }
}

filterByValue(objects, 'name', 'Василий');

// let result = filterByValue(objects, 'name', 'Иван');
