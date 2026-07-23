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


export {Person};//^Named Export