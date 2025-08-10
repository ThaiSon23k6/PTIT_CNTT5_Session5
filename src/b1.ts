class Vehicle {
    private name: string;
    private year: number;
    private company: string;
    constructor(name: string, year: number, company: string){
        this.name = name;
        this.year =year;
        this.company = company;
    }
    public getName(): string {
        return this.name;
    }
    public getYear(): number {
        return this.year;
    }
    public getCompany(): string {
        return this.company;
    }
}

class Car extends Vehicle {
    attribute: string;
    constructor(name: string, year: number, company: string, attribute: string) {
        super(name, year, company);
        this.attribute = attribute;
    }
    public getAttribute(): string {
        return this.attribute;
    }
}

class Truck extends Vehicle {
    attribute: string;
    constructor(name: string, year: number, company: string, attribute: string) {
        super(name, year, company);
        this.attribute = attribute;
    }
    public getAttribute(): string {
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

            