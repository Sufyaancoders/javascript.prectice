// Generics
// Define the function with two generic parameters
//T= type of first parameter .it is a custom datatype 
//U= type of second parameter .it is a custom datatype
var func = function (n, o) {
    return { n: n, o: o };
};
var abd = func(200, "Lol");
console.log(abd);
// Correct usage of the function
var ans = func(20, "Lol");
var ans2 = func("20", true);
var ans3 = func(true, 42);
console.log(ans, ans2, ans3);
// Example usage of the Person type
var person1 = {
    name: "Abhi",
    age: 109,
};
var personResult = func(person1, "Hello");
console.log(personResult);
var ans4 = func(person1, "Hello");
console.log(ans4);
var funct = function (n, o) {
    return { n: n, o: o };
};
var ans5 = funct(2023, "Lol");
console.log(ans5);
var userses = [
    {
        name: "abhi",
        age: 109,
    },
    {
        name: "Nahar",
        age: 109,
    },
    {
        name: "Levi",
        age: 52,
    },
    {
        name: "Random",
        age: 2,
    },
];
var filterByPeoples = function (arr, property, value) {
    return arr.filter(function (item) { return item[property] === value; });
};
var result = filterByPeoples(userses, "age", 10);
console.log(result);
// Inference example: TypeScript can infer T = Person3 and U = "age" automatically
var result2 = filterByPeoples(userses, "age", 52);
console.log(result2);
// Common mistakes (uncommenting these will produce TypeScript errors):
// filterByPeoples(userses, "age", "52"); // Error: Argument of type '"52"' is not assignable to parameter of type 'number'.
// filterByPeoples<Person3, "name">(userses, "name", 123); // Error: '123' not assignable to parameter of type 'string'.
