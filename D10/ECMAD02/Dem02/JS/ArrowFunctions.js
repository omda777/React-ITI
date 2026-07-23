//^statment function 
function Myfun() {
    console.log("HIII");
}
//^expression function
//*varaible===>value function creation
var Myfunv = function (param, parm2) {
    return param + parm2;
}

//&expression and statment ===>same while calling

Myfun();

console.log(Myfunv(20, 20));

//^constructor function
function Myfuncon(id, name) {
    //*use this ===>new instance
    this.Id = id;
    this.Name = name;
}

//&call con with new instance ===>return by dafualt object public binded props this
let Ob1 = new Myfuncon(1010, "ABC");
// console.log(Ob1);
Myfuncon();
//^factory function

function MyFunFac(id, name, age) {
    let retruneObject = {
        Id: id,
        Name: name,
        Age: age
    }

    return retruneObject;
}
let RetuOb = MyFunFac(1010, "Ayman", 26);
let RetuOb2 = MyFunFac(1020, "eman", 26);
// console.log(RetuOb);
// console.log(RetuOb2);

//*Args Object 

function MyfunArgs() {
    console.log(arguments);
}

// MyfunArgs();
// MyfunArgs(10);
// MyfunArgs(10, 20);
// MyfunArgs(10, 20, 30);


//&With Arrow Function
//*Expression function 
// let MyArrowfun=function(){
//&TO Arrow
let MyArrowfun = () => {
    console.log("Hi Arrow One");
}
// MyArrowfun();
//&Arrow WithOne Param with OneLine Console
let MyArrowfunOneParam = x => console.log("X:", x);
// MyArrowfunOneParam(200);
//&Arrow WithOne Param with One Return Line

let MyArrowfunOneParamReturned = x => { return x; }
// console.log(MyArrowfunOneParamReturned(300));
//&Arrow WithMany Params

let MyArrowfunManyParams = (x, y) => {
    let z;
    z = x + y;
    console.log("RES:", z);
}

// MyArrowfunManyParams(20, 20);

//&ARROW RETURN OBJECT ===>FACTORY

let MyArrowFact = (id, name, age, salary) => {
    let newObject = {
        Id: id,
        Name: name,
        Age: age,
        Salary: salary
    }

    return newObject;
}

let Obj1 = MyArrowFact(2020, "Ahmed Alaa", 23, 2000);
let Obj2 = MyArrowFact(3030, "Yasser Kamel", 20, 10000);
// console.log(Obj1);
// console.log(Obj2);

//&ARROW AS CONSTRUCTOR
//^Arrow Function CAN NOT BE USE AS CONSTRUCTOR FUNCTION
let MyArrowConst = (id, name, age) => {
    this.Id = id;
    this.Name = name;
    this.Age = age;
}

// let ArroOb = new MyArrowConst(10, "Alaa", 20);//!ArrowFunctions.js:107 Uncaught TypeError: MyArrowConst is not a constructor

let Test = function () {
    console.log(this);
}
let TestConst = () => {
    console.log("this", this);
}
// Test();//^window Object
// TestConst();//^window object

//*as memebr property inside object

let MyObject = {
    id: 1010,
    Name: 'Ahmed Alaa',
    //&member function as expression
    printData: function () {
        console.log("this", this);
        console.log(this.id, this.Name);
        console.log(MyObject.id);
    },
    //&member function as arrow
    printDataAsArrow: () => {
        console.log("this with arrow", this);
    },
    nestedObject: {
        id: 2020,
        Name: "Eman Mohamed",
        printDatanested: function () {
            console.log("this", this);
            console.log("NestedObject", this.id, "Name:", this.Name);
        },
        nestedArrow: () => {
            //^print this ===>outer parent layer
            console.log("this inside nested Arrow inside object of object", this);

        }
    }//^end of nested object
}

MyObject.printData();//^this ref to caller ===>MyObject

MyObject.printDataAsArrow();//^Arrow ===>outer layer parent object ===>window

MyObject.nestedObject.printDatanested();//^caller nestedobject

MyObject.nestedObject.nestedArrow();//^window object


//&Not Args inside Arrow Function

MySumAsArrow=()=>{
    console.log(arguments);
}

MySumAsArrow();//!ArrowFunctions.js:160 Uncaught ReferenceError: arguments is not defined
MySumAsArrow(10);
MySumAsArrow(10,20);
MySumAsArrow(10,20,30);