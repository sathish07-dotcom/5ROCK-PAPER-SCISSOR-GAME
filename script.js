let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];
const images = {
    "rock": "rock.png",
    "paper": "paper.png",
    "scissors": "scissor.png"
};

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById("player-choice").src = images[playerChoice];
    document.getElementById("computer-choice").src = images[computerChoice];

    let result = getResult(playerChoice, computerChoice);
    
    document.getElementById("result-text").textContent = result;

    updateScore(result);
}

function getResult(player, computer) {
    if (player === computer) {
        return "It's a Draw!";
    } 
    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "You Win!";
    } else {
        return "Computer Wins!";
    }
}

function updateScore(result) {
    if (result === "You Win!") {
        playerScore++;
    } else if (result === "Computer Wins!") {
        computerScore++;
    }

    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("result-text").textContent = "Make your move!";
    document.getElementById("player-choice").src = "";
    document.getElementById("computer-choice").src = "";
}

