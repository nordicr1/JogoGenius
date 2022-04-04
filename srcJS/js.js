const cores = document.querySelectorAll('.cores');
const textoDisplay = document.querySelector('.textoDisplay');
const startButton = document.querySelector('.start');
const resetButton = document.querySelector('.reset');


startButton.onclick = function() {
	startButton.disabled = true
	comecaJogo();
}

function comecaJogo() {
	geraListaCores();
	textoDisplay.innerHTML = 'PRESTE ATENÇÃO NAS CORES';
	temporizador = setTimeout(contaJogadas, 2500);
}

resetButton.onclick = resetaJogo;



let buttonStartClick = false;
let playerComputador = [];
let contador = 0;
let temporizador;


function resetaJogo() {
	startButton.disabled = false;
	playerComputador = [];
	contador = 0;
	buttonStartClick = false;
	textoDisplay.innerHTML = "BEM VINDO AO JOGO";
	clearTimeout(temporizador);
	
}

for(let i = 0; i < cores.length; i++) {
	let valor = i; 
	cores[i].onclick = function() {
		if(!buttonStartClick) 
		return;
		
		
		if(valor === playerComputador[contador]) {
			if(contador + 1 === playerComputador.length) {
				buttonStartClick = false;
					if(playerComputador.length < 100) {
						geraListaCores();
						textoDisplay.innerHTML = "ISSO, CONTINUE ASSIM !"
						temporizador = setTimeout(contaJogadas, 2500);
						contador = 0;
					}
					else {
						textoDisplay.innerHTML = "VOCÊ VENCEU, MUITO BEM!";
						temporizador = setTimeout(resetaJogo, 2000);
					}	
			}
			else {
				contador++;
			}
		}
		else {
			textoDisplay.innerHTML = "ERROU, CLIQUE EM RESET !" + ' VOCÊ CHEGOU ATÉ O ' + 'LEVEL: ' + playerComputador.length;
			buttonStartClick = false;
			
			

		}
	}
}



function geraListaCores() {
	
	playerComputador.push(Math.floor(Math.random() * 4));
	
}

function contaJogadas() {
	if(contador > playerComputador.length - 1) {
		contador = 0;
		textoDisplay.innerHTML = 'LEVEL: ' + playerComputador.length;
		buttonStartClick = true;
		return;

	}

	let id = playerComputador[contador];

	cores[id].className += ' active';

	setTimeout(function() {
		contador++;
		cores[id].className = cores[id].className.replace(' active', '');	
		temporizador = setTimeout(contaJogadas, 300);

	}, 600);

	textoDisplay.innerHTML = "PRESTE ATENÇÃO NAS CORES";
}
