"use strict";
//classs
// class is a blueprint for creating objects with shared properties and methods
class Player {
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.id = String(Math.random() * 100);
    }
    get getMyHeight() {
        return this.height;
    }
    set changeHeight(val) {
        this.height = val;
    }
}
const player1 = new Player(100, 150, 23);
console.log("Height", player1.getMyHeight);
player1.changeHeight = 500;
console.log("Height", player1.getMyHeight);
class Player2 extends Player {
    constructor(height, weight, power, special) {
        super(height, weight, power);
        this.getMyPower = () => this.power;
        this.special = special;
    }
}
const player2 = new Player2(100, 150, 23, true);
console.log("Weight", player2.weight);
console.log("Height", player2.getMyHeight);
console.log("Power", player2.getMyPower());
// Type Assertion
//1
const btn1 = document.getElementById("btn");
//2
const btn2 = document.getElementById("btn");
//3
const btn3 = document.getElementById("btn");
btn3.onclick;
const img = document.getElementById("myimg");
const images = document.querySelector("img");
img.src;
const form = document.getElementById("myform");
// as = Type Assertion used to tell TypeScript that we know better about the type of an element html
const myinput = document.querySelector("form > input");
form.onsubmit = (e) => {
    e.preventDefault();
    const h2 = document.createElement("h2");
    const body = document.querySelector("body");
    const value = Number(myinput.value);
    h2.textContent = String(value + 20);
    body.append(h2);
};
const myobj1 = {
    name: "Abhi",
    email: "abhI@gmail.com",
};
let key = "name";
myobj1[key];
const getName = () => {
    return myobj1["name"];
};
const getEmail = () => {
    return myobj1["email"];
};
// keyof operator returns a union of the keys of the type
// in this case, it will return "name" | "email"
const getDataes = (key) => {
    return myobj1[key];
};
getDataes("name");
// -----------------------------
