// Type Utility

// Partial<Type> - makes all properties optional
// Required<Type> - opposite of partial
// Readonly<Type> - makes all properties readonly
// Record<Keys, Type> - creates a record type
// Pick<Type, Keys> - picks specific properties from a type
// Omit<Type, Keys> - omits specific properties from a type
// Exclude<Type, ExcludedUnion> - excludes certain types from a union
// Extract<Type, Union> - extracts certain types from a union
// NonNullable<Type> - excludes null and undefined from a type
// Parameters<Type> - gets the parameters of a function type
// ConstructorParameters<Type> - gets the parameters of a constructor type
// ReturnType<Type> - gets the return type of a function type
// InstanceType<Type> - gets the instance type of a constructor function

// Partial<Type>

type Useres ={
    name:string,
    email:string
}
type User2 = Partial<Useres>

// Required<Type> - opposite of partial
type Userq ={
    name?:string,
    email:string
}
const user: Required<Userq>={
    name:"abhi",
    email:"abhi@gmail.vom"
}

// Readonly<Type> - makes every property readonly
type User22 ={
    name:string,
    email:string
}
const user2: Readonly<User22> ={
    name:"abhi",
    email:"abhi@gmail.vom"
}
//---------------
// Record<Keys, Type>

type User3 = {
  name: string;
  email: string;
};

type User33 = Record<"name"|"email"|"gender",string>

//Example
interface UserInfo {
  age: number;
}

type UserName = "john" | "levi" | "elon" | "jack";

const users: Record<UserName, UserInfo> = {
  john: { age: 34 },
  levi: { age: 34 },
  elon: { age: 34 },
  jack: { age: 34 },
};
//-------

// Pick<Type, Keys> 
interface OrderInfo {
  readonly id: string;
  user: string;
  city: string;
  state: string;
  country: string;
  status: string;
}
type ShippingInfo = Pick<OrderInfo, "city" | "state" | "country">;
//------------
// Omit<Type, Keys> opposite of Pick
interface ShippingInfoes {
  city: string;
  state: string;
  country: string;
}

type Random = Omit<ShippingInfoes,"country">

// Exclude<Type, ExcludedUnion> 
type MyUnion = string | number | boolean
type Randoesm = Exclude<MyUnion , boolean>

// Extract<Type, Union>
type MyUniones = string | number | boolean
type Random1 = Extract<MyUniones , boolean>

// NonNullable<Type>
type MyUnion1 = string | number | boolean | null | undefined
type Random3 = NonNullable<MyUnion1>
type Random2 = Exclude<MyUnion1,undefined| null>

// Parameters<Type> array of parameters of a function type
const myfunc = (a: number, b: string) => {
  console.log(a + b);
};
type Random4 = Parameters<typeof myfunc>

// ConstructorParameters<Type>
class SampleClass {
  constructor(public s: string, public t: string) {}
}
type Random5 = ConstructorParameters<typeof SampleClass>

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