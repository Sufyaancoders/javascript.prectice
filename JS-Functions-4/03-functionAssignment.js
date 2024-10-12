// Function Assignment
let add = function addTwoNumbers(a,b)
{
    let sum = a+b;
    return sum; 
}

let num1 = Math.round(Math.random() * 1000);
let num2 = Math.round(Math.random() * 1000);
// only call the function at bottom use assignment function
console.log(add(num1,num2));     