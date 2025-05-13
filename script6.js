/*
//Exercicio de callback
function boasVindas(nome,callback){
    callback(nome);
}

function saudar(nome){
    console.log(`Olá, ${nome}!`);
}

boasVindas("lua" ,saudar);
*/
/*
//Exercicio de forEach

const numero = [10, 20 , 30];
let acumulador=0;

numero.forEach(numeros => {
   acumulador = acumulador + numeros;
});

 console.log(acumulador);
 */
/*
//Exercicio de map()

const pontuação = [15, 20, 8, 12];

let pontosAmais = pontuação.map(ponto=> ponto + 10);

console.log(pontosAmais);
*/
/*
//Exercicio acima com forEach

const pontuação = [15, 20, 8, 12];
let pontos = [];

pontuação.forEach(ponto => pontos.push(ponto + 10));

console.log(pontos);
*/
/*
//Exercicio de filter
 const alunos = [
    {nome: "Alex", nota:4},
    {nome: "Yoshi", nota:9},
    {nome: "Mario", nota:7}
 ];

 const nota = alunos.filter(aprovados=> aprovados.nota >=7);

 console.log(nota);
*/
//Exercicio de reduce()

const notas = [7 , 8, 6, 9, 5];

const media = notas.reduce((acumulador, nota) => 
    acumulador = acumulador + nota / 5
,0);

console.log(media);

