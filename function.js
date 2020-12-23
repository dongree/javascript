'use strict'

// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// function is object in JS

function log(message){
    console.log(message);
}
log('Hello')
log(1234)

// type 정의 불가능한게 JS의 단점 -> TS가 JS 문제점 보완

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const ellie = { name: 'eelie' };
changeName(ellie);
console.log(ellie)

// 3. Default parameters (added in ES6)
function showMessage(message, from){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!') // Hi! by undefined

function showMessage2(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage2('Hi!') // Hi! by unknown

// 4 Rest parameters (added in ES6)
function printAll(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
}
printMessage();

// 6. Return a value
function sum(a, b){
    return a + b;
}
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user){
    if(user.point > 10){
        // long upgrade logic...
    }
}

// good
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    // long upgrade logic...
}


// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is definend. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { // anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if (answer === 'love you'){
        printYes();
    } else{
        printNo();
    }
}

const printYes = function () {
    console.log('yes!');
}

const printNo = function () {
    console.log('no!');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// Arrow function
// always anonymous
const simplePrint = function () {
    console.log('simplePrint!');
};

const simplePrint2 = () => console.log('simplePrint!');
const add = (a, b) => a + b;

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();

// Fun quiz time
// function calculate(command, a, b)
// command: (add, subtract, divide, multiply, remainder)

// my answer
function calculate(command, a, b){
    if (command === 'add'){
        return a + b;
    }
    else if (command === 'subtract'){
        return a - b;
    }
    else if (command === 'divide'){
        return a / b;
    }
    else if (command === 'multiply'){
        return a * b;
    }
    else if (command === 'remainder'){
        return a % b;
    }
    else{
        return 'not has command'
    }
}

console.log(calculate('add', 5, 7))
console.log(calculate('sadd', 5, 7))

// Ellie's answer
function calculate2(command, a, b){
    switch(command){
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unkonwn command')    
    }
}
console.log(calculate2('add', 5, 7))
console.log(calculate2('sadd', 5, 7))
