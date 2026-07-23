import { Rectangle, Square } from "./squares.js";
import { Circle } from "./circle.js";

const r1 = new Rectangle("red", 5, 2);
const s1 = new Square("blue", 5);
const c1 = new Circle("green", 5);

console.log("rectangle area:", r1.getArea());
console.log("square area:", s1.getArea());
console.log("circle area:", c1.getArea());