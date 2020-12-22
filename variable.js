// 1. Use strict
// added in ES 5
// use this for Vanila Javascript.
// felxable한 단점 보완
'use strict'; 

// 2. Variable
// let (added in ES6)

let globalName = 'global name'
{
    let name = 'dongree';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name)
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// 호이스팅 : 어디에 선언했느냐와 상관없이 선언을 제일 위로 끌어올려주는 것
// has no block scope {}를 무시한다.
{
    age = 4;
    var age;
}
console.log(age);


// 3. Constants
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes
// 한 번 할당하면 값이 변하지 않는 것
const daysInWeek = 7;
const maxNumber = 5;


// 4. Variable types
const count = 17 // integer
const size = 17.1 // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special nummeric values: infinity, -infinty, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!` // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 == gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1.description}`);


// 5. Dynamic typing: dynmaically typed language
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
