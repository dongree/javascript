'use strict'; 

// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numberic operators
console.log(1 + 1); // add
console.log(1 - 1); // subtract
console.log(1 / 1); // devide
console.log(1 * 1); // multiply
console.log(1 % 1); // remainder
console.log(1 ** 1); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)
const postIncrement = counter++;
// postIncrement = counter
// counter = counter + 1;
console.log(`preIncrement: ${postIncrement}, counter: ${counter}`)

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 =  4 < 2;

// || (or), finds the first truthy value
// true값을 찾으면 뒤는 보지 않음
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
// false값을 찾으면 뒤는 보지 않음
console.log(`and: ${value1 && value2 && check()}`);

function check(){
for (let i = 0; i < 10; i++){
    //wasting time
    console.log('haha')
    }
    return true;
}

// ! (not)
console.log(!value1);

// 7.Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive) // true
console.log(stringFive != numberFive) // false

// === strict equality, no type conversion
console.log(stringFive === numberFive) // false
console.log(stringFive !== numberFive) // true

// object equality by reference
const dongree1 = { name: 'dongree' };
const dongree2 = { name: 'dongree' };
const dongree3 = dongree1;
console.log(dongree1 == dongree2); // false
console.log(dongree1 === dongree2); // false
console.log(dongree1 === dongree3); // true

// quiz
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null == undefined);

// 8. Conditional operators: if
// if, else if, else
const name = 'dongree';
if (name === 'dongree'){
    console.log('Welcome, dongree!');
} else if (name === 'coder'){
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// 9. Ternary(셋으로 이루어지는) operator: ?
// condition ? value1 : value2;
console.log(name === 'dongree' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed
let i = 3;
while (i > 0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition
i = 3;
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2){
    // inline variable declaration
    console.log(`inline variable for: ${i}`)
}
