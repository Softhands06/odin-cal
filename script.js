function sum (num1,num2){
    return num1 + num2 ;
}

function mul (num1,num2){
    return num1 * num2;
}

function divi (num1,num2){
    if (num2 === 0){
        return "error: cant divide by 0"
    }
    return num1 / num2;
}

function sub (num1,num2){
    return num1 - num2;
}

function operate (num1,num2,operator){
    if (operator === '+'){
        return sum(num1,num2);
    }else if (operator ==='-'){
        return sub(num1,num2);
    }else if (operator ==='*'){
        return mul(num1,num2);
    }else if (operator === '/'){
        return divi(num1,num2);
    }
}

function updateDisplay(value) {

    document.getElementById("display").innerText = value;

}


document.querySelectorAll('.number').forEach(function(button) {

    button.onclick = function() {

        currentInput += this.getAttribute('data-value');

        updateDisplay(currentInput);

    };

});


document.querySelectorAll('.operator').forEach(function(button) {

    button.onclick = function() {

        if (currentInput !== "") {

            if (firstOperand === null) {

                firstOperand = parseFloat(currentInput);

            } else {

                firstOperand = operate(firstOperand, parseFloat(currentInput), operator);

                updateDisplay(firstOperand);

            }

            operator = this.getAttribute('data-value');

            currentInput = ""; // Clear current input for next number

        }

    };

});


document.getElementById("calculate").onclick = function() {

    if (currentInput !== "" && firstOperand !== null) {

        var result = operate(firstOperand, parseFloat(currentInput), operator);

        updateDisplay(result);

        currentInput = ""; // Clear current input after calculation

        firstOperand = result; // Store result for further calculations

    }

};


document.querySelector('.clear').onclick = function() {

    currentInput = "";

    operator = "";

    firstOperand = null;

    updateDisplay("0"); // Reset display

};