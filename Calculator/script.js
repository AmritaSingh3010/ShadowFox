// Get elements
const display = document.getElementById("display");
const clickSound = document.getElementById("click-sound");
const historyList = document.getElementById("history-list");

// Play button click sound
function playSound() {
    if (!clickSound) return;
    clickSound.currentTime = 0;
    clickSound.play();
}

// Add value to display
function appendValue(val) {
    playSound();
    display.value += val;
}

// Clear entire display
function clearDisplay() {
    playSound();
    display.value = "";
}

// Delete last character
function deleteLast() {
    playSound();
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
    playSound();
    if (display.value) {
        try {
            const expression = display.value;
            const result = eval(expression);
            display.value = result;

            // Add to history
            if (historyList) {
                const li = document.createElement("li");
                li.textContent = `${expression} = ${result}`;
                historyList.appendChild(li);
            }
        } catch (e) {
            display.value = "Error";
        }
    }
}

// Toggle light / dark mode
function toggleMode() {
    document.body.classList.toggle("light");
}
