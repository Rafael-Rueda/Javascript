const button = document.querySelector('.button-click-me');

function createTodo(todoobj, todoslist, mode) {
    const todo = document.createElement('div');
    todo.classList.add('todo');
    todo.innerText = todoobj.text;

    const removeTodo = document.createElement('button');
    removeTodo.innerText = 'Remove Todo';

    removeTodo.addEventListener('click', () => {
        
        newarray = JSON.parse(localStorage.getItem('todos')) || [];
        newarray = newarray.filter(item => item.id !== todoobj.id);

        localStorage.setItem('todos', JSON.stringify(newarray));

        todo.remove();
        removeTodo.remove();
    })

    if (mode === 'create') {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.push(todoobj);
    
        localStorage.setItem('todos', JSON.stringify(todos));
    }
    
    todoslist.appendChild(todo);
    todoslist.appendChild(removeTodo);
}

function createMenu() {
    const container = document.createElement('div');
    container.classList.add('container');
    const menucontainer = document.createElement('div');
    menucontainer.classList.add('menucontainer');
    const input = document.createElement('input');
    input.classList.add('type-todo');
    const addTodo = document.createElement('button');
    addTodo.classList.add('add-todo');
    addTodo.innerText = 'Add Todo';
    const todos = document.createElement('div');
    todos.classList.add('todos');

    container.appendChild(menucontainer);
    menucontainer.appendChild(input);
    menucontainer.appendChild(addTodo);
    container.appendChild(todos);

    document.body.appendChild(container);  
    document.body.removeChild(button);

    return {addTodo, todos, input};
}

function loadTodos(todoslist) {

    if (JSON.parse(localStorage.getItem('todos'))) {
        const todos = JSON.parse(localStorage.getItem('todos'));
        console.log(todos);
        /*
        todos = [
            {
                id: 0,
                text: '',
            },
            {
                id: 1,
                text: '',
            },
        ]
        */
        for (todo of todos) {
            createTodo(todo, todoslist, 'load');
        }

    };
}

button.addEventListener('click', () => {
    const { addTodo, todos, input } = createMenu();
    loadTodos(todos);

    addTodo.addEventListener('click', () => {
        let id = localStorage.getItem('id') || 0;
        createTodo({text:input.value,id:id},todos, 'create');
        id++;
        localStorage.setItem('id', id);
    });

});

const rgbBg = document.querySelector('.rgb-background');
let mouseMoveTimer;
let animationState;

document.body.addEventListener('mousemove', () => {
    // Start or reset the timer when the mouse moves
    clearTimeout(mouseMoveTimer);

    rgbBg.style.animation = 'body-animation infinite alternate ease-in-out 1s forwards';
    
    mouseMoveTimer = setTimeout(() => {
        rgbBg.style.animationPlayState = 'paused';
    }, 0);
});
