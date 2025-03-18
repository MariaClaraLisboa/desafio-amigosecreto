let amigos = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function adicionarAmigo(){
    let nome = document.querySelector('input').value;
    
    if(nome.trim() == ''){
        exibirTextoNaTela('h2', 'Por favor insira um nome.');
        return;
    } else {
        amigos.push(nome);
        console.log(amigos);
    }

    exibirTextoNaTela('h2', 'Digite o nome dos seus amigos');
    nome = document.querySelector('input');
    nome.value = '';
}