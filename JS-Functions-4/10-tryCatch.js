// error handling using try catch
const prompt=require('prompt-sync')();
let person = {
    firstName : "Priyash",
    lastName : "Patel",

    // Getter
    get fullName()
    {
        return person.firstName + " " + person.lastName;
    },

    // Setter
    set fullName(value)
    {
        if(typeof value !== "string")
        {
            throw "You must pass a string";
        }
        let name = value.split(" ");
        this.firstName = name[1];
        this.lastName = name[0];
    }
}

console.log(person.fullName);
person.fullName = "Khushi Patel";
console.log(person.fullName);

try{
    person.fullName = true;
}
catch(e){
    // console.log(e);
   alert(e);
}