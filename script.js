let value1 = 0
let operatorValue = ""
let value2 = 0
const equalsButton = document.querySelector(".equals");


// Create a function that populates the display when clicking any digit.
// Should add the digit to whatever digit is already in the display. 
const fillDisplayDigit = function (number) {
    const display = document.querySelector(".screen-inner > h1");
    // Let's check for how many digits actually exists on the screen before putting anymore in there.
    // A maximum of 6 characters should be used.
    if (display.textContent.replace(/\s/g,'').length <= 5 && !(number === "")){
            display.textContent = display.textContent + number;
        }else if (number ===""){
            display.textContent = "";
        };
    };





// The point here is to select all digits on the keyboard and add a eventlistener to each one.
// 
const digits = document.querySelectorAll(".key-digit");
digits.forEach ((digit) => {

    digit.addEventListener('click', () => {
        fillDisplayDigit(digit.textContent);
    });

});

const operators = document.querySelectorAll(".key-operator");
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        fillDisplayDigit("");
    })
})


// A function that should take any amount of arguments and string them together with the given operators
const operate = function (operator, number1, number2){
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
            break;
    }
} 




//


