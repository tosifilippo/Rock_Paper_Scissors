let playerScore=0
let computerScore=0

function computerPlay() {
	let randomValue = Math.floor(Math.random() * 3);
	if (randomValue === 0) {
			return "carta"
	} else if (randomValue === 1) {
			return "sasso"
	} else {
			return "forbici"
	}
}

function game() {

	for (let y=1; y < 6; y++) {
	const playerSelection = prompt("Sasso, carta o forbici?", " ").toLowerCase();
	const computerSelection = computerPlay();
	console.log(playRound(playerSelection, computerSelection));
	console.log(playerScore);
	console.log(computerScore);
	}

	if (playerScore > computerScore) {
			return "Hai vinto!" 
	} else if (playerScore < computerScore) {
			return "Hai perso!"
	} else {
			return "Pari!"
	}
	
	function playRound(playerSelection, computerSelection) {
		if (playerSelection == computerSelection) {
				// return "Pari! Prova ancora."
		} else if ((playerSelection == "sasso") && (computerSelection == "forbici")) {
				// return "Hai vinto! Sasso batte forbici."
				playerScore = ++playerScore
		} else if ((playerSelection == "sasso") && (computerSelection == "carta")) {
				// return "Hai perso! Carta batte sasso."
				computerScore = ++computerScore
		} else if ((playerSelection == "forbici") && (computerSelection == "carta")) {
				// return "Hai vinto! Forbici batte carta."
				playerScore = ++playerScore
		} else if ((playerSelection == "forbici") && (computerSelection == "sasso")) {
				// return "Hai perso! Sasso batte forbici."
				computerScore = ++computerScore
		} else if ((playerSelection == "carta") && (computerSelection == "sasso")) {
				// return "Hai vinto! Carta batte sasso."
				playerScore = ++playerScore
		} else if ((playerSelection == "carta") && (computerSelection == "forbici")) {
				// return "Hai perso! Forbice batte carta."
				computerScore = ++computerScore
		} else {
				// return "Giocata non valida! Non barare."
		}
	}
}