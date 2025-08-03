
//classs
// class is a blueprint for creating objects with shared properties and methods
class Player {
  public readonly id: string;
  constructor(
    private height: number,
    public weight: number,
    protected power: number
  ) {
    this.id = String(Math.random() * 100);
  }

  get getMyHeight(): number {
    return this.height;
  }

  set changeHeight(val: number) {
    this.height = val;
  }
}

const player1 = new Player(100, 150, 23);

console.log("Height", player1.getMyHeight);
player1.changeHeight = 500;
console.log("Height", player1.getMyHeight);

class Player2 extends Player {
  special: boolean;
  constructor(height: number, weight: number, power: number, special: boolean) {
    super(height, weight, power);
    this.special = special;
  }
  getMyPower = () => this.power;
}

const player2 = new Player2(100, 150, 23, true);
console.log("Weight", player2.weight);
console.log("Height", player2.getMyHeight);
console.log("Power", player2.getMyPower());

// Type Assertion
//1
const btn1 = document.getElementById("btn")!;
//2
const btn2 = document.getElementById("btn") as HTMLElement;
//3
const btn3 = <HTMLElement>document.getElementById("btn");
btn3.onclick;

const img = document.getElementById("myimg") as HTMLImageElement;

const images = document.querySelector("img")!
img.src

const form = document.getElementById("myform") as HTMLFormElement;
// as = Type Assertion used to tell TypeScript that we know better about the type of an element html
const myinput = document.querySelector("form > input") as HTMLInputElement;

form.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const h2 = document.createElement("h2");
  const body = document.querySelector("body")!;
  const value = Number(myinput.value);

  h2.textContent = String(value + 20);
  body.append(h2);
};

// Keyof & Index Signature

interface Persones {
     [key: string]: string;
  // name: string;
  // email: string;
}

const myobj1: Persones = {
  name: "Abhi",
  email: "abhI@gmail.com",
};

let key: keyof Persones = "name";

myobj1[key as keyof typeof myobj1]

const getName = (): string => {
  return myobj1["name"];
};
const getEmail = (): string => {
  return myobj1["email"];
};
// keyof operator returns a union of the keys of the type
// in this case, it will return "name" | "email"
const getDataes = (key: keyof Persones ): string => {
  if (typeof key === "string") {
    return myobj1[key];
  }
  return "";
};

getDataes("name")

// -----------------------------

