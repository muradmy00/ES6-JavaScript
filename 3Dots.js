
// JavaScript 
// Concat

const num1 = [1,2,3,4,5,6,7,8,9,10];
const num2 = [11,12,13,14,15,16,17,18,19,20];
const num3 = [21,22,23,24,25,26,27,28,29,30];

const result = num1.concat(num2).concat(num3);
// console.log(result);

const Arrays = [num1,num2,num3,9999];
console.log(Arrays);





// ES6
// 3 Dot (...)
// Spread Operator

const result2 = [...num1,...num2,...num3];
console.log(result2);






//Max Value of array 

console.log(Math.max(...result2));


a=200;
b=100;
c=50;

console.log(Math.min(a,b,c));