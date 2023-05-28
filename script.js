
/**
* Add operation
*/
const add = function(num1, num2){
    return num1 + num2;
}

/**
* Subtract operation
*/
const subtract = function(num1, num2){
    return num1 - num2;
}

/**
* Multiply operation
*/
const multiply = function(num1, num2){
    return num1 * num2;
}

/**
* Divide operation
*/
const divide = function(num1, num2){
    return num1 / num2;
}

const operate = function(operator, num1, num2){
    switch(operator){
        case 'add':
            console.log(add(num1, num2));
            break;
        case 'substract':
            console.log(subtract(num1, num2));
            break;
        case 'multiply':
            console.log(multiply(num1, num2));
            break;
        case 'divide':
            console.log(divide(num1, num2));
            break;
        default:
            console.log("Please choose a valid option.")
            break;
    }
}