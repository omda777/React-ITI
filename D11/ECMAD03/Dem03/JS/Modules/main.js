// import { x } from "./MOne.js";//^Named Import 
// import { MyArr } from "./MOne.js";
//^OR ||
import { x, MyArr } from "./MOne.js";


//^Whole named Exported data from MTwo===>General Import

import * as ExportData from "./MTwo.js";
// //^ ||
// //^Export Propert with name 

// import { MTwoClass } from "./MTwo.js";//&Named Export property from MTwo


//^default import 

import ydefaulted from "./MOne.js"//*Search inside MOne keyword default==>value of varaible bind ydefaulted


console.log("X from MOne:", x);
console.log("MyArry:", MyArr);

console.log(ydefaulted);

// console.log("ExportObject from MTwo", ExportData);

// ExportData.Myfun();
// console.log(ExportData.MyObjectAsModule);

// let Two = new ExportData.MTwoClass(2020, "ABC");
// console.log(Two);
// let Two2 = new MTwoClass(1020, "XYZ");

















































//^Wrapped Whole Js Code inside Module js ===>One Object ===>Not public Window Object

//^Anthor File ===>access data variable from main file ====>export (named  many time or default one time)
//^file ===>call exported data with keyword import ====>with the same name
let newListItme = document.createElement("li");
newListItme.style = "background-color:lightgreen;color:darkblue;text-align:center";
newListItme.innerText = "Welcome From ModuleMainJs";

document.querySelector("#uLi").append(newListItme);

// console.log("Window Object::", window);
// console.log("Window Object::", this);//^undefined
