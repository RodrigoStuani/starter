let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let buttonElement = document.querySelector('#app button');

let todos = JSON.parse(localStorage.getItem('list_todos')) || []; //Na conversão quando não objeto definido dará erro na hora de fazer o for sem nada no array de todos. Bom verificar e passar o default.

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

renderTodos(); //Chamando a função para renderizar na tela os TODOs.

function addTodo() {
    let todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';    
    renderTodos();    
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) { // passa a posiçao do array para deletar o texto.
    todos.splice(pos, 1); // função que remove ou adiciona elemento na posição escolhida.
    renderTodos(); // renderiza os itens após deletar.
    saveToStorage(); // Agora salva direto no navegador. 
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}