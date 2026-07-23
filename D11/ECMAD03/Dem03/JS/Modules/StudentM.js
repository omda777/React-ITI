import Employee from "./EmployeeM.js";

export class Student extends Employee {
    constructor(id, name, age, dept, salary, courselist, track) {
        super(id, name, age, dept, salary);
        this.CourseList = courselist;
        this.Track = track;
    }
}