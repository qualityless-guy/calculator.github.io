const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function disp_function(event) {
    if (event.key == '0' || event.key == '1' || event.key == '2' || event.key == '3' || event.key == '4' || event.key == '5' || event.key == '6' || event.key == '7' || event.key == '8 ' || event.key == '9' || event.key == '+' || event.key == '-' || event.key == '*' || event.key == '/')
        display.value += event.key;
}

function clearDisplay() {
    display.value = "";
}
function calc(event) {
    if (event.keyCode == 13) {
        display.value = eval(display.value)
    }
}
function calculate() {
    try {
        display.value = eval(display.value)
    }
    catch (error) {
        display.value = "Error";
    }

}