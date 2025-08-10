class Rectangle {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    public getArea():void {
        console.log(this.width * this.height);
        
    }

    public getPerimeter(): void {
      console.log(2 * (this.width + this.height));
    }
}

const rectangle = new Rectangle(5, 10);

rectangle.getArea();
rectangle.getPerimeter();