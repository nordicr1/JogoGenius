const esquerdaCima = document.createElement("button");
const direitaCima = document.createElement("button");
const baixoEsquerda = document.createElement("button");
const baixoDireita = document.createElement("button");
const instrucaoJogador = document.createElement('div')
const buttonStart = document.createElement('button')
const buttonReset = document.createElement('button')


esquerdaCima.classList.add('cores', 'verde')
direitaCima.classList.add('cores', 'amarelo')
baixoEsquerda.classList.add('cores', 'vermelho')
baixoDireita.classList.add('cores', 'azul')


buttonStart.classList.add('.buttons', 'start')
buttonReset.classList.add('.buttons', 'reset')
buttonStart.innerText = 'S T A R T'
buttonReset.innerText = 'R E S E T'


instrucaoJogador.classList.add('barraDisplay', 'textoDisplay')
instrucaoJogador.innerText = ' BEM VINDO AO JOGO'


document.querySelector('body').appendChild(esquerdaCima)
document.querySelector('body').appendChild(direitaCima)
document.querySelector('body').appendChild(baixoEsquerda)
document.querySelector('body').appendChild(baixoDireita)
document.querySelector('body').appendChild(buttonStart)
document.querySelector('body').appendChild(buttonReset)
document.querySelector('body').appendChild(instrucaoJogador)