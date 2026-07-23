function Myfun() {
    console.log("HI");
    var x = 0;
    x = 30;
    console.log(x);
    //inside body function ===>this ref caller
    this.Id = 1010;//*public property field id ===>Call with new object
}

//*Calling function
Myfun();//*Window Object===>this inside function body ===>window
//*new operand ==>call function
var str = new String();//*return new object instance from string (props,methods)str
var res = new Myfun();//*call function using new oeprand this inside fucntion body ref to new instance object
console.log(res);//*object new instance from myfun as constructor function creator ===>multi instnace use new

console.log(str);


var testbook = {
    id: 404040,
    Name: "C#",
    autherName: "Karter"
}
function BookGenerator(id, name, Authr) {
    this.Id = id;
    this.AuthrName = Authr;
    this.Name = name;
}

//&By dafualt constructor function ====>calling with new ===>retrun new instance object

var bk1 = new BookGenerator(101010, "JS", "JohanMark");
var bk2 = new BookGenerator(102020, "JQ", "Tony Joi");
console.log(bk1);
console.log(bk2);

console.log(bk1.constructor.name);//*BookGenerator
BookGenerator(8080, "KK", "LLL");
console.log(testbook.constructor.name);

console.log(bk1 instanceof BookGenerator);
console.log(testbook instanceof Object);

console.log(bk1.Id);//&call public filed throw object instance using dot operator
bk1.publishedDate = new Date().toDateString();
console.log(bk1);
console.log(bk2);
function Employees(id, name, age, dept) {
    //*public feilds===>Binded to this
    this.Id = id;
    this.Name = name;
    this.Age = age;
    this.Dept = dept;
    this.Tracks = [];
    //*public Methods===>Memeber prop inside class generator ==>constructor fuction ==>call throw new object
    this.printData = function () {
        console.log("EmpData:", this.Name, " :", this.Dept);
    }
    this.SelfStudyTracks = function (TrackName) {
        //*create public field RUNTIME throw public method

        this.Tracks.push(TrackName);
    }
    //*private fields====>use private approbuch ===>varaible scope iside function
    var S = 0;//*private ===>function scope
    //*dynamic business props with secure layer
    this.setSalary = function (intialSalary) {
        S = intialSalary + intialSalary * 0.2;
    }
    this.getSalary = function () {
        return S;
    }
}

var emp1 = new Employees(1020, "Ahmed Ehab", 25, "SD");
console.log(emp1);
// emp1.
emp1.setSalary(25000);
console.log(emp1.getSalary());
emp1.SelfStudyTracks("RJS");
emp1.SelfStudyTracks("JAVA");
console.log(emp1);

var emp2 = new Employees(1020, "yasserAlaa", 22, "OS");
var EmployeesArray = [emp1, emp2,
    new Employees(100, "sara mohamed", 26, "java"),
    new Employees(103, "eman taha", 23, 'Ai')
];//^Ary Of Object for Employees

console.table(EmployeesArray);
//*Sorting Employees accroding to Age
var TestEmpArray = EmployeesArray.slice();
TestEmpArray.sort(function (a, b) {
    if (a.Age < b.Age)
        return -1;
    else if (a.Age > b.Age)
        return 1;
    else return 0;
});

console.table(TestEmpArray);

//&fiter ===>emp Age greter than 25

var FilterRes = EmployeesArray.filter(function (emp) {
    return emp.Age >= 25;
});

console.log(FilterRes);

//*Return Emp id value ===>100;

var Emp = EmployeesArray.find(function (emp) {
    return emp.Id == 100;
});
console.log(Emp);

//&get Emp Data From User
window.addEventListener("load", function () {
    alert("HI");
    document.querySelector("#AddEmp").addEventListener("click", function () {
        console.log("HI");
        var Idvalue = Number(document.querySelector("#EmpId").value)
        var Namevalue = document.querySelector("#EmpName").value;
        var Agevalue = Number(document.querySelector("#empAge").value);

        var newEmp = new Employees(Idvalue, Namevalue, Agevalue, "SD");
        EmployeesArray.push(newEmp);

        console.table(EmployeesArray);
    });
});//End of page Load