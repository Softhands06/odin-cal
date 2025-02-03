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