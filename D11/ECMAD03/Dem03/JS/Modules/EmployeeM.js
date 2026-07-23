
import { Person } from "./PersonM.js";

class Employee extends Person {
    //^private 
    #s = 0;
    constructor(id, name, age, dept, salary) {
        //& Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        super(id, name, age);//^call constructor of parent ===>params id,name,age
        this.Dept = dept;
        this.Salary = salary;
    }
    set Salary(value) {
        this.#s = value + value * 0.2;
    }
    get Salary() {
        return this.#s;
    }

    printEmp() {
        return `Emp Data ${this.Name} Age: ${this.Age} Dept: ${this.Dept}`;
    }
    //&Anthor To String for child
    toString() {
        return `${super.toString()} Dept: ${this.Dept}`;

    }
}

export default Employee;