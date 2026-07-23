// //*define ===?with var ,without var,Hoisting,functon scope
// console.log(x);//*Hoisting
// var x = 90;
// console.log(x);
// //&without var
// // console.log(y);//!Not defined
// y = 20;//* Not Hoisted

// //*inside function scope

// function Myfun() {
//     //*Hoisting over function scope
//     var innerfunc = 100;
//     console.log(innerfunc);
//     z = 200;
//     console.log(z);
// }

// Myfun();
// console.log("z outer function",z);
// // console.log(innerfunc);//!is not defined

// //&create same varaible with different datatype
// console.log(x);//^90
// var x="HI";
// console.log("X after override",x);//~"HI"

//&&&&&&&&&&&&&&&&&&&&&&&&&&&& ECMA6

//^to define variable (let &const)
//*Hoisting 
//^calling A Before
// console.log("A Before",A);//!Uncaught ReferenceError Cannot access 'A' before initialization
let A = 10;//&After Equel ===?interpertation Layer
console.log(A);
//*Redefined
// let A="HI2";//!Uncaught SyntaxError: Identifier 'A' has already been declared
//*Reintialized
//&after Qual ===>interperted layer
console.log(A);
A = "H2";
console.log(A);

// var A=20;//!Uncaught SyntaxError: Identifier 'A' has already been declared 


//&&const
//*Hoisting
// console.log(B);//!Variablescope.js:49 Uncaught ReferenceError: Cannot access 'B' before initialization
const B = 12.3;
console.log(B);
//*Redefined
// let B=2;//!Uncaught SyntaxError: Identifier 'B' has already been declared 
//*Reintialized
// B = "Hi3";//!Variablescope.js:55 Uncaught TypeError: Assignment to constant variable.


//^define variable @ Two Lines
let C;//^defined
console.log(C);//^undefined
C = 100;//^intialized
console.log(C);
//^defined const @Two Line
const D;//!Uncaught SyntaxError: Missing initializer in const declaration
// D = 200;