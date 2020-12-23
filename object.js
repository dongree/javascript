'use strict'
// Objects
// one of the JavaScript's data types
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {};    // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const dongree = {name: 'dongree', age: 21};
print(dongree);

// with JavaScript magic (dynamically typed language)
// can add properties later
dongree.hasJob = true;
console.log(dongree.hasJob);

// can delete properties later
delete dongree.hasJob;
console.log(dongree.hasJob);


// 2. Computed properties
// key should be always string
console.log(dongree.name);
console.log(dongree['name']);
dongree['hasJob'] = true;
console.log(dongree.hasJob);


// 3. Property value shortened
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('dongree', 21);
console.log(person4);


// 4. Constructor Function
function Person(name, age){
    // this = {};
    this.name = name;
    this.age =age;
    // return this;
}


// 5. in operator: property existence check (key in obj)
console.log('name' in dongree);
console.log('age' in dongree);
console.log('random' in dongree);


// 6. for..in vs for..of
// for (key in obj)
for (let key in dongree){
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for(let value of array){
    console.log(value);
}


// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'dongree', age: '21' };
const user2 = user;
console.log(user);

// old way
const user3 = {};
for (let key in user){
    user3[key] = user[key];
}
console.log(user3);

// recent way?
// const user4 = {};
// Object.assign(user4, user);
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red'};
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);