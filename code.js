let currentOperand="";
let previousOperand="";
let operation=undefined;
let computation="";

function clear(){
    currentOperand="";
    previousOperand="";
    operation=undefined;
    computation="";
}

function appendNumber(number){
    currentOperand += number;
}

function chooseOperation(op){
    operation=op;
    previousOperand=currentOperand+op;
    currentOperand="";
}

function compute(){
    const prev= parseInt(previousOperand);
    const current=parseInt(currentOperand); 
    switch(operation){
        case '+':
            computation=prev + current;
            break;
        case '-':
            computation=prev - current;
            break;
        case '*':
            computation=prev * current;
            break;
        case '/':
            computation=prev / current;
            break;
        default:
            return;
    }
}

appendNumber(1);
chooseOperation('+');
appendNumber(1);
compute();
asserts(computation==2, 'find a bug conversion');
  