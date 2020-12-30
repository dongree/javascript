// false: 0, -0, '', null, undefined, NaN
// true: -1, 'hello', 'false', ...
let num = 5; 

if(num){
    console.log('true!');
} else {
    console.log('false!');
}

num && console.log(num);