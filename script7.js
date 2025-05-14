//Exercicio de callbck

const usuario = {
    nome: "gustavo",
    ativo: true,

    nome:"luiza",
    ativo: false

//ignora um dos dois usando objeto
};

function processarUsuario(meuUsuario, callback){
    if(meuUsuario.ativo){
      return callback(`Usuário ${meuUsuario.nome} está ativo`);
    }
    return callback(`Usuário ${meuUsuario.nome} está inativo`);  
}

function exibirMensagem(mensagem){
    console.log(mensagem);
}

processarUsuario(usuario, exibirMensagem);