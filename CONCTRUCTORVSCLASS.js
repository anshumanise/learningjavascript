function main(){
    // class Car {
    // constructor(make, model, year, color, mileage) {
    //   this.make = make;
    //   this.model = model;
    //   this.year = year;
    //   this.color = color;
    //   this.mileage = mileage;
    //   this.getMake = function(){
    //     return this.make;
    //   }
  function Car(make, model, year, color, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.mileage = mileage;

    this.getMake = function () {
      return this.make;
    }





    this.getModel = function () {
      return this.model;
    }

    this.getYear= function() {
      return this.year;
    }

    this.getColor= function() {
      return this.color;
    }

    this.getMileage= function() {
      return this.mileage;
    }
  }

    const myCar = new Car("Toyota", "Camry", 2020, "blue", 5000);
        console.log(myCar.getMake());
        console.log(myCar.getModel());
        console.log(myCar.getYear());
        console.log(myCar.getColor());
        console.log(myCar.getMileage());
      //Do not modify the return statement;
        return Car;
      }
      main();