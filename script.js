const display = document.getElementById('display');
function appendValue(input) {
    display.value += input;
}
function clearDisplay() {
    display.value = '';
}
function deleteLast() {
    display.value = display.value.toString().slice(0, -1);
}
function calculateResult() {
    try {
        // If string contains value, evaluate it
        if (display.value.trim() !== "") {
            display.value = eval(display.value);
        }
    } catch (error) {
        display.value = 'Error';
    }
}
