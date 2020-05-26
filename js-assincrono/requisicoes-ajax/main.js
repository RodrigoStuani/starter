let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/rodrigostuani');
xhr.send(null);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) { // verifica se está ok.
        console.log(JSON.parse(xhr.responseText)); // retorna todos os dados da api do github com meus dados em formato JSON.
    }
}