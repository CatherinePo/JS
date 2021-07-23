(function(){
    // создаем и возвращаем заголовок приложения
    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    }

    // создфем и возвращаем форму для создания дела
    function createTodoItemForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group','mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите название нового дела';
        input.setAttribute("id","createTodo");
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn','btn-primary')
        button.textContent = 'Добавить дело';
        button.setAttribute("disabled", "disabled");
        button.setAttribute("id","addButton");
        // button.removeAttribute("disabled");

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);       

        input.oninput  = function(){
            button.removeAttribute("disabled");
            if (input.value == '') {
                button.setAttribute("disabled", "disabled");
            } 
        };
       
        

        return {
            form,
            input,
            button
        };

    }

    // создаем и возвращаем список элементов
    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    function createTodoItem(name) {
        let item = document.createElement('li');
    
        //кнопки помещаем в элемент
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');
    
        //устанавливаем стили для элемента списка, а также для размещения кнопок в его правой части с помощью flex
        item.classList.add('list-group-item','d-flex','justify-content-between', 'align-items-center');
        item.textContent = name;
    
        buttonGroup.classList.add('btn-group', 'button-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Удалить';
    
        //вкладываем кнопки в отдельный элемент, чтобы они объединились в один блок
        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);
    
        //приложению нужен доступ к самому элементу и кнопкам, чтобы обрабатывать события нажатия
        return {
            item,
            doneButton,
            deleteButton
        };
    }

    

    function createTodoApp(container, title="Список дел", whoseTodo) {
        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();
        let todoStorage = window.localStorage;
        let button = document.getElementById("addButton");
        //button.setAttribute("disabled", "disabled");
        // let input = document.getElementById("createTodo");
        let i=0;
        
        //todoStorage.clear();

        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);

        for ( i=0; i< todoStorage.length ;i++){
            let todoItems = createTodoItem(todoStorage.getItem(i));
            todoList.append(todoItems.item);
            todoItems.doneButton.addEventListener('click',function () {
                todoItems.item.classList.toggle('list-group-item-success');
            });
            todoItems.deleteButton.addEventListener('click', function () {
                if (confirm('Вы уверены?')) {
                    todoItems.item.remove();
                    todoStorage.removeItem(i);
                }
            })
        }

        
        // todoList.append(todoItems[1].item);

        //браузер создает событие submit на форме по нажатию Enter или на кнопку создания дела
        todoItemForm.form.addEventListener('submit', function(e) {
            //эта строчка необходима, чтобы предотвратить стандартное действие браузера, в данном случае мы не хотим, чтобы страница перезагружалась при отправке формы
            e.preventDefault();

            //игнорируем создание элемента, если пользователь ничего не ввел в поле
            if (!todoItemForm.input.value){
                return;
                // button.setAttribute("disabled", "disabled");
            }

            // if (input.value.length > 0) {
            //     button.removeAttribute("disabled");
            // } 

            todoItem = createTodoItem(todoItemForm.input.value);
            function addToStorage() {
                    todoStorage.setItem(i, todoItemForm.input.value);
                    alert(todoStorage.getItem(i));
            
            }
            addToStorage();
            
            //добавляем обработчики на кнопки
            todoItem.doneButton.addEventListener('click',function () {
                todoItem.item.classList.toggle('list-group-item-success');
            });
            todoItem.deleteButton.addEventListener('click', function () {
                if (confirm('Вы уверены?')) {
                    todoItem.item.remove();
                    todoStorage.removeItem(i);
                }
            })

            //создаем и добавляем в список новое дело с названием из поля ввода
            todoList.append(todoItem.item);
            //обнуляем значение в поле, чтобы не пришлось стирать вручную
            todoItemForm.input.value = '';
            todoItemForm.button.setAttribute("disabled", "disabled");
        });
    }

    window.createTodoApp = createTodoApp;

})();

