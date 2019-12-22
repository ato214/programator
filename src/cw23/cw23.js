class Car {

    constructor(brand, model, price, yearOfProduction, driveWheels, crasch) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.yearOfProduction = yearOfProduction;
        this.driveWheels = driveWheels;
        this.crasch = crasch;
    }
    displayCarFullInfo() {
        console.log("Car brand: " + this.brand + "; Model: " + this.model + "; Price: " + this.price + "; Year of production: " + this.yearOfProduction + "; Crasch: " + this.crasch);
    }
    drive() {
        console.log("Wheels drive: " + this.driveWheels);
    }
}

function createCar() {
    let car1 = new Car(
        "Ford",
        "Mondeo",
        30000,
        2019,
        "AWD",
        false);
    car1.displayCarFullInfo();
    car1.drive();
    console.log("Price: " + car1.price)
    // hgdv,jhsd
}