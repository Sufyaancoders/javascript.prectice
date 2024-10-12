const prompt=require('prompt-sync')();
console.log("hellow");
const item ={
    name  : "sufyaan ahmad",
    age  : "20"
 }
 for (let i=0; i<Object.keys(item).length;i++){
 console.log("the "+Object.keys(item)[i]+"and"+item[Object.keys(item)[i]])
 }
  console.log(item)
  let age =2;
  if (age >22){
    console.log("age is above 22")
  }
  else{
    console.log("age is below 22")
  }
    let number = prompt("enter  a number");
   if (number == 20){
    console.log("20 number is print");

    }
      else {
    console.log("value is diffrent");
  }

