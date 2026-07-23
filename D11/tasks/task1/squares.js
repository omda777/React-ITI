import Shape from "./shape.js";

export class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }

  getArea() {
    this.drawShape();
    const area = this.width * this.height;
    return area;
  }
}

export class Square extends Rectangle {
  constructor(color, height) {
    super(color, height, height);
  }
}
