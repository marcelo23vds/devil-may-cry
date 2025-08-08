"use strict"

const botaoTrocarImagem = document.getElementById('trocar-imagem')
const botaoAutomatico = document.getElementById('automatico')

// função para pré carregar as imagens para não acontecer o bug de tela branca
function preCarregarImagens(totalImagens) {
    let contador = 1;
    while (contador < totalImagens) {
        //instanciando para utilizar o metodo src de "Image"
        const imagem = new Image();
        imagem.src = `./img/${contador}.jpg`;
        contador++;
}
}

function trocarImagem(){
    const imagem = document.getElementById('imagem').value

    //condição para evitar da tela remover as imagens de fundo, caso não seja selecionada uma valida, vai para a primeira
    if (imagem == ''){
        imagem = 1
    } else {
        document.documentElement.style.setProperty('--bg-image', `url(./img/${imagem}.jpg)`)
    }
}

function automatico() {
    let contador = 1

    // carrega as 6 imagens antes de iniciar o loop
    preCarregarImagens(6);

    //função para intervalo de tempo para trocar as imagens, deixando alinhado com o tempo de transição no css
    setInterval(function() {

        document.documentElement.style.setProperty('--bg-image', `url(./img/${contador}.jpg)`)
        contador++

        // quando passar da última imagem voltar para a primeira
        if (contador > 6){
            contador = 1
        }

    }, 2000) // troca a cada 2 segundos
}

botaoTrocarImagem.addEventListener('click', trocarImagem)
botaoAutomatico.addEventListener('click', automatico)
