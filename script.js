let playerScore=0;
let computerScore=0;
let computerSelection; 
let playerSelection;

let buttons = document.querySelectorAll("button");
const endDesc = document.querySelector("#end-desc");
const container = document.querySelector("#results-container");

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		const img = button.querySelector("img");
		playerSelection = img.alt;

		playRound(playerSelection, computerSelection);
		if (playerScore === 5 || computerScore === 5) {
			declareWinner() , showRefresh() , sasso.setAttribute('disabled', '') , carta.setAttribute('disabled', '') , forbici.setAttribute('disabled', '');
   }
		
	});
});


const myArray = ["Sasso", "Carta", "Forbici"];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}

function playRound(playerSelection, computerSelection) {

	computerSelection = computerPlay().toLowerCase();
	playerSelection = playerSelection.toLowerCase();
		
	if (playerSelection == computerSelection) {
			displayResults("Pari!")
	} else if (
    (computerSelection == "sasso" && playerSelection == "forbici") ||
    (computerSelection == "forbici" && playerSelection == "carta") ||
    (computerSelection == "carta" && playerSelection == "sasso")
  ) {
    computerScore = ++computerScore;
				keepCpuScore();
				if (computerScore === 1) {
					displayResults(
						`Oh no! Hai perso.
						${capitalize(computerSelection)} batte ${playerSelection}.`
					);
				} else if (computerScore === 2) {
					displayResults(
						`Argh! 
						${capitalize(computerSelection)} batte ${playerSelection}.
						Prova di nuovo!`
					);
				} else if (computerScore === 3) {
					displayResults(
						`${capitalize(computerSelection)} batte ${playerSelection}.
						Ce la puoi ancora fare!`
					);
				} else if (computerScore === 4) {
					displayResults(
						`Ahia! Match Point. 
						${capitalize(computerSelection)} batte ${playerSelection}.
						Non mollare!`
					);
				} else {
					displayResults (`${capitalize(computerSelection)} batte ${playerSelection}.`);
				}
	} else {
    playerScore = ++playerScore;
				keepPlayerScore();
				if (playerScore == 1) {
					displayResults(
					`Evvai!!! Hai vinto.
					${capitalize(playerSelection)} batte ${computerSelection}.`
				);
			} else if (playerScore === 2) {
				displayResults(
					`Mica male! 
					${capitalize(computerSelection)} batte ${playerSelection}.`
				);
			} else if (playerScore === 3) {
				displayResults(
					`${capitalize(computerSelection)} batte ${playerSelection}.
					Si vede che ti sei allenato..`
				);
			} else if (playerScore === 4) {
				displayResults(
					`Match Point!. 
					${capitalize(computerSelection)} batte ${playerSelection}.
					Ancora un punto per vincere!`
				);
			} else {
				displayResults (`${capitalize(computerSelection)} batte ${playerSelection}.`);
			}
	}
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function displayResults(str) {
  container.textContent = str;
}

function declareWinner() {
	if (playerScore > computerScore) {
	endDesc.textContent = "Hai vinto!";
	} else {
	endDesc.textContent = "Hai perso...";
 }
 }

function keepPlayerScore() {
  let playerScoreBox = document.querySelector("#player-score");
  playerScoreBox.textContent = "Il tuo punteggio: " + playerScore;
}

function keepCpuScore() {
	let computerScoreBox = document.querySelector("#computer-score");
	computerScoreBox.textContent = "Il punteggio del computer: " + computerScore;
}

function showRefresh() {
	document.getElementById("refresh-btn").className = 'show';
}
