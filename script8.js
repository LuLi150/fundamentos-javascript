/*
//Exemplo de eventos

const botao = document.querySelector("button");

botao.addEventListener('click',() => {
    alert("Clicou!")
});

*/
/*
//Exemplo de clicar duas vezes

const botao = document.querySelector("button");

botao.addEventListener('dblclick',() => {
    alert("Clicou!")
});

*/
// previne os movimentos da maquinas = evento.preventDefault();
/*

//Exercicio de eventos_01

const botao = document.querySelector("button");

botao.addEventListener('click', nome => {
    nome = prompt("qual seu nome?");
    alert(`Olá ${nome}!`);
});

*/
/*
//Exemplo de enviar formulario e limpar 
// os campos sem atualizar a pagina

const formulario = document.querySelector("form");

formulario.addEventListener('submit' , evento => {
    evento.preventDefault();
    alert("Mensagem enviada!")
    formulario.reset();

})
*/
/*
//Como mudar a cor do site com um botão

const botao = document.querySelector("button");

botao.addEventListener('click', () => {
    if (botao.style.backgroundColor === "white") {
        botao.style.backgroundColor = "blue";
       document.body.style.backgroundColor ="white"
    } else {
         botao.style.backgroundColor = "white";
        document.body.style.backgroundColor = "blue";
    }
});

*/

const botoes = document.querySelectorAll("button");

botoes.forEach(function(botao){
    botao.addEventListener('click', (evento) => {

    evento.target.id === "maior"? 
    alert("Você é de maior"): alert("Você é de menor");
        
    });
});

