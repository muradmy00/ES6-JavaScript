//  JavaScript

 function doubleIt(num){
    return num*2;
 }
console.log(doubleIt(10));

// Variable er vitore function ke rakhlam

const variable = function Doubleit(num){
    return num*2;
}

const result = variable(50);
console.log(result);


// ES6 

const Shortcut = (num) => num*2;

console.log(Shortcut(10));



const shortcutAdd = (num1,num2) => num1+num2;

console.log(shortcutAdd(10,220));



const output = () => "Output";

console.log(output());



// Math

const doMath = (a,b) => {

    const add = a+b;
    const sub = a-b;
    const mul = a*b;
    const div = a/b;
    const result = add+sub+mul+div;
    return result;
}

console.log(doMath(5,5));
