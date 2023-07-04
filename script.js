let value1 = 0
let operatorValue = ""
let value2 = 0


// A function that should take any amount of arguments and string them together with the given operators
const operate = function (number1, number2){
    switch (operator) {
        case '+' :
            return number1 + number2;
            break;
        case '-':
            return number1 - number2;
            break;
        case '*':
            return number1 * number2
        case '/':
            return number1 / number2
    }
} 

// Create a function that populates the display when clicking '='
const fillDisplay = function (number) {
    const display = document.querySelector(".screen-inner > h1");
    const equalsButton = document.querySelector(".equals");

    equalsButton.addEventListener('click', ()=>{
        
    })
};
//