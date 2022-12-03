
const choices = ['rock', 'paper', 'scissors']; //declared variable for rock, paper, and scissors

computerPlay = () => {
    return choices[Math.floor(Math.random()* choices.length)]; //function for computer AI to choose between those choices
};

let playerTurn, computerTurn;

playRound = (playerSelection, computerSelection) => {

    console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}`);

    if (choices.indexOf(playerSelection) == -1) {
        playerTurn = false;
        computerTurn = false;
        return "Invalid input! You have to choose Rock, Paper or Scissors!";
    };//if statement in case player keeps entering something other than choices
    
    if (playerSelection == "rock" && computerSelection == "scissors") {

        playerTurn = true;
        computerTurn = false;
        return "You win! Rock beats Scissors";

    } else if (playerSelection == "scissors" && computerSelection == "rock") {

        playerTurn = false;
        computerTurn = true;
        return "You lose! Rock beats Scissors";

    } else if (playerSelection == "scissors" && computerSelection == "paper") {

        playerTurn = true;
        computerTurn = false;
        return "You win! Scissors beats Paper";

    } else if (playerSelection == "paper" && computerSelection == "scissors") {

        playerTurn = false;
        computerTurn = true;
        return "You lose! Scissors beats Paper";

    } else if (playerSelection == "paper" && computerSelection == "rock") {

        playerTurn = true;
        computerTurn = false;
        return "You win! Paper beats Rock";

    } else if (playerSelection == "rock" && computerSelection == "paper") {

        playerTurn = false;
        computerTurn = true;
        return "You lose! Paper beats Rock";

    } else { //what happens when its a tie playerSelection === computerSelection

        playerTurn = false;
        computerTurn = false;
        return `Tie! You both chose ${playerSelection}!`;

    }
    
};

let playerPoints = 0, computerPoints = 0;

game = () => {
    
    for (let i = 0; i < 5; i++) { //function to iterate through the 5 rounds
        
        console.log(playRound(prompt("Rock, paper or scissors?").toLowerCase(), computerPlay())); 
        
        if (playerTurn) {
            
            playerPoints++;
            
        } else if (computerTurn) {
            
            computerPoints++;
        }
        //if they're both false it's a draw, neither gets a point 
    }
    console.log(`You won ${playerPoints} rounds, whereas the computer won ${computerPoints}. There were ${5 - playerPoints - computerPoints} ties.`)
    
    if (playerPoints > computerPoints) {
        
        console.log("You won the game! Refresh the page for a rematch.");
        
    } else if (playerPoints === computerPoints) {
        
        console.log("Good game, match was a tie. Refresh the page for a rematch.");
        
    } else {
        
        console.log("You lost the game! Refresh the page for a rematch.")
    }
};

game();
