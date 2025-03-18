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

    exibirLista();
}

function exibirLista(){
    let lista = document.getElementById('listaAmigos'); 
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) { 
        let item = document.createElement('li'); 
        item.textContent = amigos[i]; 
        lista.appendChild(item);
    }
}

function sortearAmigo(){
    let indiceAleatorio = parseInt(Math.random()*amigos.length); 
    console.log(indiceAleatorio);

    let amigo = document.getElementById('resultado');
    if(amigos.length == 0){
        amigo.innerHTML = "Não há amigos disponíveis";
    } else {
        amigo.innerHTML = `O Amigo sorteado é ${amigos[indiceAleatorio]}`;
    }
}