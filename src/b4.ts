class Vehicle {
    public name: string;
    protected year: number;
    private company: string;
    public readonly id: string;

    constructor (name: string, year: number, company: string, id: string) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }

    public getInfo(): void {
        console.log(`ID: ${this.id}, Name: ${this.name}, Year: ${this.year}, Company: ${this.company}`);
    }

}

const vehicle1 = new Vehicle("Model S", 2020, "Tesla", "TSLA2020");
vehicle1.getInfo();
