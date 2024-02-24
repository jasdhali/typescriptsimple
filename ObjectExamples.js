var Car = /** @class */ (function () {
    function Car(make, model) {
        this.make = make;
        this.model = model;
    }
    Car.prototype.toString = function () {
        return "xyz";
    };
    return Car;
}());
var mycar = new Car("toyota", "camry");
console.log(mycar.toString());
