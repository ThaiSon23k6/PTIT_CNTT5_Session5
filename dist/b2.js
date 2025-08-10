"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    name;
    age;
    email;
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getEmail() {
        return this.email;
    }
}
let student = [];
student.push(new Student("Nguyễn Văn A", 20, "a@gmail.com"));
student.push(new Student("Trần Tịnh Tâm", 22, "tam@gmail.com"));
student.forEach((s) => {
    console.log(`Thông tin sinh viên
                Tên: ${s.getName()}
                Tuổi: ${s.getAge()}
                Email: ${s.getEmail()}`);
});
