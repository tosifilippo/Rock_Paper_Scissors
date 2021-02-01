let playerScore=0
let computerScore=0
let computerSelection 
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
			declareWinner() , rock.setAttribute('disabled', '') , paper.setAttribute('disabled', '') , scissors.setAttribute('disabled', '');
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
		displayResults(
			`Oh no! Hai perso.
			${capitalize(computerSelection)} batte ${playerSelection}.`
		);
	} else {
    playerScore = ++playerScore;
    keepPlayerScore();
		displayResults(
			`Evvai!!! Hai vinto.
			${capitalize(playerSelection)} batte ${computerSelection}.`
		);
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
  playerScoreBox.textContent = playerScore;
}

function keepCpuScore() {
	let computerScoreBox = document.querySelector("#computer-score");
	computerScoreBox.textContent = computerScore;
}

