axios.get('https://api.github.com/users/rodrigostuani') //pode-se utilizar GET - POST - PUT e DELETE
    .then(function(response) {
        console.log(response.data.avatar_url);
    })
    .catch(function(error) {
        console.log(error);
    });