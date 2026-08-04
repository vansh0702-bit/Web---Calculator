// Target display input field
const display = document.getElementById('display');

// Append numbers or operators to display
function appendValue(input) {
    display.value += input;
}

// Clear the entire display (C button)
function clearDisplay() {
    display.value = '';
}

// Delete the last character (DEL button)
function deleteLast() {
    display.value = display.value.toString().slice(0, -1);
}

// Safely evaluate the mathematical expression
function calculateResult() {
    try {
        // If string contains value, evaluate it
        if (display.value.trim() !== "") {
            display.value = eval(display.value);
        }
    } catch (error) {
        // Fallback display if user types bad syntax like "5++"
        display.value = 'Error';
    }
}
