/*
//Exemplo de callback
function verificarNumero(numero, callback){
    if(numero>=10){
         callback("Número Alto");
    } else {
        callback("Número baixo");
    }
} 
function mensagem(texto){
    console.log(texto);
}

verificarNumero(9,mensagem)
*/
//Exemplos de arrays
/*
const lista = ["Alex", "Yoshi", "Mario"];

for(let i = 0; i < lista.length; i++){
    console.log(lista[i]);
}
*/
/*
//Exercicio de arrray_01

const arr = [1,2,3,4,5,6,7,8,9,10]

function contarPares(numeros){
    let acumulador = 0;

    for(let i=0 ;i < numeros.length; i++ ){
        if(numeros[i] % 2 === 0){
          acumulador++;
        }
    }
    return acumulador;
}

console.log(contarPares( arr));
*/
//Exercicio_02

const pessoas =[
    pessoa1 = {
        nome: "Alex",
        idade: 29,
    },
    pessoa2 = {
        nome: "Yoshi",
        idade: 18,
    },
    pessoa3 = {
    nome:"Mario",
    idade: 24,
    },
]

for(let i = 0; i < pessoas.length; i++){
if(pessoas[i].idade >=21){
    console.log(` ${pessoas[i].nome} Pode se casar pois tem ${pessoas[i].idade} anos.`);
} else {
    console.log(`${pessoas[i].nome} Não pode se casar pois tem ${pessoas[i].idade} anos.`);
    
}
}