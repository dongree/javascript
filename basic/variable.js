'use strict'

// number, string, boolean, null, undefined
// 위 데이터 타입을 제외한 모든 것은 object!
let number = 2;
let number2 = number;
console.log(number);
console.log(number2);

number2 = 3;

console.log(number);
console.log(number2);

// object
let obj = {
    name: 'dongree',
    age: 21,
};
console.log(obj.name);

let obj2 = obj;
console.log(obj2.name);

obj.name = 'james';
console.log('-----------');
console.log(obj.name);
console.log(obj2.name);

const obj3 = {
    name: 'dong',
    age: 5,
};

console.log(obj3.age);
obj3.age = 11;  // const 변수여도 object는 reference를 통해 변경 가능
console.log(obj3.age);