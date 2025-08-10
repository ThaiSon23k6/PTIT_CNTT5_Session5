"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        console.log(this.width * this.height);
    }
    getPerimeter() {
        console.log(2 * (this.width + this.height));
    }
}
const rectangle = new Rectangle(5, 10);
rectangle.getArea();
rectangle.getPerimeter();
