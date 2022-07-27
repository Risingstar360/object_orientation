class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.numWheels = 4;
    }
    honk() {
        return ('BEEP!');
    }
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year} `;
    }
}
let newCar = new Vehicle("Ford", "Focus", 2000);


class Car extends Vehicle {
    constructor(make, model, year, numWheels) {
        super(make, model, year, numWheels);
    }   
   
}
let myFirstCar = new Car("Ford", "Escort", "1989");

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }   
    revEngine() {
        return ('VROOM!!');
    }
}
let myFirstMotorcycle = new Motorcycle('Yamaha', "YZ80", "1990");

class Garage {
     constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
        }
        add(newVehicle) {
            if(!(newVehicle instanceof Vehicle)) {
                return "Only vehicles are allowed in here!";
            }
            if(this.vehicles.length >= this.capacity) {
                return "Sorry, we're full";
            }
            this.vehicles.push(newVehicle);
                return "Vehicle added!";
        }
        
};

let garage = new Garage(2);
