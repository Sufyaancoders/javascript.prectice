// Primitive Make Copy 
//--> number, string, boolean, null, undefined, symbol
let a = 10;
let b = a;

a++;
console.log(a); //11
console.log(b); //10

// Reference Points Memory Location 
//--> object, array, function, date, regexp 
//same address point in reference at same location
//c or d are same memory address
let c = {
    value:10};
let d = c;

c.value++;
console.log(c.value) //11
console.log(d.value) //11

