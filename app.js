"use strict"

const botaoTrocarImagem = document.getElementById('trocar-imagem')
const botaoAutomatico = document.getElementById('automatico')

// carregar as imagens antes de utilizar para evitar a tela branca piscando
function preCarregarImagens(total) {
    for (let contador = 1; contador < total; contador++) {
        const imagem = new Image();
        imagem.src = `./img/${contador}.jpg`;
    }
}

function trocarImagem(){
    let imagem = document.getElementById('imagem').value

    //condição para evitar da tela remover as imagens de fundo, caso não seja selecionada uma valida, vai para a primeira
    if (imagem == '' || imagem > 6 || imagem < 1 || isNaN(imagem)){
        //caso não seja um numero de 1 a 6, então se mantem da forma que está, sem alterar
    } else {
        document.documentElement.style.setProperty('--bg-image', `url(./img/${imagem}.jpg)`)
    }
}

function automatico() {
    let contador = 1

    preCarregarImagens(6)

    //função com intervalo de tempo para trocar as imagens
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
