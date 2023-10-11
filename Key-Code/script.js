// Function to display key and keycode
function displayKeyAndCode(event) {
    const keyDisplay = document.getElementById('key-display');
    const keycodeDisplay = document.getElementById('keycode-display');
    const keyHistory = document.getElementById('key-history');
    const keySound = document.getElementById('key-sound');

    // Display the pressed key and its keycode
    keyDisplay.textContent = event.key;
    keycodeDisplay.textContent = event.keyCode;

    // Play keypress sound
    keySound.currentTime = 0;
    keySound.play();

    // Store the key history
    const keyHistoryText = keyHistory.textContent;
    const pressedKey = event.key;
    keyHistory.textContent = keyHistoryText + (keyHistoryText ? ' + ' : '') + pressedKey;
}

// Event listener for keydown
document.addEventListener('keydown', displayKeyAndCode);
