// If e else
/*
let nota = 95;

if(nota>=90){
  console.log("Aprovado com excelência");
} else if (nota>=60){
   console.log("Aporvada");
} else {
 console.log("Reprovado");
}
*/
// Outro exemplo de if e else, porém com if dentro de if:
/*
let idade = 95;
let habilitado = true;

if(idade>=18){
  if(habilitado) {
    console.log("Pode dirigir");
  } else {
    console.log("precisa tirar habilitção");
  }
} else {
 console.log("Nao pode dirigir");
}
*/
//Outra forma do exemplo acima, porém com else if:
/*
let idade = 20;
let habilitado = false;

if(idade>=18 && habilitado){
   console.log("Pode Dirigir");
} else if(idade>=18 ){
 console.log("Precisa tirar habilitação");
} else {
 console.log("Não pode dirigir");
}
*/
//Atividade_0_1:
/*
let idade=Number(prompt("Qual sua idade"));

if (idade>=18) {
    alert("Maior de idade!!");
} else {
    console.log("Menor de idade!!");
}
*/
//Atividade_0_2:
/*
let nome = prompt("Qual seu nome?");
let idade = prompt("Qual a sua idade?");

if(idade>=18){
    let habilitado = confirm("Você é habilitada/o? (Se sim, Ok)");
    
    if(habilitado){
        alert(`Olá, ${nome}! Você pode dirigir!`);
    } else {
        alert(`Olá, ${nome}! Você não pode dirigir!`);
    }
 } else {
    alert(`Olá, ${nome}! Você é menor de idade`)
}
*/
//Atividade_0_3:
/*
let temperatura = prompt("Qual a temperatura local?");

if(temperatura>35){
    console.log("Calor extremo!!");

} else if (temperatura>=25){
    console.log("Clima quente");

} else if (temperatura>=15){
    console.log("Clima agradável");
    
} else if (temperatura>=5){
    console.log("Clima frio");

} else {
    console.log("Frio intenso");
}
*/
//Exemplo de operadores ternarios:
 /*
let ternario = 18 > 10 ? console.log("Verdadeiro") : console.log("Falso");
*/
//Exercicio anterior, porém com operador ternario:
/*
let temperatura = prompt("Qual a temperatura local?");

temperatura > 35? alert("Calor extremo") :
temperatura >=25 ? alert("Clima quente") : 
temperatura >=15 ? alert("Clima Agradável") :
temperatura >=5 ? alert("Clima frio") : alert("Frio intenso");
*/
//Exercicio_0_1:
/*
let numero = prompt("Digite um numero:");

numero % 2===0 ? alert("Número par") : alert("Número impar");
*/
//Exemplo de switch
/*
let cor = "amarelo";

switch(cor){
    case "vermelho": alert("Pare!"); 
        break;
    case "amarelo" : alert("Atenção!");
        break;
    case "verde" : alert("Siga!");
        break; 
    default:
        alert("Semáforo com defeito");
}
*/
//Exercicio_01:

let opcao = parseInt(prompt(` Digite a opção do menu desejada:
     1 - Saque
     2 - Transferência
     3 - Saldo
     4 - Extrato`));

switch(opcao){
    case 1: alert("Qual o valor para saque?");
        break;
    case 2: alert("Para quem deseja transferir?");
        break;
    case 3 : alert("Seu saldo é 5.7***.***,70");
        break;
    case 4 : alert("Seu extrato é : *** ");
        break;
    default : 
        alert("Opção Invalida!");
}