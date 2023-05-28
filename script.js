
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
    let result = '';

    switch(operator){
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '×':
            result = multiply(num1, num2);
            break;
        case '÷':
            result = divide(num1, num2);
            break;
        default:
            console.log("Please choose a valid option.")
            break;
    }

    return result;
}

//Numbers
let operation = {
    num1: '',
    opType: '',
    num2: ''
};

//Select screen
const screen = document.getElementById("calculator-screen-data");

//Select numeric buttons 
let numbers = document.querySelectorAll(".calculator-number");

numbers.forEach(number => {

    number.addEventListener("click", function(e){
        let num = e.target.innerText;

        //If the object has an operation, the number being pressed 
        //is placed into num2.
        if(operation.opType != ''){
            //Clear screen if 
            if(operation.num2 == ''){
                screen.innerText = '';
            }

            screen.innerText += num;
            operation.num2 = screen.innerText;

            console.log(operation);
            console.log("True, it has an op type.")
        }

        //If the object does not have an operation yet, the number 
        //being pressed is placed into num1.
        else {
            //Update screen
            screen.innerText += num;

            //Update object num1
            operation.num1 = screen.innerText;
            console.log(operation);

        }

    })
})

let operators = document.querySelectorAll(".calculator-operation");

operators.forEach(ops => {

    ops.addEventListener("click", function(e){
        let op = e.target.innerText;

        //Update object opType
        operation.opType = op; 
        console.log(operation);
    })
})

let evaluate = document.getElementById("evaluate");

evaluate.addEventListener("click", function(e){
    let opType = operation.opType;
    let num1 = parseInt(operation.num1);
    let num2 = parseInt(operation.num2);
    let opResult = '';
    
    console.log("num1: " + num1);
    console.log("num2: " + num2);
    console.log("opType " + opType);

    //Call the master operate function
    opResult = operate(opType, num1, num2);

    //Update calculator screen
    screen.innerText = opResult;

})
