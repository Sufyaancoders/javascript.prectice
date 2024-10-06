const prompt=require('prompt-sync')();
let a = prompt("enter a number");
let b = prompt( "enter");
console.log(a+"two number"+b);//pg 14
function first(){
  let name= "string";
  return name
}
function sec( a,b){
  return  console.log(a+b,"sum=");
 
  }
sec(a,b);
first();
let n = prompt("Enter a number");
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}
console.log("The sum of first " + n + " numbers is " + sum);