let playerScore = 0;
let computerScore = 0;

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const resetButton = document.getElementById('reset');

const playerScore_span = document.getElementById('userscore');
const computerScore_span = document.getElementById('compscore');

const result = document.querySelector('.result > h4');


function computerPlay(){

	let num = Math.floor(Math.random() * 3);

	if(num==0){
		return "rock"
	} else if(num==1){
		return "paper"
	} else {
		return "scissors"
	}
}

function rps(player, compSelection){

	if(player == compSelection){
		return "tie"
	} else if(player=="rock" && compSelection=="paper" || player=="scissors" && compSelection=="rock" || player=="paper" && compSelection=="scissors"){
		return "lose"
	} else if(player=="paper" && compSelection=="rock" || player=="rock" && compSelection=="scissors" || player=="scissors" && compSelection=="paper"){
		return "win"
	}
}

function game(userSelection){

	let compSelection = computerPlay();
	let x = rps(userSelection, compSelection);
	const button = document.getElementById(userSelection)


	if(x == "win"){
		playerScore++;

		playerScore_span.textContent = playerScore;
		computerScore_span.textContent = computerScore;

		if (playerScore == 5){
			result.textContent = 'Congratulations, you win!';
			return stop();
		}

		result.textContent = (userSelection.charAt(0).toUpperCase() + userSelection.substring(1,)) + " beats " + compSelection.charAt(0).toUpperCase() + compSelection.substring(1,) + ". You win this round!";

	}else if(x == "lose"){		
		computerScore++;
	
		playerScore_span.textContent = playerScore;
		computerScore_span.textContent = computerScore;

		if (computerScore == 5){
			result.textContent = 'Sorry, you lost!';
			return stop();
		}

		result.textContent = compSelection.charAt(0).toUpperCase() + compSelection.substring(1,) + " beats " + userSelection.charAt(0).toUpperCase() + userSelection.substring(1,) + ". You lose this round.";

	}else{
		result.textContent = "It's a tie."
	}
}

function reset(){
	const reset = document.location.href="";
}

function stop(){
	rockButton.addEventListener('click', function(){
		reset()
	})

	paperButton.addEventListener('click', function(){
		reset()
	})

	scissorsButton.addEventListener('click', function(){
		reset()
	})
}

// BUTTONS

rockButton.addEventListener('click', function(){
	game('rock')
})

paperButton.addEventListener('click', function(){
	game('paper')
})

scissorsButton.addEventListener('click', function(){
	game('scissors')
})

resetButton.addEventListener('click', function(){
	reset()
})