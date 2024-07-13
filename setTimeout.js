function task(){
    console.log("Middle");
}

console.log("First");
setTimeout(task,5000);
console.log("Last");


setInterval(()=>{
    console.log("Infinity Print");
},3000)