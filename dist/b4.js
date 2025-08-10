"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    name;
    year;
    company;
    id;
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    getInfo() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Year: ${this.year}, Company: ${this.company}`);
    }
}
const vehicle1 = new Vehicle("Model S", 2020, "Tesla", "TSLA2020");
vehicle1.getInfo();
