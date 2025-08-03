// Type Utility
var user = {
    name: "abhi",
    email: "abhi@gmail.vom"
};
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
// const myfunc = (a: number, b: string):string => {
//   return a + b;
// };
// type FuncType = ReturnType< typeof myfunc>
// InstanceType<Type>
// class SampleClass {
//   constructor(public s: string, public t: string) {}
// }
// type Random = InstanceType<typeof SampleClass>
// const user:Random ={
//     s:"44",
//     t:"ssds"
// }
