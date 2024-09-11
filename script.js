let equal = document.getElementById("hours");
let equalto = document.getElementById("equal"); 
let prod  = document.getElementById("dot");
let six = document.getElementById("submit");
let nine = document.getElementById("submits");
let nine2 = document.getElementById("nine");
let star = document.getElementById("dote");
let display = document.getElementById("display");

function appendToDisplay(input) {
     display.value += input
}
function calculate() {
    display.value = eval(display.value)
}

function clearDisplay() {
     display.value = ""
}

