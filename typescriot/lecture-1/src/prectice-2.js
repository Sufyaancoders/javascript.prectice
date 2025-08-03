var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//classs
// class is a blueprint for creating objects with shared properties and methods
var Player = /** @class */ (function () {
    function Player(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.id = String(Math.random() * 100);
    }
    Object.defineProperty(Player.prototype, "getMyHeight", {
        get: function () {
            return this.height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "changeHeight", {
        set: function (val) {
            this.height = val;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}());
var player1 = new Player(100, 150, 23);
console.log("Height", player1.getMyHeight);
player1.changeHeight = 500;
console.log("Height", player1.getMyHeight);
var Player2 = /** @class */ (function (_super) {
    __extends(Player2, _super);
    function Player2(height, weight, power, special) {
        var _this = _super.call(this, height, weight, power) || this;
        _this.getMyPower = function () { return _this.power; };
        _this.special = special;
        return _this;
    }
    return Player2;
}(Player));
var player2 = new Player2(100, 150, 23, true);
console.log("Weight", player2.weight);
console.log("Height", player2.getMyHeight);
console.log("Power", player2.getMyPower());
// Type Assertion
//1
var btn1 = document.getElementById("btn");
//2
var btn2 = document.getElementById("btn");
//3
var btn3 = document.getElementById("btn");
btn3.onclick;
var img = document.getElementById("myimg");
var images = document.querySelector("img");
img.src;
var form = document.getElementById("myform");
// as = Type Assertion used to tell TypeScript that we know better about the type of an element html
var myinput = document.querySelector("form > input");
form.onsubmit = function (e) {
    e.preventDefault();
    var h2 = document.createElement("h2");
    var body = document.querySelector("body");
    var value = Number(myinput.value);
    h2.textContent = String(value + 20);
    body.append(h2);
};
var myobj1 = {
    name: "Abhi",
    email: "abhI@gmail.com",
};
var key = "name";
myobj1[key];
var getName = function () {
    return myobj1["name"];
};
var getEmail = function () {
    return myobj1["email"];
};
// keyof operator returns a union of the keys of the type
// in this case, it will return "name" | "email"
var getDataes = function (key) {
    if (typeof key === "string") {
        return myobj1[key];
    }
    return "";
};
getDataes("name");
// -----------------------------
