const emojiDetails = [
    { description:"Smiling face with sunglasses", emoji:"😎" },
    { description:"Smiling Face with Smiling Eyes", emoji:"😊" },
    { description:"Thumbs up", emoji:"👍" },
    { description:"Fire", emoji:"🔥" },
    { description:"Water droplet", emoji:"💧" },
    { description:"Star", emoji:"⭐" }
];

let currentEmojiIndex = 0;
let score = 0;
let seconds = 30; // start with 30 seconds
let timer;

const timeElement = document.querySelector('#timer');
const guessInput = document.querySelector('#guess-input');
const resultElement = document.querySelector('#result');
const scoreElement = document.querySelector('#score');

function displayEmoji() {
    const descriptionElement = document.querySelector('#description');
    descriptionElement.textContent = emojiDetails[currentEmojiIndex].emoji;
    timeElement.textContent = `Time: ${seconds} seconds`;
}

function checkGuess() {
    const guess = guessInput.value.trim().toLowerCase();
    const correctDescription = emojiDetails[currentEmojiIndex].description.trim().toLowerCase();

    if (guess === correctDescription) {
        resultElement.textContent = "Correct!";
        score++;
    } else {
        resultElement.textContent = "Wrong!";
    }

    scoreElement.textContent = `Score: ${score}`;
    guessInput.value = '';
    guessInput.focus();
    nextEmoji();
}

function nextEmoji() {
    currentEmojiIndex++;
    setTimeout(() => {resultElement.textContent = "";}, 1000);

    if (currentEmojiIndex === emojiDetails.length) {
        currentEmojiIndex = 0;
    }
    displayEmoji();
}

document.getElementById('guess-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkGuess();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    displayEmoji();
    startTimer();
});

function startTimer() {
    timer = setInterval(() => {
        seconds--;
        timeElement.textContent = `Time: ${seconds} seconds`;
        if (seconds <= 0) {
            endGame();
        }
    }, 1000);
}

function endGame() {
    clearInterval(timer);
    resultElement.textContent = 'Game Over!';
    guessInput.disabled = true;
    timeElement.textContent = '';
}
