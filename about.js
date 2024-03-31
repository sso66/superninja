// Guessing Game Example in Plain JavaScript

// find the elements: Find/Listen
const guessButton = document.getElementById('guess-button');
guessButton.addEventListener('click', processGuess);

const guessInput = document.getElementById('guess-input');

const feedback = document.getElementById('feedback');

const playAgainButton = document.getElementById('play-again-button');
playAgainButton.addEventListener('click', startGame);

// Start the game: React
let randomNumber;
startGame();

// Supporting functions
function startGame() {

};

function displayPlayAgain(display) {

}

function generateRandomNumber(max) {
    const result = Math.floor(Math.random() * max) + 1;

}

function processGuess() {
    let feedbackText;
}