class Car {

    constructor(brand, model, price, yearOfProduction, driveWheels) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.yearOfProduction = yearOfProduction;
        this.driveWheels = driveWheels;
    }
    displayCarFullInfo() {
        console.log("Car brand: " + this.brand + "; Model: " + this.model + "; Price: " + this.price + "; Year of production: " + this.yearOfProduction);
    }
    drive() {
        console.log("Wheels drive: " + this.driveWheels);
    }
}

function createCar() {
    let car1 = new Car("Ford", "Mondeo", 30000, 2019, "AWD");
    car1.displayCarFullInfo();
    car1.drive();
    // hgdv,jhsd
}