function add(num1,num2=10){
    
    //way--> 1 

    // if(num2 == undefined){
    //     num2 = 0;
    // }


    // way--> 2

    // num2 = num2 || 0

    return num1+num2;


}

// NaN ---> Not a Number

console.log(add(3,2));