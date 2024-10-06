const Employee = {
    name : "NameofEmployee",
    age : 15,

    address : {
        street : 69,
        colony : "L_LASAN",
        district : "No Way Home",
    }
}

for(let key in Employee){
    // [] ka ander key use krte hai
    console.log(key, Employee[key]);
}

for(let key in Employee.address)
{
    console.log(key, Employee.address[key]);
}
for(let key in Object.keys(Employee)){
    // [] ka ander key use krte hai
    console.log(key, Employee[key]);
}