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
        let pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
        let linkText = document.createTextNode(' Excluir')
        
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

function deleteTodo(pos) { // passa a posiçao do array para deletar o texto.
    todos.splice(pos, 1); // função que remove ou adiciona elemento na posição escolhida.
    renderTodos(); // renderiza os itens após deletar.
}