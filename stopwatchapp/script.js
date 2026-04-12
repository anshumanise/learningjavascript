// 1. Create variables to keep track of the stopwatch state
let timerInterval = null; // Renamed from 'time' for clarity
let isRunning = false;    // Changed to camelCase
let elapsedTime = 0;      // Changed to camelCase to match your function usage

const display = document.getElementById('display');

// IMPORTANT: Check your HTML. If the IDs are 'start', 'stop', 'reset', 
// remove the "Btn" from these strings.
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

// 2. Implement functions

// - Start the stopwatch
function startTimer() {
    if (isRunning === false) {
        isRunning = true;
        // FIX: You named the function 'displayTimer' below, so we call that here
        timerInterval = setInterval(displayTimer, 10);
    }
}

// - Stop the stopwatch
function stopTimer() {
    clearInterval(timerInterval);
    isRunning = false;
}

// - Reset the stopwatch
function resetTimer() {
    stopTimer();
    elapsedTime = 0;
    display.textContent = "00:00:00";
}

// - Update the display
function displayTimer() {
    // FIX: Using the camelCase 'elapsedTime' defined at the top
    elapsedTime += 10;
    display.textContent = formatTime(elapsedTime);
}

// 4. Create a function to format the time (MM:SS:MsMs)
function formatTime(timeInMs) {
    let mins = Math.floor(timeInMs / 60000);
    let secs = Math.floor((timeInMs % 60000) / 1000);
    let msecs = Math.floor((timeInMs % 1000) / 10);

    let formattedMins = mins.toString().padStart(2, '0');
    let formattedSecs = secs.toString().padStart(2, '0');
    let formattedMsecs = msecs.toString().padStart(2, '0');

    return `${formattedMins}:${formattedSecs}:${formattedMsecs}`;
}

// 3. Add event listeners
startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);