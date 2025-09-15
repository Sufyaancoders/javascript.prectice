// Type Utility
// Create an object to log the structure
var exampleUser2 = {
    name: "Example"
};
console.log(exampleUser2); // { name: 'Example' }
var user = {
    name: "abhi",
    email: "abhi@gmail.vom"
};
console.log(user);
var user2 = {
    name: "abhi",
    email: "abhi@gmail.vom"
};
var users = {
    john: { age: 34 },
    levi: { age: 34 },
    elon: { age: 34 },
    jack: { age: 34 },
};
var ab = {
    city: "New York",
    state: "NY"
    // country:"USA"
};
console.log(ab);
// Parameters<Type> array of parameters of a function type
var myfunc = function (a, b) {
    console.log(a + b);
};
// ConstructorParameters<Type>
var SampleClass = /** @class */ (function () {
    function SampleClass(s, t) {
        this.s = s;
        this.t = t;
    }
    return SampleClass;
}());
// ReturnType<Type>
var myfunc3 = function (a, b) {
    return a + b;
};
var qwe = "Hello";
console.log(qwe);
// InstanceType<Type>
// class SampleClass {
//   constructor(public s: string, public t: string) {}
// }
// type Random = InstanceType<typeof SampleClass>
// const user:Random ={
//     s:"44",
//     t:"ssds"
// }
