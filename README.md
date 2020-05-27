<h1 align="center">
    <img alt="Starter" title="Curso Starter de JavaScript" src="imagens/logo-javascript.svg" width="200px" />
</h1>

<h2 align="center">
  Curso Starter de JavaScript
</h2>

<p align="center">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rodrigostuani/starter?color=%2304D361">

  <a href="https://www.linkedin.com/in/rodrigo-stuani/">
    <img alt="Made by RodrigoStuani" src="https://img.shields.io/badge/made%20by-RodrigoStuani-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
  
  <a>
    <img alt="Repository size" src="https://img.shields.io/github/repo-size/rodrigostuani/starter.svg">
  </a>
  
  <a href="https://github.com/rodrigostuani/starter/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/rodrigostuani/starter.svg">
  </a>   
</p>

<a href="https://station.rocketseat.com.br/courses/starter">Curso starter 0800 da Rocketseat ! Bora codar </a> 

## <a name="indice">Índice</a>

1. [Introdução JavaScript](#parte1)     
2. [Trabalhando com a DOM](#parte2)
3. [App de TODOS](#parte3)
4. [Js assíncrono](#parte4)
---


## <a name="parte1">1 - Módulo introdutório ao javascript - Exercícios do desafio </a>

:one: **exercício** :pencil:

Crie uma função que dado o objeto a seguir:

```
var endereco = {
		rua: "Rua dos pinheiros",
		numero: 1293,
		bairro: "Centro",
		cidade: "São Paulo",
		uf: "SP"
};
```

Retorne o seguinte conteúdo:

`O usuário mora em São Paulo / SP, no bairro Centro, na rua "Rua dos Pinheiros" com nº 1293.`

<a href="https://github.com/RodrigoStuani/starter/blob/master/introduction-js/desafio01/exercicio01.html">Resultado do primeiro exercício do desafio</a>  ✔️ 

---

:two: **exercício** :pencil:

Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

```
function pares(x, y) {
// código aqui
}
pares(32, 321);
```

<a href="https://github.com/RodrigoStuani/starter/blob/master/introduction-js/desafio01/exercicio02.html">Resultado do segundo exercício do desafio</a>  ✔️

---   

:three: **exercício** :pencil:

Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não.

```
function temHabilidade(skills) {
// código aqui
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false
```

*Dica: para verificar se um vetor contém um valor, utilize o método [indexOf](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf).*

<a href="https://github.com/RodrigoStuani/starter/blob/master/introduction-js/desafio01/exercicio03.html">Resultado do terceiro exercício do desafio</a>  ✔️

---

:four: **exercício** :pencil:

Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

```
function experiencia(anos) {
  // código aqui
}

var anosEstudo = 7;
experiencia(anosEstudo);

// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master

```

<a href="https://github.com/RodrigoStuani/starter/blob/master/introduction-js/desafio01/exercicio04.html">Resultado do quarto exercício do desafio</a>  ✔️

---

:five: **exercício** :pencil:

Dado o seguinte vetor de objetos:

```
var usuarios = [
{
nome: "Diego",
habilidades: ["Javascript", "ReactJS", "Redux"]
},
{
nome: "Gabriel",
habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
}
];
```

Escreva uma função que produza o seguinte resultado:

```
O Diego possui as habilidades: Javascript, ReactJS, Redux
O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir
```

*Dica: Para percorrer um vetor você deve utilizar a sintaxe [for...of](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of) e para unir valores de um array
com um separador utilize o [join](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join).* 

<a href="https://github.com/RodrigoStuani/starter/blob/master/introduction-js/desafio01/exercicio05.html">Resultado do quinto exercício do desafio</a>  ✔️

[Voltar ao Índice](#indice)

---

# :closed_book: License

Released in 2019.
This project is under the [MIT license](https://github.com/RodrigoStuani/starter/master/LICENSE).

Made with love by [Rodrigo Stuani](https://github.com/RodrigoStuani) 💙 🚀