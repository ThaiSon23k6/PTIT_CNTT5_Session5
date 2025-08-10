"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    name;
    age;
    phone;
    constructor(name, age, phone) {
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Thông tin nhân viên
                    Tên: ${this.name}
                    Tuổi: ${this.age}
                    Số điện thoại: ${this.phone}`);
    }
}
let employee = new Employee("Nguyễn Văn B", 30, "0123456789");
employee.printInfo();
