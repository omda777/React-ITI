let Myobject = {
    id: "1010",
    Name: "ABC",
    Age: 20
};

//from User

window.addEventListener("load", () => {
    let Name = document.querySelector("#txtName");
    let Age = document.querySelector("#txtAge");
    // btn.addEventListener("click", (event) => {
    btn.addEventListener("click", function (event) {
        let newObject = {
            id: 1020,
            Name: Name.value,
            Age: Age.value
        };
        console.log(newObject);
        //^while clicked btn change his style
        // event.target.style = "background-color:lightgreen;color:darkblue;padding:5px;border:3px solid green;";
        this.style = "background-color:lightgreen;color:darkblue;padding:5px;border:3px solid green;";

    });//&end of btnclicked

});//&end of page load

//*factory

let FF = (Id, Name, Age) => {
    // return {
    //     Id: Id, Name: Name, Age: Age
    // }
    //&Name of props ==>like the name of inputs params for function

    return {
        Id, Name, Age
    }
}
console.log(FF(2020, "EMAN", 20));

//*inside Object ===>consice function==>like statment but with function keyword

let Myobject2 = {
    Id: 2020,
    Name: "ABC",
    //*consices
    printData() {
        console.log("Name:", this.Name, " Id:", this.Id);
    },
    //*Arrow
    printDataAsArrow: () => {
        console.log(Myobject2.Name);
    },
    //*Expression
    printDataAsexpression: function () {
        console.log("Name:", this.Name, " Id:", this.Id);

    }
}
Myobject2.printData();

//*Dynamic props 

let propName = "Name";
let propvalue = "Ali Alaa";

let testObject = {
    [propName]: propvalue
}
console.log(testObject);

