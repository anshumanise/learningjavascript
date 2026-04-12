let questionRotationInterval;
let isFetchingEnabled = true;

const questionDisplay = document.querySelector('.question');
const stopBtn = document.querySelector('.stop-button');

/**
 * Task 1: Fetch Random Question
 * Makes a GET request to the Trivia API and updates the UI.
 */
async function fetchRandomQuestion() {
    if (!isFetchingEnabled) return;

    try {
        const response = await fetch("https://the-trivia-api.com/api/questions?limit=1");
        const data = await response.json();
        
        // CRITICAL: Check again if fetching was disabled while we were waiting for the API
        if (!isFetchingEnabled) return; 

        const questionText = Array.isArray(data) ? data[0].question : data.question;
        questionDisplay.textContent = questionText;
    } catch (error) {
        // Only show error if we haven't stopped the rotation
        if (isFetchingEnabled) {
            questionDisplay.textContent = "Error loading question.";
        }
    }
}

/**
 * Task 2: Start Question Rotation
 * Triggers an immediate fetch and sets up the 5-second interval.
 */
function startQuestionRotation() {
    isFetchingEnabled = true;
    
    // Initial call to show first question immediately
    fetchRandomQuestion();
    
    // Refresh every 5 seconds (5000ms)
    questionRotationInterval = setInterval(fetchRandomQuestion, 5000);
}
function handleStopClick() {
    // 1. Clear the interval immediately
    clearInterval(questionRotationInterval);

    // 2. Disable future fetches
    isFetchingEnabled = false;

    // 3. Update the UI exactly as requested
    // Ensure this class name and selection are correct
    if (questionDisplay) {
        questionDisplay.textContent = "Questions stopped.";
    }

    // 4. Disable the button
    if (stopBtn) {
        stopBtn.disabled = true;
        stopBtn.textContent = "Stopped";
        stopBtn.classList.add('stopped');
    }
}

// Add event listener when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    startQuestionRotation();

    if (stopBtn) {
        stopBtn.addEventListener('click', handleStopClick);
    }
});
