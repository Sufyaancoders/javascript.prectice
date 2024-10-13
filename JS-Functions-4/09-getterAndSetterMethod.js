let person = {
    firstName : "Priyash",
    lastName : "Patel",

    // Getter
    // getter --> access the property and getter is not function
    get fullName()
    {
        return person.firstName + " and " + person.lastName;
    },

    // Setter
    // setter --> change the property
    set fullName(value)
    {
        let name = value.split(" ");
        this.firstName = name[0];
        this.lastName = name[1];
        //Khushi and Patel --> full name
    }
}

console.log(person.fullName);
person.fullName = "Khushi Patel";
// change fullName
console.log(person.fullName);
