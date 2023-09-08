function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

let currNumber = "";

let firstNr = "";
let operatorCurr = "";
let secondNr = "";

let result = "0";

//run on second operator
// press "nr" => "operator" => "nr" => RESULTS!
function operate(firstNr, operator, secondNr) {
    let a = parseInt(firstNr)
    let b = parseInt(secondNr)
    let res = 0;
    if (operator === "+")
        res = add(a, b)
    if (operator === "-")
        res = subtract(a, b)
    if (operator === "/")
        res = divide(a, b)
    if (operator === "*")
        res = multiply(a, b)

    return res.toString();
}

function operatorLogic(operator) {

    if (operator.textContent === "Del") {
        currNumber = currNumber.slice(0, currNumber.length - 1);
        if (currNumber == "")
            display.textContent = "0";
        else
            display.textContent = currNumber;
        return;
    }

    if (firstNr !== "") {
        console.log(operatorCurr)

        secondNr = currNumber;
        //calculate result with operate
        result = operate(firstNr, operatorCurr, secondNr);

        display.textContent = result;

        currNumber = "";
        firstNr = result;
        secondNr = "";
        operatorCurr = operator.textContent;
    }
    else {


        firstNr = currNumber;
        currNumber = "";
        operatorCurr = operator.textContent;

        //display.textContent = operatorCurr;
    }

    if (operator.textContent === "=") {
        firstNr = "";
        secondNr = "";
        operatorCurr = "";
        currNumber = "";
        return;
    }

    if (operator.textContent === "AC") {
        firstNr = "";
        secondNr = "";
        operatorCurr = "";
        currNumber = "";
        display.textContent = 0;
        return;
    }
}

function numberLogic(nr) {
    currNumber += nr.textContent;
    display.textContent = currNumber;
}

const display = document.querySelector(".display");
display.textContent = result;

window.addEventListener("keyup", function (e) {
    const key = document.querySelector(`.nr[data-key="${e.key}"]`);
    if (!key) return;


    numberLogic(key)

})

window.addEventListener("keyup", function (e) {
    // console.log(e.key);
    const key = document.querySelector(`.operator[data-key="${e.key}"]`);
    if (!key) return;

    console.log(key.textContent);
    operatorLogic(key)

})
window.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        operatorLogic("=")
    }
});
let numbers = document.querySelectorAll(".nr")
let operators = document.querySelectorAll(".operator")

numbers.forEach(number => {
    number.addEventListener("click", () => numberLogic(number));

})

//press 1nr then press opr(save 1) then ppress 2nr then press opr(save 2 and calculate)


operators.forEach(operator => {
    operator.addEventListener("click", () => operatorLogic(operator));

})


// listen for 123456789 and +-*/=

//listen for numbers and operators classes