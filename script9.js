/*
 //Exemplo de json
 const usuario = {
    nome: "luah",
    idade: 29,
    hobbies: ["leitura", "progrmação"]
 }
//transforma em json
 const json = JSON.stringify(usuario);

//transforma em objeto
 const novoUsuario = JSON.parse(json)

 console.log(novoUsuario.hobbies[1]);

 */
/*
//Exemplo de new promise

const promessa = new Promise((resolvido, rejeitado) =>{
    setTimeout(() => {
        rejeitado("Dados perdidos no meio do caminho");
    },3000);
});

promessa
.then( resultado => {
    console.log(resultado);
    
})
.catch((erro) => {
    console.error(`error:${erro}`)
})

*/
/*
//Exemplo de new promise
new Promise((resolve ,  reject) => {
    resolve(10);
})
.then(numero => {
    return numero * 2;
})
.then(numero => {
    return numero + 5;
})
.then(numero => {
    console.log(numero);
    
});

*/
/*
//Exercicio de new promise com setTimeout
const nome = prompt("Qual seu nome?");
const idade = parseInt(prompt("Qual a sua idade?"));

 new Promise((response , reject) => {
  setTimeout(() => {
    idade >=21 ? response (`Olá! ${nome} você pode entrar na festa`) : reject (`Você não pode entrar na festa.`)
    }, 3000);
})
.then(response =>{
    console.log(response);

}).catch(reject => {
    console.log(reject);
    
})

*/
/*

//Exemplo de como pega um site e usar as informaçôes 
fetch("https://jsonplaceholder.typicode.com/users")
    .then(resposta => resposta.json())
    .then(dados => {
        dados.forEach(nome => {
            console.log(nome.website);
        });
    })
    .catch(erro => {
        console.log(`Erro ${erro}`);
        
    })
*/
/*
async function executarLogs() {
    console.log("Início");
    await new Promise (resolvida => {
        setTimeout(() => {
        console.log("Meio");
        resolvida();
    }, 2000))
}
    await new Promise (resolvida => {
        setTimeout(() => {
        console.log("fim");
        resolvida();
    }, 2000)
}

executarLogs();
*/

//Exercicio de new Promise

const nome = prompt("Qual seu nome?");
const idade = parseInt(prompt("Qual a sua idade?"));

function verificarIdade(nome , idade){
    return new Promise((resolvida , rejeitada) => {
    idade >=21 ? resolvida (`Olá! ${nome} você pode entrar na festa`) : rejeitada (`Você não pode entrar na festa.`)
    });
}

async function exibirMensagem() {
    try {
        const resultado = await verificarIdade(nome, idade);
        alert(resultado);
    } catch (error) {
        console.error(error);
    }
}

exibirMensagem();