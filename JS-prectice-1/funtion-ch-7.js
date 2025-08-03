const prompt=require('prompt-sync')();
function first ( a, b)
{
    console.log(a+b);

} 
let a=prompt("enter a number");
//Purpose: Converts a string into an integer number
a=Number.parseInt(a);
// 
let b=prompt("enter a number")

b=Number.parseInt(b);
first (a ,b)
// normal funstion in java script showe in above
function onePlusAvg(x, y) {
    return 1 + (x + y) / 2
  }
  console.log (onePlusAvg (a,b))
  // secound method to creat funstion 
  const hello = () => {
    console.log("Hey how are you. I am toh fine yaar")
    return "hi"
  }
  const sum = (p, q) => {
    return p + q
  }
  let v = hello();
console.log(v)
console.log(hello())
console.log(sum(9, 7))
  