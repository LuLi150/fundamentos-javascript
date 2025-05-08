//Exercicio de for
/*
for(let i =1 ; i <=10; i++){
    console.log(`Passo ${i}`);
}
*/
//Exercicio_02
/*
for(let i =2 ; i <=20; i+=2){
    console.log(`Passo ${i}`);
}
*/
//Exercicio_03
/*
for (let i = 1; i <10; i+=2) {
   console.log(`Passo ${i}`);
}
*/
//Exercicio_04
/*
for (let i = 1; i <10; i+=2) {
   if(i % 2 !== 0){
    console.log(`Passo ${i}`);  
   }
 }
*/
//Exercicio_04
/*
let numero=Number(prompt("Digite o numero da tabuada desejada"))

for(let i=1; i<=10;i++){
  console.log(`${numero} x ${i} = ${numero*i}`);
}
*/
//Exemplo de while
/*
let senha = Number(prompt("Digite sua senha"));

while(senha !== 1234){
    alert("Acesso negado!");
    senha = Number(prompt("Senha inválida. Tente novamente."));
}
alert("Acesso permitido");
*/
//Exercicio_01
/*
let i = 10;

while (i>=1) {
    console.log(i);
    i--;
}
*/
//Exercicio_02
/*
let palavra = prompt("Digite uma palavra:");
let i=1;

while(i<=5){
    console.log(palavra);
    i++;
}
*/
//Exercicio de desafio
/*
let numero = parseInt(prompt("Digite um número acima de 4 :"));
let contador = numero;

while (contador>=0){
    if(contador % 2===0  && contador!==0){
        console.log(`Número par: ${contador}`);
    } else if (contador===0){
        console.log(`Chegou a zero ${contador}`);
    }
    else {
        console.log(`Número impa: ${contador}`);
    }
    contador--;
}
*/
//Exercicio do  while
let palavra;  

do {
   palavra=prompt("Digite uma palavra:")    
} while (palavra !=="sair")

