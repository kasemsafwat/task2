// Parent class
class Person {
  constructor(name) {
    this.name = name;
  }

  // Method inside parent class
  teachname() {
    console.log(`My name is ${this.name}`);
  }
}

// Child class (teacher) derived from parent class (Person)
class teacher extends Person {
  constructor(name) {
    // Inheritance from parent class (Person)
    super(name);
  }

  // Method inside child class
  teach(subject) {
    console.log(`My name is ${this.name} and I am teaching ${subject}`);
  }
}

//display name and
var data = new teacher("Kasem Safwat");
data.teachname();
data.teach("English");

var data2 = new teacher("omar");
data2.teachname();
data2.teach("frinch");

/**************************************************************************************************************** */

//parent class
class Vehicle {
  constructor(wheels, speed) {
    this.wheels = wheels;
    this.speed = speed;
  }
  describe() {
    console.log(
      `This vehicle has ${this.wheels} wheels and moves at ${this.speed}.`
    );
  }
}

//sub class
class Bike extends Vehicle {
  static count = 0;

  // defalut value for wheels and speed
  constructor(wheels = 2, speed = "fast enough") {
    super(wheels, speed);
  }
  // Static method to count how many times it's called
  static countTime() {
    this.count += 1;
    console.log(`number of time called method is  ${this.count} time`);
  }
}

//display number of called method
Bike.countTime();
Bike.countTime();
Bike.countTime();
Bike.countTime();
Bike.countTime();

// display default data
const data3 = new Bike();
data3.describe();

// display Variable data
const data4 = new Bike(6, "no speed");
data4.describe();
