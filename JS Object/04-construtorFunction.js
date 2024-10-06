//object creation using constructor function --> first letter should be capital
function Employee(name,age,colony,street) {
    this.name = name;
    this.age = age;
/// this. is a keyword initialis the current data showed
    this.address = {
        street,
        colony,
    }
}
//object creation using constructor function
let emp1 = new Employee("Harshit Devda",69,"L.Lasan");
console.log(emp1.name);
console.log(emp1.address.colony);