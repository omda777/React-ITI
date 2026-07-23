class Person8 {
    constructor(id, name, age) {
        if (this.constructor.name == "Person8") {
            //^throw Custom ERROR ===>interpret
            throw new Error("class is abastract class");
        }
        this.Id = id;
        this.Name = age;
        this.Age = age;
    }
}

let p10 = new Person8(1010, "ABC", 20);