/*
//Exemplo de getElementById

 const titulo = document.getElementById("titulo-principal");

 console.log(titulo);
*/
/*

//Exemplo de querySelector(moderno)

//const titulo = document.querySelectorAll(".titulo-principal");
 const titulo = document.querySelector("main h1");
console.log(titulo);
*/
/*

//Exemplo de .innerHTML

const caixa = document.querySelector("#caixa");

caixa.innerHTML = "<h1>Olá!</h1>"

*/
/*

//Exercicio de inserir um texto pelo javascript

const saudação = document.querySelector("p");

function saudar(nome = "visitante") {
    saudação.textContent = `Olá, ${nome}!`;
    
}
saudar();

*/
/*//Exemplo de style pelo javascript

const paragrafo = document.querySelector("p");

//paragrafo.style.color = "red"
paragrafo.style.backgroundColor = "red"

*/
/*
//Exercicio de .classlist

const nome = document.querySelector("p");

function verificarIdade(numero){
    if(numero>=18){
     return nome.classList.add("maior");
    }
    return nome.classList.add("menor");
}

verificarIdade(11)
*/
//Exercicio
const lista = document.querySelector("ul")

function verificarIdade(numero){
     if(numero>=18){
     return lista.insertAdjacentHTML("beforeend", "<li>depois do divisor</li>")
    }
    return lista.insertAdjacentHTML("afterbegin", "<li>antes do divisor</li>")
}
 verificarIdade(13)