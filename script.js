let value1 = undefined;
let operatorValue = "";
let value2 = undefined;
let tempSum = undefined;
let SUM = undefined;
const equalsButton = document.querySelector(".equals");


// Create a function that populates the display when clicking any digit.
// Should add the digit to whatever digit is already in the display. 
const fillDisplayDigit = function (number) {
    const display = document.querySelector(".screen-inner > h1");
    // Let's check for how many digits actually exists on the screen before putting anymore in there.
    // A maximum of 6 characters should be used.
    if (display.textContent.replace(/\s/g, '').length <= 5 && !(number === "")) {
        display.textContent = display.textContent + number;
    } else if (number === "") {
        display.textContent = "";
    };
};


// Function for the clear button.
const clear = function () {
    value1 = undefined;
    value2 = undefined;
    operator = "";

    const display = document.querySelector(".screen-inner > h1");
    display.textContent = "";
}


// The point here is to select all digits on the keyboard and add a eventlistener to each one.
const digits = document.querySelectorAll(".key-digit");
digits.forEach((digit) => {

    digit.addEventListener('click', () => {
        fillDisplayDigit(digit.textContent);
    });

});




const operators = document.querySelectorAll(".key-operator");
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        const display = document.querySelector(".screen-inner > h1");
        // First check if operator is equalsbutton
        if (operator.textContent.includes('=')) {
            if (tempSum) {
                value1 ? SUM = operate(operatorValue, tempSum, value1):SUM = tempSum;
            }
        } else {
            // if value1 has already been filled then proceed to value2
            if (value1 && !(value2)) {
                value2 = display.textContent.replace(/\s/g, '');
                operatorValue = operator.textContent.replace(/\s/g, '');
                console.log(value2);
            } else if (value2 && value1) {
                tempSum ?
                    tempSum += operate(operatorValue, parseInt(value1), parseInt(value2)) :
                    tempSum = operate(operatorValue, parseInt(value1), parseInt(value2));

                console.log(tempSum);

            } else {
                value1 = display.textContent.replace(/\s/g, '');
                operatorValue = operator.textContent.replace(/\s/g, '');
                console.log(value1);
            }
            console.log(operatorValue);
            fillDisplayDigit("");
        }


    })
})


// A function that should take any amount of arguments and string them together with the given operators
const operate = function (operator, number1, number2) {
    switch (operator) {
        case '+':
            return number1 + number2;
            break;
        case '-':
            return number1 - number2;
            break;
        case '*':
            return number1 * number2
            break;
        case '/':
            return number1 / number2
            break;
    }
}

// Add an eventlistener for the clear button
const clearButton = document.querySelector(".clear");
clearButton.addEventListener('click', () => {
    clear();
})

// Event listener for the equals button



