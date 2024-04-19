// Creating a Supercar class
// Supercar is a child class of car
const Car = require("./Car.js");
// import Car from "./Car.js"; <-- ES6 module umport format

// Extend the Supercar class to inherit the properties of Car
class Supercar extends Car{
    
    // Store the values of the car in the super class
    constructor(make, model, year) {
        super(make, model, year);
        this.kilometersDriven = 0;
        this.warranty = true;
    }

    // The drive method of Supercar class uses the same method from the Car class
    drive(distance) {
        super.drive(distance);
    }

    // The getTotalKilometersDriven() method of Supercar class uses the same mthod from Car class
    getTotalKilometersDriven() {
        return super.getTotalKilometersDriven();
    }
    
    // The setWarranty() method is only available in the Supercar class
    setWarranty(status) {
        this.warranty = status;
    }

    // The getWarranty() method is only available in the Supercar class
    getWarranty() {
        return this.warranty;
    }
}

let mySupercar = new Supercar("Maserati", "MC20", 2020);

mySupercar.drive(100);
mySupercar.drive(100);

console.log("mySupercar(km driven): " + mySupercar.getTotalKilometersDriven());

mySupercar.setWarranty(false);
console.log("Warranty Status: " + mySupercar.getWarranty());