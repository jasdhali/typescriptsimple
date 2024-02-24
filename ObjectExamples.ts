class Car {
    make:string;
    model:string;

    constructor(make:string,model:string){
        this.make = make;
        this.model = model;
    }
    toString():string{
        return "xyz";
    }
}

class Truck{
    constructor(public make:string,public model:string){}
}

interface Vehicle {
    make:string;
}
//optional 

const mycar : Car = new Car("toyota","camry");

const myTruck : Truck = new Truck("toyota","tundra");

console.log( mycar.toString() );