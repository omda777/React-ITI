//^ECMA5==>scope ==>function scope ===>create private variable inside function

// var x = 100;
// function Myfun() {
//     var x = 20;//&private scope varaible 
//     console.log(x);
//     var A = 300;
//     console.log(A);
// }

// console.log(x);//&pulic x defined line 3
// //&after function calling
// Myfun();//^excute func line code
// console.log("x after funcall", x);
// // console.log(A);//!ERROR A is not defined

// if (true) {
//     var y = 200;
//     console.log("y inside if", y);
// }

// console.log("out if ", y);

// //*Each varaible defined with var ===>binded as property @ public object window
// console.log(x);
// console.log(window.x);
// console.log(y);
// console.log(window.y);

// for (var i = 0; i <= 5; i++) {
//     console.log("I", i);
// }
// console.log("After for Loop", i);

// //*Hanlder for each listItem==>click ===>change Style
// window.addEventListener("load", function () {
//     let AllListItems = document.querySelectorAll("li");

//     for (var i = 0; i < AllListItems.length; i++) {

//         //*Bind click event each listItem
//         AllListItems[i].onclick = function (eventObject) {

//             //&event callback handler for each list item fired while user clicked @ list inside html
//             console.log("HELLLLLLLLLLLLOW");
//             console.log("I", i);
//             AllListItems[i].style = "background-color:yellow;color:green;border:2px solid darkgreen;text-align:center";
//             //Call Element fire event with this ref
//             // this.style = "margin:3px;background-color:yellow;color:green;border:2px solid darkgreen;text-align:center";
//             eventObject.target.style = "margin:3px;background-color:yellow;color:green;border:2px solid darkgreen;text-align:center";


//         };//^end of callback body

//     }//^end of for loop
//     console.log("I after Loop", i);

// });//End of Page Load


//*As Block SCOPE inside EACM 6

// //&with Function  ScenarioOne
// let H = 100;
// function MyfunScope() {
//     // console.log(H);//!BlockScope.js:66 Uncaught ReferenceError: Cannot access 'H' before initialization
//     let H = 90;
//     console.log(H);
//     let InnerK = 300;
//     console.log(InnerK);
// }

// console.log(H);
// MyfunScope();
// console.log(H);
// // console.log("K:",InnerK);//!InnerK is not defined


// //&With if Scenario Two
// if (true) {
//     let P = 1000;
//     console.log("P  inside if condition:", P);
// }
// // console.log("P after if Condition",P);//! P is not defined

// //^defined variable with let or const inside {} ===>block scope ==>accessed only inside {} outer {} ==>not defined
// {
//     let O = "Block Scope";
//     console.log(O);
// }

// // console.log("Outer {}:", O);//! O is not defined

// //&With for scenario Three


// for (let J = 0; J < 5; J++) {
//     console.log("J: ", J);
// }
// // console.log("J outer for Loop", J);//!ERROR J is not defined

//&With For and CallbackEvent HAndler

// window.addEventListener("load", function () {

//     //^Get Selector Items
//     let AllItems = document.querySelectorAll("li");

//     //^for all Listem ==>bind evemt handler for each item

//     for (let S = 0; S < AllItems.length; S++) {
//         console.log("S inside For:", S);
//         //*Get Each ListItem ===>click Event

//         AllItems[S].addEventListener("click", function () {

//             console.log("Inside Click handler:", S);
           
//             AllItems[S].style = "background-color:lightgreen;color:darkblue;text-align:center;margin:5px;padding:5px";
        
//         });//*End of each click handler
//     }

// });//^end of page load


//&&&let or const ===>Not binded as proeprty window
let test=200;
console.log(test);
const B=3.14;
console.log(B);
console.log(window.test);//*undefined
console.log(window.B);//*undefined