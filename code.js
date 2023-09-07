function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}

let currNumber = "";

let firstNr = "";
let operatorCurr = "";
let secondNr = "";

let result = "0";

//run on second operator
// press "nr" => "operator" => "nr" => RESULTS!
function operate(firstNr, operator, secondNr){
let a = parseInt(firstNr)
let b = parseInt(secondNr)
    if(operator === "+")
    return add(a, b).toString()
}

const display = document.querySelector(".display");
display.textContent = result;

window.addEventListener("keyup", function(e){
    const key = document.querySelector(`.nr[data-key="${e.key}"]`);
    if(!key) return;

    console.log(key.textContent);
})

window.addEventListener("keyup", function(e){
   // console.log(e.key);
    const key = document.querySelector(`.operator[data-key="${e.key}"]`);
    if(!key) return;

    console.log(key.textContent);
})

let numbers = document.querySelectorAll(".nr")
let operators = document.querySelectorAll(".operator")

numbers.forEach(number => {
    number.addEventListener("click", function(e){
        
        currNumber += number.textContent;
        //console.log(number.textContent);
    })
})

//press 1nr then press opr(save 1) then ppress 2nr then press opr(save 2 and calculate)


operators.forEach(operator => {
    operator.addEventListener("click", function(e){

        if(firstNr !== ""){
            console.log(operatorCurr)

            //calculate result with operate
            result = operate(firstNr, operatorCurr, secondNr);
            console.log(result)
            firstNr = result;
            secondNr = "";
            operatorCurr = operator.textContent
        }
        else{
            firstNr = currNumber;
            currNumber = "";
            operatorCurr = operator.textContent
        }
        
    })
})


// listen for 123456789 and +-*/=

//listen for numbers and operators classes