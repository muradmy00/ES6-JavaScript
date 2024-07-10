// *****Const******(Fixed --> Not Change)

const name = "Mohiuddin ";

// name = "Miraj"; TypeError

const name2 = "Murad ";

console.log(name);
console.log(name2);


const numbers = [1,2,2,4,5,6,7,8,9];

numbers[2]=3;  //Possible
numbers.push(10);  //Possible

// numbers = ["Evabe Assign Kora","Possible na","TypeError"];

console.log(numbers);





// *****Let******(Change)

let ceoofcompany = "X";
ceoofcompany = "Y";
console.log(ceoofcompany);





// ***** for loop using var *****


// let sum =0;
// for(var i=0;i<10;i++){
//     sum+=i;
// }
// console.log(i); 


// i er value ta bahireo value dicche var er jonno






// ***** for loop using let *****


let sum1 =0;
for(let i=0;i<10;i++){
    sum1+=i;
}
console.log(i); //Error --> (i is not defined)
