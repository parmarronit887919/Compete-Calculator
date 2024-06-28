const addition = (num1, num2) => {
    return num1 + num2;
}

const subtraction = (num1, num2) => {
    return num1 - num2;
}

const multiplication = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    return num1 / num2;
}

let operand1 = null;
let operand2 = null;
let operator = null;

const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");
const btn7 = document.getElementById("btn-7");
const btn8 = document.getElementById("btn-8");
const btn9 = document.getElementById("btn-9");
const divid = document.getElementById("btnDivide")
const mul = document.getElementById("btnProduct")
const plus = document.getElementById("btnPlus")
const minus = document.getElementById("btnMinus")
const equal = document.getElementById("btnEqual")
const allClear = document.getElementById("btnClear")
const display = document.getElementById("display")

allClear.addEventListener("click", () => {
    display.textContent = "0";
    operand1 = null;
    operand2 = null;
    operator = null;
});

divid.addEventListener("click", () => {
    display.textContent = "/";
    operator = "/";
});

mul.addEventListener("click", () => {
    display.textContent = "*";
    operator = "*";
});

plus.addEventListener("click", () => {
    display.textContent = "+";
    operator = "+";
});

minus.addEventListener("click", () => {
    display.textContent = "-";
    operator = "-";
});

const handleNumberClick = (number) => {
    if (operator == null) {
        operand1 = (operand1 == null) ? number : operand1 * 10 + number;
        display.textContent = operand1;
    } else {
        operand2 = (operand2 == null) ? number : operand2 * 10 + number;
        display.textContent = operand2;
    }
}

btn1.addEventListener("click", () => handleNumberClick(1));
btn2.addEventListener("click", () => handleNumberClick(2));
btn3.addEventListener("click", () => handleNumberClick(3));
btn4.addEventListener("click", () => handleNumberClick(4));
btn5.addEventListener("click", () => handleNumberClick(5));
btn6.addEventListener("click", () => handleNumberClick(6));
btn7.addEventListener("click", () => handleNumberClick(7));
btn8.addEventListener("click", () => handleNumberClick(8));
btn9.addEventListener("click", () => handleNumberClick(9));

const operate = () => {
    if (operand1 !== null && operand2 !== null && operator !== null) {
        let result;
        switch (operator) {
            case "/":
                result = divide(operand1, operand2);
                break;
            case "*":
                result = multiplication(operand1, operand2);
                break;
            case "+":
                result = addition(operand1, operand2);
                break;
            case "-":
                result = subtraction(operand1, operand2);
                break;
        }
        display.textContent = result;
        operand1 = result;
        operand2 = null;
        operator = null;
    }
}

equal.addEventListener("click", operate)

