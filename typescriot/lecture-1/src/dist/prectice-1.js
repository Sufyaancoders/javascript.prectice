"use strict";
var a = 10;
var b = 20;
var c = a + b;
console.log(c);
let x = "Hello, TypeScript!";
console.log(x);
let isActive = true;
console.log(isActive);
///----------------------------
let arr = [1, 2, 3, 4, 5];
console.log(arr);
let arr4 = [12, 13, 14, 15, 16];
console.log(arr4);
arr4.push(1, 2, 3, 4, 5);
console.log(arr4);
let tuple = [1, "TypeScript"];
console.log(tuple);
let arr2 = [1, "TypeScript", 2, "JavaScript"];
console.log(arr2);
// BigInt can represent integers with arbitrary precision
// let big: bigint = 9007199254740991n; // BigInt literal
// console.log(big);
//---------/////-----
let anyType = "This can be anything";
anyType = 42;
console.log(anyType);
// unknownType is a type-safe alternative to any
// It requires type checking before use
let unknownType = "This can be anything";
if (typeof unknownType === "string") {
    console.log(unknownType.toUpperCase());
}
//--------------------
let doubler;
doubler = 10; // a can be a number
console.log(doubler);
doubler = "Hello"; // a can also be a string
console.log(doubler);
// Function type
function add(a, b) {
    return a + b;
}
console.log(add(5, 10)); // Output: 15
// Arrow function
const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(5, 10)); // Output: 50
const func = (n, m, l = 20) => {
    return n * m * l;
};
func(25, 23);
const fun = (...m) => {
    return m;
};
fun(25, 23, 34, 6, 67, 8, 9);
const person = {
    name: "John",
    age: 30
};
console.log(person.name); // Output: John
const gigi = {
    height: 3434,
    weight: 3434,
    scolar: true,
    func: (n, m) => {
        console.log(n * m);
    },
};
const kendal = {
    height: 43434,
    scolar: true,
    weight: 545,
    func: (n, m) => {
        console.log(n * m);
    },
};
//func is a function that takes two numbers and returns void
kendal.func(20, 10);
gigi.func(20, 10);
let me;
me = "John"; // me can be a string
console.log(me);
const getData = (product) => {
    console.log(product);
};
const productOne = {
    name: "Macbook",
    stock: 46,
    price: 999999,
    photo: "samplephotourl",
    id: "asdnasjdasjkdas",
};
getData(productOne);
//
// Never Type
// const errorHandler = (): never => {
//   throw new Error();
// };
//  let result: never;
// try {
//   result = errorHandler();
// }
// catch (error) {
//   console.error("An error occurred:", error);
// }
