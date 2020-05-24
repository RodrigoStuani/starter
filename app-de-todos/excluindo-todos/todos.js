let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let todos = [
    "Fazer aquele café",
    "Aprender Js",
    "Solucionar os desafios da rocketseat"
];

function renderTodos() {
    listElement.innerHTML = ''; // esvazia a lista quando renderiza.
    for (todo of todos) {
        let todoElement = document.createElement('li');
        let todoText = document.createTextNode(todo);
        let linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        let linkText = document.createTextNode('Excluir')
        
        linkElement.appendChild(linkText)        
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    let todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    
    renderTodos();    
}

buttonElement.onclick = addTodo;