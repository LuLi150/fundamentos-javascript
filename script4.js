//Exemplos de function
/*
const texto ="Estou no escopo global";

function exemplo(){
    const texto = "Estou no espaço local da função";
    console.log(texto);
}

console.log(texto);
*/
//Exercicio_01
/*
let nome = prompt("Digite seu nome:");

function mostrarMensagem(n){
    alert(`Olá,${n}! Bem vindo(a)!`);
}

mostrarMensagem(nome)
*/
//Exercicio_02
/*
let numero = parseInt(prompt("Digite um numero maior ou igual 10"));

function decrementar(n){
    while(n>=0){
        console.log(n);
        n--;
    }
}
decrementar(numero);
*/
//Exemplo de function com argumento declarado
/*
function saudar(nome = "Visitante"){
    console.log(`Olá, ${nome} !`);
}
 saudar();
 */
//Exercicio_01
/*
function saudar(nome = "Visitante"){
    alert(`Olá, ${nome} !`);
}
saudar("manda-chuva");
*/
//Exemplos de expressões na função
/*
const saudar = function(){
    console.log("Olá!");
}

saudar();
*/
//Exercicio_01
/*
const verificar = function (numero){
    if(numero % 2===0){
        console.log("Seu número é par");

    } else {
        console.log("Seu número é ímpar");
    }
}
let n = parseInt(prompt("Digite um número:"))
verificar(n);
*/
//Com operador ternario:
/*
const verificar = function (numero){
    numero % 2===0 ? console.log("Seu número é par") : console.log("Seu número é ímpar");
}

let n = parseInt(prompt("Digite um número:"))
verificar(n);
*/
//Exemplo de função de seta
/*
const dobrar = numero => numero*2;

console.log(dobrar(7));
*/
//Exercicio_01

const executar = () => {
    let palavra;
    do {
        palavra = prompt("Digite uma palvra:");

        alert(`Sua palavra foi ${palavra}`);
        
    } while (palavra !== "sair");

    alert("Programa encerrado")
}

executar();