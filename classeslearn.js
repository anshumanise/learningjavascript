// function Vehicle(name, colour, wheels) {
//     this.name = name;
//     this.colour = colour;
//     this.wheels = wheels;
    
//     this.displayInfo = function() {
//         console.log(`the ${this.name} is ${this.colour} in colour, it has ${this.wheels} wheels`);
//     };
// }
// const car = new Vehicle('car', 'red', 4);
// car.displayInfo();

// const bike = new Vehicle('bike', 'blue', 2);
// bike.displayInfo(); 

// const bus = new Vehicle('bus', 'yellow', 6);
// bus.displayInfo();

// js classes
class Vehicle {

    //properties
    name;
    colour;
    wheels;

    //constructor
    constructor(name, colour, wheels) {
        this.name = name;
        this.colour = colour;
        this.wheels = wheels;
    }
    //method

    displayInfo() {
        console.log(`the ${this.name} is ${this.colour} in colour, it has ${this.wheels} wheels`);
    }
}
const veh1 = new Vehicle('car', 'red', 4);
veh1.displayInfo();

const veh2 = new Vehicle('bike', 'blue', 2);
veh2.displayInfo();

const veh3 = new Vehicle('bus', 'yellow', 6);
veh3.displayInfo();