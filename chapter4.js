const prompt=require('prompt-sync')();//it is libarari of prompt
let a = prompt("Hey whats you age?");
a = parseInt(a); // Converting the string to a number
if(a<0){
console.error("This is an invalid age");
}
else if(a<9){
    console.error("You are a kid and you cannot even think of driving");
}else{
    console.log("hello");
}
console.log(" code now added in github");
