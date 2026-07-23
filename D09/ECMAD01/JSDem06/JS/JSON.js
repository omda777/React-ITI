// //^OOP ====>JS

// //*HOw to create Custome Object js 
// //*Container of props ,action ,methods
// //*
// // var Myobjec={};//*create object literal ===>Ref Data type ===>Heap
// // //*each property inside object (name and value)
// // var Mobj=new Object();
// // var Myobj3=Object();

// // console.log(typeof Myobjec);
// // console.log(typeof Mobj);
// // console.log(typeof Myobj3);
// // console.log(Mobj.length);//*undefined
// var Mystr = "";
// console.log(Mystr.length);//*o
// var Myarr = ["ABC", "XYZ"];
// console.log(Myarr.length);
// //*get value of property ===>dot operator  or square []operator
// console.log(Myarr[0]);

// //&HOw To defined Object props(property,methods,actions)
// var StudentData = {
//     FName: "Ahmed",
//     LName: "Mohamed",
//     "TrackName": "REACTJS",//*String
//     // "Course List":
//     courseList: ["JS", "REACT", "HTML"],//*Array
//     JoinedDate: new Date('05 07 2026').toDateString(),//*Date
//     TrackRunning: true,//*Boolean,
//     printStudentData: function () {
//         console.log("StdName:", StudentData.Name, " Track:", StudentData.TrackName);
//     },
//     //*
//     AddnewCourseForTrack: function (CourseName) {
//         StudentData.courseList.push(CourseName);
//     }

// }

// //*Retrive props values for object use in operator 
// console.log("Name" in StudentData);
// for (var i in StudentData) {
//     console.log("propName:", i);//&Get propName ==>As variable
//     if (typeof StudentData[i] != "function") {
//         console.log("propValue:", StudentData[i]);
//         console.log("propValue:", StudentData.i);//*i is the name of props inside object==>RUNTIME but without value ==>undefined

//     }
// }
// //*getter for props value
// console.log(StudentData.FName);
// console.log(StudentData["FName"]);
// //*Dot Operator ====>defined for props even not created by default inside object
// //&Add new Props RUNTIME
// StudentData.Address = "Cairo";
// StudentData["BranchName"] = "Mansoura";
// console.log(StudentData);

// console.log(StudentData.KKK);//*undefined

// var BookObject = {};
// // var propName = prompt("plz add propName", "");
// // var propvalue = prompt("plz add propvalue");
// // BookObject[propName] = propvalue;
// // console.log(BookObject);

// console.log(StudentData);
// //&Heirarchy Path for Object of Array,String,Object)
// var Mystr = new String("ABC");
// console.log(Mystr);
// var MyArray3 = [50, 60, 60];
// console.log(MyArray3);
// var Myobject = { "Name": "XYZ" };
// console.log(Myobject);

// // console.log(Mystr.constructor.name);
// // console.log(Mystr.valueOf());//*call with instance
// // console.log(StudentData.constructor.name);
// // //*get props Name of Object
// // //*Calling function throw Parent Creation ===>Static Function===>call with creator object
// // //*instance function ====>call with instance object 
// // console.log(Object.keys(StudentData));//*return Array of props Name
// // //*Remove property from object 
// // console.log(delete StudentData.FName);//*Check prop inside object ,Remove
// // console.log(StudentData);
// // console.log(delete StudentData.MMMM);

// // for (var i in StudentData) {
// //     console.log(i);
// // }

// //*[]===>check value ===>search varaible name ===>bind as propName

// // var propnamevariable = "publishedDate";
// // var propvaluevariable = new Date().toDateString();

// //*Add new property runtime
// // BookObject.propnamevariable = propvaluevariable;//&use Dot operator
// // console.log(BookObject);
// // BookObject["Name"] = "JSBook";
// // BookObject[propnamevariable] = propvaluevariable;
// // console.log(BookObject);

// //&of operator with Array

// // for (var k in Myarr) {
// //     console.log(k);//*index
// //     console.log(Myarr[k]);
// // }
// // //*Squential Object ====>Iterable ===>start index ,end index
// // for (var j of Myarr) {
// //     console.log("J", j);
// // }

// //*use ofoperator with object ===>Object ==>Squential (start and end)//NO 
// //!StudentData is not iterable
// // for (var m of StudentData) {
// //     console.log(m);
// // }



var EmpObject = {
    //*By default private ===>throw parent object creator
    //*Memebr Feilds 
    empName: "Eman Ali",
    EmpAge: 25,
    "Dept": "SD",
    Branch: "Mansoura",
    EmpTracks: ["Accountemnt", "Teaching"],
    //*Member Methods
    printEmpData: function () {
        console.log("EmpName:", EmpObject.empName, " EmpDept: ", EmpObject.Dept);
    }
}

// EmpObject.printEmpData();//*who is call for printEmpData ===>caller ==>before dot ===>Empobject
//*Type of data for object
var Name = EmpObject.empName;//&retirve value of premitive propt member inside object
console.log(Name);
//*change ====>premitive varaible Name
Name += " Zaki";
console.log(Name);
console.log(EmpObject.empName);

var x = 90;
var y = x;//*premitive ===>create new varaible stack intialized value with value of x 

console.log(x, y);
y += 50;//*operation y
console.log(y);

z = x;
console.log(z);
z += 60;
console.log(z);
console.log(x);


var MyTasks = EmpObject.EmpTracks;//&Ref to the same value of refence data type form Array Object
console.log(MyTasks);//&Array Object Address ===>MyTasks Stack===>value ["Accounting","Teaching"]===>Heap
MyTasks.push("HR");
console.log(MyTasks);
console.log(EmpObject.EmpTracks);


var newEmp = EmpObject;//&Two Ref refere To the Same Object inside MEmeory
newEmp.empName = "Sara Alaa";
console.log(EmpObject);
console.log(newEmp);
// //*DEEP Copy From Object itSef without Method memebrs===>
// var testEmp=structuredClone(EmpObject);
// console.log(testEmp);
// testEmp.empName="TEST NEW OBJECT";
// console.log(testEmp);
// console.log(EmpObject);
// testEmp.EmpTracks.push("TestTrack");
// console.log(testEmp.EmpTracks);
// console.log(EmpObject.EmpTracks);


//*Prevent ===>DELETE props from Object ,ANY CHANGE INTIALIT OBJECT DATA ,prevent ADDNEW PROPS RUNTIME

var MytestObject = {
    id: 101010,
    Name: "TSOBJECT",
    Age: 5
}
Object.freeze(MytestObject);
console.log(MytestObject);
MytestObject.id=202020;
delete MytestObject.Age;
console.log(MytestObject);
MytestObject.Track='REACT';
console.log(MytestObject);





var ResObject = {};
ResObject = Object.create(EmpObject);//*Missing Point====>Parent Object ====>creator function===>Inheranatnce 
//*Constructor function
// EmpObject============>Anonoums Object
ResObject.EmpTracks.push("RES NEW OBJECT");
ResObject.printEmpData();
console.log(ResObject);
console.log(EmpObject);

//*No Class 
//*Tack Anthor Intance with the same prop Fields and methods with defferntial intialed
