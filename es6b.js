// Part 1 of ES6b

// utils.js

export function add(x, y){
    return x + y;
}
export function sub(x, y){
    return x - y;
}
export function mul(x, y){
    return x * y;
}
export function div(x, y){
    return x / y;
}


// index.js
import {add,sub,mul,div} from utils;

add(1,2);


// part 2 Es6b 

class Vehicle {
 
  constructor (name, type) {
    this.name = name;
    this.type = type;
  }
 
  getName () {
    return this.name;
  }
 
  getType () {
    return this.type;
  }
 
}
class Car extends Vehicle {
 
  constructor (name) {
    super(name, 'car');
  }
 
  getName () {
    return 'It is a car: ' + super.getName();
  }
}

class bmw extends Vehicle {
 
  constructor (name) {
    super(name, 'car');
  }
 
  getName () {
    return 'It is a car: ' + super.getName();
  }
}
  class audi extends Vehicle {
 
  constructor (name) {
    super(name, 'car');
  }
 
  getName () {
    return 'It is a car: ' + super.getName();
  }
  }
let car = new Car('swift D');
console.log(car.getName()); // It is a car: swift D
console.log(car.getType()); // car
let b = new Car('bmw');
console.log(car.getName()); // It is a car: swift D
console.log(car.getType()); // car
let a = new Car('audi D');
console.log(car.getName()); // It is a car: swift D
console.log(car.getType()); // car

