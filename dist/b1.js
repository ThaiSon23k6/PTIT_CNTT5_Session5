"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    name;
    year;
    company;
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    getName() {
        return this.name;
    }
    getYear() {
        return this.year;
    }
    getCompany() {
        return this.company;
    }
}
class Car extends Vehicle {
    attribute;
    constructor(name, year, company, attribute) {
        super(name, year, company);
        this.attribute = attribute;
    }
    getAttribute() {
        return this.attribute;
    }
}
class Truck extends Vehicle {
    attribute;
    constructor(name, year, company, attribute) {
        super(name, year, company);
        this.attribute = attribute;
    }
    getAttribute() {
        return this.attribute;
    }
}
let car = new Car("Lamborghini", 2025, "Lamborghini", "Speedster");
console.log(`Thông tin xe hơi
            Tên xe: ${car.getName()}
            Năm sản xuất: ${car.getYear()}
            Hãng sản xuất: ${car.getCompany()}
            Thuộc tính: ${car.getAttribute()}`);
let truck = new Truck("Ford F-150", 2023, "Ford", "Heavy Duty");
console.log(`Thông tin xe tải
            Tên xe: ${truck.getName()}
            Năm sản xuất: ${truck.getYear()}
            Hãng sản xuất: ${truck.getCompany()}
            Thuộc tính: ${truck.getAttribute()}`);
