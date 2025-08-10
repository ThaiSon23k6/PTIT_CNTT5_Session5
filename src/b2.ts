class Student {
    private name: string;
    private age: number;
    private email: string;
    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    public getName(): string {
        return this.name;
    }
    public getAge(): number {
        return this.age;
    }
    public getEmail(): string {
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