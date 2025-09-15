var a:number=10
var b:number=20
var c:number=a+b
console.log(c);
 
let x: string = "Hello, TypeScript!";
console.log(x);
 
let isActive: boolean = true;
console.log(isActive);

///----------------------------
let arr: number[] = [1, 2, 3, 4, 5];
console.log(arr);

let arr4:Array<number>=[12, 13, 14, 15, 16];
console.log(arr4);
arr4.push(1, 2, 3, 4, 5);
console.log(arr4);

let tuple: [number, string] = [1, "TypeScript"];
console.log(tuple);

let arr2:(number | string)[] = [1, "TypeScript", 2, "JavaScript"];
console.log(arr2);
// BigInt can represent integers with arbitrary precision
// let big: bigint = 9007199254740991n; // BigInt literal
// console.log(big);
//---------/////-----
let anyType: any = "This can be anything";
anyType = 42;
console.log(anyType);
// unknownType is a type-safe alternative to any
// It requires type checking before use
let unknownType: unknown = "This can be anything";
if (typeof unknownType === "string") {
    console.log(unknownType.toUpperCase());
}
//--------------------
 let doubler: (number | string);
doubler = 10; // a can be a number
console.log(doubler);
doubler = "Hello"; // a can also be a string
console.log(doubler);
 
// Function type
function add(a: number , b: number): number {
    return a + b;
}   
console.log(add(5, 10)); // Output: 15

// Arrow function
const multiply = (a: number, b: number): number => {
    return a * b;
};
console.log(multiply(5, 10)); // Output: 50

// Default Parameter
type Fu = (n: number, m: number, l?: number) => number;
const funces: Fu = (n, m, l = 20) => {
  return n * m * l;
};

funces(25, 23);


// Rest Operator
type FuncTy = (...m: number[]) => number[];
const fun: FuncTy = (...m) => { //m.number[] not use instead of ...m
  return m;
};
fun(25, 23, 34, 6, 67, 8, 9);




//----------------


// Interface
interface Person1 {
    name: string;
    age: number;
}
const person: Person1 = {
    name: "John",
    age: 30
};
console.log(person.name); // Output: John

interface Obj {
  height: number;
  weight: number;
  gender?: boolean;
}
type FuncType = (n: number, m: number) => void;
interface NewObj extends Obj {
  scolar: boolean;
  func: FuncType;
}

const gigi: NewObj = {
  height: 3434,
  weight: 3434,
  scolar: true,
  func: (n, m) => {
    console.log(n * m);
  },
};

const kendal: NewObj = {
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


//------------------

// costum type
type User = string | number;
let me : User;
me = "John"; // me can be a string
console.log(me);

////-------//
//function with Obj

interface Product {
  name: string;
  stock: number;
  price: number;
  photo: string;
  readonly id: string;
}

type GetDataType = (product: Product) => void;

const getData: GetDataType = (product) => {
  console.log(product);
};

const productOne: Product = {
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
