// Guessing Game Example in Plain JavaScript

// find the elements: Find/Listen
const guessButton = document.getElementById('guess-button');
guessButton.addEventListener('click', processGuess);

const guessInput = document.getElementById('guess-input');

const feedback = document.getElementById('feedback');

const playAgainButton = document.getElementById('play-again-button');
playAgainButton.addEventListener('click', startGame);

// N+1 problem & solution
// let max = 1
// let max = 2
// let max = 3;
let max = 20;

// Start the game: React
let randomNumber;
startGame();

// Supporting functions
function startGame() {
    // randomNumber = generateRandomNumber(20); // hard coding
    randomNumber = generateRandomNumber(max); // soft coding
    // backtracking 
    console.log(`Random Number: ${randomNumber}`)
};

function displayPlayAgain(display) {

}

function generateRandomNumber(max) {
    const result = Math.floor(Math.random() * max) + 1;
    return result;

}

function processGuess() {
    let feedbackText;
}