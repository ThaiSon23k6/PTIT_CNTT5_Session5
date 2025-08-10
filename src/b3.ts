class Employee {
    constructor ( 
        public name: string,
        protected age: number,
        private phone: string,
    ){}

    public printInfo(): void {
        console.log(`Thông tin nhân viên
                    Tên: ${this.name}
                    Tuổi: ${this.age}
                    Số điện thoại: ${this.phone}`);
    }

}

let employee = new Employee("Nguyễn Văn B", 30, "0123456789");
employee.printInfo();