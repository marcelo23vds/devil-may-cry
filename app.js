"use strict"

const botaoTrocarImagem = document.getElementById('trocar-imagem')
const botaoAutomatico = document.getElementById('automatico')

function trocarImagem(){
    const imagem = document.getElementById('imagem').value
    document.documentElement.style.setProperty('--bg-image', `url(./img/${imagem}.jpg)`)
}

function automatico() {
    let contador = 1

    setInterval(function() {

        document.documentElement.style.setProperty('--bg-image', `url(./img/${contador}.jpg)`)
        contador++
        console.log(contador)

        // quando passar da última imagem voltar para a primeira
        if (contador > 7){
            contador = 1
        }

    }, 1700) // troca a cada 1.7 segundos
}

botaoTrocarImagem.addEventListener('click', trocarImagem)
botaoAutomatico.addEventListener('click', automatico)
