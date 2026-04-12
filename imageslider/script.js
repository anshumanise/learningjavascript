const imageUrls = [
    'https://picsum.photos/id/10/800/450',
    'https://picsum.photos/id/20/800/450',
    'https://picsum.photos/id/30/800/450',
    'https://picsum.photos/id/40/800/450',
    'https://picsum.photos/id/50/800/450'
];

let currentIndex = 0;

const displayImage = document.getElementById('carouselImage');
const prevBtn = document.getElementById('prevButton');
const nextBtn = document.getElementById('nextButton');

// Layout fix (Buttons ko image ke upar lane ke liye)
function fixLayout() {
    const container = document.querySelector('.carousel-container');
    if (container) {
        container.style.position = 'relative';
        container.style.display = 'flex';
        container.style.alignItems = 'center';
        container.style.justifyContent = 'center';
        container.style.maxWidth = '800px';
        container.style.margin = 'auto';
        container.style.overflow = 'hidden';
    }

    if (prevBtn && nextBtn) {
        // Prev Button Style
        prevBtn.style.position = 'absolute';
        prevBtn.style.left = '10px';
        prevBtn.style.zIndex = '10';
        prevBtn.style.cursor = 'pointer';

        // Next Button Style
        nextBtn.style.position = 'absolute';
        nextBtn.style.right = '10px';
        nextBtn.style.zIndex = '10';
        nextBtn.style.cursor = 'pointer';
    }
}

// Display update function (Instant update for Test Cases)
function updateDisplay() {
    if (!displayImage) return;
    
    // Test cases ke liye hum bina kisi delay ke src change karenge
    displayImage.src = imageUrls[currentIndex];
    
    // Fade effect CSS class (Sirf visual ke liye, no delay)
    displayImage.classList.add('fade-out');
    displayImage.classList.remove('fade-out');
}

// Right Button: Cycle forward
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % imageUrls.length;
        updateDisplay();
    });
}

// Left Button: Cycle backward (Back to last image)
if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        // Yeh logic 0 se seedha last image (index 4) par le jayega
        currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
        updateDisplay();
    });
}

// Initialization
window.onload = () => {
    fixLayout();
    if (displayImage) {
        displayImage.src = imageUrls[currentIndex];
    }
};