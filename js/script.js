function initMudanca() {
    const heart = document.querySelector('#heart0')
    const heart1 = document.querySelector('#heart1')
    const heart2 = document.querySelector('#heart2')
    const heart3 = document.querySelector('#heart3')

    function changeImage() {
        heart.src = 'img/heart-solid.png'
    }

    function removeImage() {
        heart.src = 'img/heater.png'
    }

    function mudarImagem() {
        heart1.src = 'img/heart-solid.png'
    }

    function removerImagem() {
        heart1.src = 'img/heater.png'
    }

    function trocarImagem() {
        heart2.src = 'img/heart-solid.png'
    }

    function retirarImagem() {
        heart2.src = 'img/heater.png'
    }

    function novaImagem() {
        heart3.src = 'img/heart-solid.png'
    }

    function imagemAntiga() {
        heart3.src = 'img/heater.png'
    }

    heart1.addEventListener('click', mudarImagem)
    heart1.addEventListener('dblclick', removerImagem)
    heart2.addEventListener('click', trocarImagem)
    heart2.addEventListener('dblclick', retirarImagem)
    heart3.addEventListener('click', novaImagem)
    heart3.addEventListener('dblclick', imagemAntiga)
    heart.addEventListener('click', changeImage)
    heart.addEventListener('dblclick', removeImage)
}

initMudanca()