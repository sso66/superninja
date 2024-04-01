// Guessing Game Example in Plain JavaScript

// find the elements: Find/Listen
const guessButton = document.getElementById('guess-button');
guessButton.addEventListener('click', processGuess);

const guessInput = document.getElementById('guess-input');

const feedback = document.getElementById('feedback');

const playAgainContainer = document.getElementById('play-again-container')

const playAgainButton = document.getElementById('play-again-button');
playAgainButton.addEventListener('click', startGame);

// Start the game: React
let randomNumber;
let max = 20;

startGame();

// Supporting "decision criteria " functions
function startGame() {
    displayPlayAgain(false);

    if (guessInput) {
        guessInput.value = '';
    }

    if (feedback) {
        feedback.innerHTML = '';
    }
    // backtracking 
    randomNumber = generateRandomNumber(max);
    console.log(`Random Number: ${randomNumber}`)
};

function displayPlayAgain(display) {
    if (playAgainContainer) {
        if (display) {
            playAgainContainer.style.display = 'block';
        } else {
            playAgainContainer.style.display = 'none';
        }
    }
}

function generateRandomNumber(max) {
    const result = Math.floor(Math.random() * max) + 1;
    return result;

}

function processGuess() {
    let feedbackText;

    if (guessInput) {
        const guess = guessInput.valueAsNumber;

        if (guess === randomNumber) {
            feedbackText = `${guess} is correct ... You win!`;
            displayPlayAgain(true);
        } else if (guess > randomNumber) {
            feedbackText = `${guess} is too high`;
        } else {
            feedbackText = `${guess} is too low`
        }
    }

    if (feedback) {
        feedback.innerHTML += '<br />' + feedbackText;
    }
}
