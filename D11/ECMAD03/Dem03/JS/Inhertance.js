//~Abstarct class Cannot Take Instance but must be inherted
class Person {
    constructor(id, name, age) {
        //~prevent Take instance from Person Class but still can inhert to derived class
        if (this.constructor.name == "Person") {
            throw new Error("Person is abstrackt class");
        }
        this.Id = id;
        this.Name = name;
        this.Age = age;
    }

    toString() {
        return `Name: ${this.Name} Age: ${this.Age}`;
    }

    TestInhertance() {
        console.log(`this caller ${this}`);
    }
    //*private member
    #Testprivate() {
        console.log(`Test private ${this}`);
    }
}

//&employee child class from Person class ====>inheratnce
//*inhertance ===>extend

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

let EmpOne = new Employee(101010, "Khaled Mohamed", 30, "HR", 12000);
console.log(EmpOne);
EmpOne.TestInhertance();
//! ERROR EmpOne.#Testprivate()//!ERROR

console.log(EmpOne.toString());
console.log(EmpOne.constructor.name);
console.log(EmpOne instanceof Employee);//*True
console.log(EmpOne instanceof Person);//*True


//&Anthor Class ===>inhert from Employee


class Student extends Employee {
    constructor(id, name, age, dept, salary, courselist, track) {
        super(id, name, age, dept, salary);
        this.CourseList = courselist;
        this.Track = track;
    }
}

let StdOne = new Student(102010, "Waleed Saber", 20, "SD", 1200, ["JS", "C#"], "PD");
console.log(StdOne);
console.log(StdOne.toString());
console.log(StdOne.Salary);
console.log(StdOne.printEmp());

//!Person is abstrackt class at new Person
//! ERROR let POne = new Person(1010, "Adam", 20);//&prevent Take instance from Person Class but still can inhert to derived class