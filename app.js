"use strict"

const botaoTrocarImagem = document.getElementById('trocar-imagem')
const botaoAutomatico = document.getElementById('automatico')

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

    //função para intervalo de tempo para trocar as imagens, deixando alinhado com o tempo de transição no css
    setInterval(function() {

        document.documentElement.style.setProperty('--bg-image', `url(./img/${contador}.jpg)`)
        contador++

        // quando passar da última imagem voltar para a primeira
        if (contador > 6){
            contador = 1
        }

    }, 3000) // troca a cada 2 segundos
}

botaoTrocarImagem.addEventListener('click', trocarImagem)
botaoAutomatico.addEventListener('click', automatico)
