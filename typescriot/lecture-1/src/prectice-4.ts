// Generics

// Define the function with two generic parameters
//T= type of first parameter .it is a custom datatype 
//U= type of second parameter .it is a custom datatype
const func = <T, U>(n: T, o: U): { 
    n: T; o: U 
} => {
  return { n, o };
};
 const abd=func(200,"Lol");
 console.log(abd);
// Correct usage of the function
const ans = func<number, string>(20, "Lol");
const ans2 = func<string, boolean>("20", true);
const ans3 = func<boolean, number>(true, 42);
console.log(ans, ans2, ans3);
// Define the Person type only once
type Person = {
  name: string;
  age: number;
};

// Example usage of the Person type
const person1: Person = {
  name: "Abhi",
  age: 109,
};

const personResult = func<Person, string>(person1, "Hello");
console.log(personResult);


const ans4 = func<Person, string>(person1, "Hello");
console.log(ans4);
const funct = <T, U>(n: T, o: U): { n:T, o:U } => {
  return { n, o };
};

const ans5 = funct<number,string>(2023,"Lol");
console.log(ans5);
///----------------------

type Person3 = {
  name: string;
  age: number;
};
const userses: Person3[] = [
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

const filterByPeoples = <T, U extends keyof T>(arr: T[], property: U, value: T[U]): T[] => 
    {
  return arr.filter((item) => item[property] === value);
};
const result = filterByPeoples<Person3, "age">(userses, "age", 10);
console.log(result);

// Inference example: TypeScript can infer T = Person3 and U = "age" automatically
const result2 = filterByPeoples(userses, "age", 52);
console.log(result2);

// Common mistakes (uncommenting these will produce TypeScript errors):
// filterByPeoples(userses, "age", "52"); // Error: Argument of type '"52"' is not assignable to parameter of type 'number'.
// filterByPeoples<Person3, "name">(userses, "name", 123); // Error: '123' not assignable to parameter of type 'string'.
