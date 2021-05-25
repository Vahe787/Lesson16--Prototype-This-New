function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.odometr = 0;
  this.tank = 0;
  this.fill = function (...gallons) {
    this.tank = +gallons;
  };
  this.drive = function (...distance) {
    if (this.tank * this.milesPerGallon < distance) {
      this.odometr =
        "I ran out of fuel at " + this.tank * this.milesPerGallon + " km!";
    } else {
      let foulkm = this.tank * this.milesPerGallon - distance;
      this.odometr =
        distance +
        "km: " +
        "I have a " +
        foulkm / this.milesPerGallon +
        " fuel for " +
        foulkm +
        " km";
    }
  };
}

const car1 = new Car("BMW", 3);
const car2 = new Car("Volvo", 5);
car1.fill(60);
car2.fill(40);
console.log(car1);
console.log(car2);
car1.drive(123);
car2.drive(130);
