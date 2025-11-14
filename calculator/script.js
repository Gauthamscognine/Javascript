let display = document.getElementById("display");

// Add numbers/operators to screen
function appendValue(value) {
    console.log(typeof value );
    display.value += value;
}

// Clear screen
function clearDisplay() {
    display.value = "";
}

// Calculate the expression
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
