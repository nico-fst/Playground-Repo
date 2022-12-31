// alert("LOOOOL");

let todo1 = 'Get groceries';
let todo2 = 'Wash car';
let todo3 = 'Make Dinner';
let todoCombined = todo1 + ' and ' + todo2;
let teset = 'd';  // string


// MODEL: saves and manages data

let todos;
const savedTodos = JSON.parse(localStorage.getItem('todos'));


if (Array.isArray(savedTodos)) {
    todos = saveTodos;
} else {
    todos = [
        {
            title: 'Get groceries',
            dueDate: '2021-10-04',
            id: 'id1'
        }, {
            title: 'Wash car',
            dueDate: '2021-11-24',
            id: 'id2'
        }, {
            title: 'Make Dinner',
            dueDate: '2022-01-02',
            id: 'id3'
        }
    ];
}

render();

function createTodo(pTitle, pDueDate) {
    const id  = new Date().getTime();

    todos.push({
        title: pTitle,
        dueDate: pDueDate,
        id: '' + id  // implizites Typecasting zu string
    });

    saveTodos();
}

function removeTodo(pDeleteButton) {
    todos = todos.filter(function (todo) { // filter liefert nur Kopie, muss in richtigen todos gespeichert werden
        if (pDeleteButton.id == todo.id) {
            return false;
        }
        return true;
    });

    saveTodos();
}

function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// VIEW: manages rendering of data

function render() {
    let todoList = document.getElementById('todo-list');

    // reset list
    todoList.innerHTML = '';

    // rerender    
    todos.forEach(function (todo) {
        let element = document.createElement('div');
        element.innerText = todo.dueDate + ' ' + todo.title;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.style = 'margin-left: 12px';
        deleteButton.onclick = deleteTodo;
        deleteButton.id = todo.id;
        element.appendChild(deleteButton);

        todoList.appendChild(element);
    });
}

// CONTROLLER: responds to interactions

function addTodo() {
    // adds to array
    const textbox = document.getElementById('todo-title');
    const title = textbox.value;

    const datePicker = document.getElementById('date-picker');
    const dueDate = datePicker.value;

    createTodo(title, dueDate);
    render();
}

function deleteTodo(event) {
    const deleteButton = event.target;

    removeTodo(deleteButton);
    render();
}