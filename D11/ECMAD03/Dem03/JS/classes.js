//^ECMA 5 using constactor function ===>calling using new 
// function Mycon(id, name, age) {
//     this.Id = id;//*public member
//     this.Name = name;
//     this.Age = age;
//     //*public action ,Methods

//     this.printData = function () {
//         console.log(`Name : ${this.Name}`);
//     }
//     //*private 
//     let s;
//     this.Salary = function (value) {
//         s = value + value * 0.2;
//     }
//     this.getSalary = function () {
//         return s;
//     }
// }

// let Con1 = new Mycon(2020, "ABC", 20);//*invoked with new keywork as constrcutor
// console.log(Con1);
// //*call function 
// Mycon();//*invoked or calling as function
// console.log(Con1.Name);
// console.log(Con1.Age);
// Con1.Salary(20000);
// console.log(Con1.getSalary());

//^Using Class syntax with ECMA6
class Person1 {
    //*first implement function ===>new calling 
    constructor(id, name, age) {
        //&as public Memebers ===>must be inside constructor
        this.Id = id;
        this.Name = name;
        this.Age = age;
    }
    //!Unexpected token. A constructor, method, accessor, or property 
    //! this.Name =
}

let Pone = new Person1(1010, "Eman", 20);
console.log(Pone);
console.log(Pone.Name);


//*Expression Class
let Person2 = class {
    constructor(id, name, age) {
        this.Id = id;
        this.Name = name;
        this.Age = age;
    }
}

let Ptwo = new Person2(1020, "ABC", 20);
console.log(Ptwo);
//!==>invoked class as function
//! ERROR  Person1(2010,"SSS",30);
//!ERROR Person2(2020, "AAA", 30);
//!Uncaught TypeError: Class constructor Person1 cannot be invoked without 'new'

//*class with private Members

class Person3 {
    //&Accessories Members ,private
    #s = 0;
    //! let S=0;//!Unexpected identifier 'S'
    //! K = 90; Not Used
    constructor(id, name, age) {
        this.Id = id;
        this.Name = name;
        this.Age = age;
    }

    //*Public Methods ===>
    setSalary = function (value) {
        //&intialized private memeber s
        this.#s = value + value * 0.2;
        //&create new public member ===>while calling setSalary ===>Not Recommended
        this.K = value;
        //! K = 300;//!ERROR K is not defined
        //*variable inside function 
        let M = 20;

    }
    getSalary = function () {
        return this.#s;
    }
}

let PThree = new Person3(3030, "Ahmed Alaa", 23);
console.log(PThree);
PThree.setSalary(30000);
console.log(PThree.getSalary());
console.log(PThree);
console.log(PThree.K);//*get public member field ===>creating inside setSalary function
//! ERROR console.log(PThree.#s);//!SyntaxError: Private field '#s' must be declared in an enclosing class



//*Accessiors with property ===>set and get ==>private ==>intialzed with property

class Person4 {
    //^private memeber 
    #s;
    constructor(id, name, age, salary) {
        this.Id = id;
        this.Name = name;
        this.Age = age;
        //*inside Constructor==>call property
        this.Salary = salary;
        //!Never EVER USE private inside Constructor
        //!NOOO   this.#s=salary;
    }
    //^intialzed with property
    //&Layer of Scurity for private memebers
    //&Must Apply this business ===>increase intial value of salary with 20%;


    //!SyntaxError: Setter must have exactly one formal parameter
    // set Salary() {
    set Salary(value) {
        this.#s = value + value * 0.2;
    }
    //^getter for prop value
    //!Getter must not have any formal parameters.
    // get Salary(d) {
    get Salary() {
        return this.#s;
    }

}

let PFour = new Person4(4040, "Kamle Mohamed", 30, 56000);
console.log(PFour);
//*calling getter salary
console.log(PFour.Salary);
//*setter
PFour.Salary = 450000;
console.log(PFour.Salary);


//*public Methods


class Person5 {

    constructor(id, name, age) {
        this.Id = id;
        this.Name = name;
        this.Age = age;
    }

    //&publick Methods 
    //^as consices
    printData() {
        return `Emp Data  Name:${this.Name} Age ${this.Age}`;
    }
    //^as function expression
    printDataFun = function () {
        return `Emp Data  Name:${this.Name} Age ${this.Age}`;
    }
    //^ as Arrow Function 
    printDataAsArrow = () => {
        return `Emp Data  Name:${this.Name} Age ${this.Age}`;
    }

    //^inhert fun from Object Parent ===>override
    toString() {
        return `Emp Data  Name:${this.Name} Age ${this.Age}`;
    }
}

let Pfive = new Person5(5050, "Laila Alaa", 30);//&Must be invoked with new
console.log(Pfive.printData());
console.log(Pfive.printDataFun());
console.log(Pfive.printDataAsArrow());

//&Any Object ===>inherted function wrapper parent object toString
console.log(Pfive.toString());


//^Method ===>private 

class Person6 {
    constructor(id, name, age) {
        this.Id = id;
        this.Name = name;
        this.Age = age;
    }

    //^private Method
    #printName() {
        return `Name ${this.Name}`;
    }
    toString() {
        return `Emp Data   Id : ${this.Id} ${this.#printName()} Age: ${this.Age}`;
    }
}


let Psix = new Person6(6060, "Yasser Ahmed", 20);
//! ERROR Psix.#printName();//!Private field '#printName' must be declared in an enclosing class
console.log(Psix.toString());


//^Static Field ====>Call with Class Name==>with static keyword


class Person7 {
    //^CounterFor Employees  Accessiors

    static NumberOfEmps = 0;

    constructor(id, name, age) {
        this.Id = id;
        this.Name = name;
        this.Age = age;
        //&Increase Static Memeber 
        Person7.NumberOfEmps++;
    }
    //^Static Member As function

    static printTotalEmpNumber() {
        return `Total#ofEmps: ${Person7.NumberOfEmps}`;
    }
}

let PSeven = new Person7(7070, "Sara Mohamed", 20);
let P8 = new Person7(8080, "Ola Waleed", 25);
let P9 = new Person7(9090, "Sara Mohamed", 21);
console.log(P9.NumberOfEmps);//*undefined
console.log(`Total Emps :: ${Person7.NumberOfEmps}`);
console.log(Person7.printTotalEmpNumber());


//&prevent ===>Take instance from class ===>Abstract class

//^get name of constcutor class ===>instance from which class
console.log(P9.constructor.name);//&return name of class

