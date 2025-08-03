var a = 10;
var b = 20;
var c = a + b;
console.log(c);
var x = "Hello, TypeScript!";
console.log(x);
var isActive = true;
console.log(isActive);
///----------------------------
var arr = [1, 2, 3, 4, 5];
console.log(arr);
var arr4 = [12, 13, 14, 15, 16];
console.log(arr4);
arr4.push(1, 2, 3, 4, 5);
console.log(arr4);
var tuple = [1, "TypeScript"];
console.log(tuple);
var arr2 = [1, "TypeScript", 2, "JavaScript"];
console.log(arr2);
// BigInt can represent integers with arbitrary precision
// let big: bigint = 9007199254740991n; // BigInt literal
// console.log(big);
//---------/////-----
var anyType = "This can be anything";
anyType = 42;
console.log(anyType);
// unknownType is a type-safe alternative to any
// It requires type checking before use
var unknownType = "This can be anything";
if (typeof unknownType === "string") {
    console.log(unknownType.toUpperCase());
}
//--------------------
var doubler;
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
var multiply = function (a, b) {
    return a * b;
};
console.log(multiply(5, 10)); // Output: 50
var func = function (n, m, l) {
    if (l === void 0) { l = 20; }
    return n * m * l;
};
func(25, 23);
var fun = function () {
    var m = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        m[_i] = arguments[_i];
    }
    return m;
};
fun(25, 23, 34, 6, 67, 8, 9);
var person = {
    name: "John",
    age: 30
};
console.log(person.name); // Output: John
var gigi = {
    height: 3434,
    weight: 3434,
    scolar: true,
    func: function (n, m) {
        console.log(n * m);
    },
};
var kendal = {
    height: 43434,
    scolar: true,
    weight: 545,
    func: function (n, m) {
        console.log(n * m);
    },
};
//func is a function that takes two numbers and returns void
kendal.func(20, 10);
gigi.func(20, 10);
var me;
me = "John"; // me can be a string
console.log(me);
var getData = function (product) {
    console.log(product);
};
var productOne = {
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
