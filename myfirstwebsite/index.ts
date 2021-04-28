console.log("apple juice is BETTER than orange juice")

let meaningOfLife: number
meaningOfLife = 42
console.log(meaningOfLife)

let choices: boolean = false

if(meaningOfLife < 50){
  console.log("meaningOfLife is less than 50")
}else{
  console.log("meaningOfLife is more than 50")
}

function sum(num1:number, num2:number): number{
  return num1 + num2
}

let result: number = sum(2.9, 100)

console.log(result)

//--------------------------   Exsersice 1 -----------------------

function logIf(string1: string, boolean1: boolean){
  if(boolean1){
    console.log(string1)
  }
}

logIf("Basketball is the best sport", true)
logIf("Soccer is the best sport", false)

// -------------------------  Interface  ------------------------

interface HotPot {
  isItSpicy: boolean;
  spicyRating: number;
  spicyName: string;
}

let myHotPot: HotPot;
myHotPot = {
  isItSpicy: true,
  spicyRating: 9,
  spicyName: "I'm Spicy"
}

console.log(myHotPot.spicyName)

class Animal {
  name: string;
  heartRate: number;

  constructor(name: string, heartrate: number) {
    this.name = name;
    this.heartRate = this.heartRate
    
  }
  introduction(){
    console.log(this.name);
  }
}

let panda: Animal
panda = new Animal("Giggle", 120);
console.log(panda.name)

panda.introduction

let giraffe: Animal;
giraffe = new Animal("Peter", 45);
giraffe.introduction();

// --------------------  Classes  ----------------------------

