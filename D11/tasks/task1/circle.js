import Shape from "./shape.js";

export class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  getArea() {
    this.drawShape();
    const area = Math.PI * this.radius * this.radius;
    return area;
  }
}