// // function Myfun(param1, param2) {
// //     //&creation once ==>named inside inputs
// //     console.log(param1);//~undefined
// //     console.log(param1 + param2);
// // }
// // //*function calling
// // Myfun();//^calling function without send value for inputs param
// // var x;
// // console.log(x);///^undefined==>for datatype ==>

// // Myfun(4);//^assign value 4 to param1 ref name for input of function
// //&interpreted from left to write====>llosly type 

// //&retun data 

// function Myfun2(n1, n2, n3) {
//     var res = n1 + n2 + n3;
//     return res;
// }

// var funres = Myfun2(2, 3, 3);
// console.log('ResFun:', funres);

// //^Functions ===>Hoisting =====>Like varaibles defined with var
// // console.log("Before", y);//*undefined====>Hoisted ===>Known y saved inside memory without value
// // var y = 9;
// // console.log("Z Before: ", z);//! Not Hoisted Refernce ERRRO z is not defined
// // z = 9;
// console.log("********************************************");
// console.log("********************************************");
// console.log("********************************************");

// console.log("Calling Function Before Function Creation Body");
// HMyfun(100, 100);
// //*Function Header Creation
// //&Function Hoisting ===>Take Function name and Whole Function Body Creation Saved inside Memeory before transpailing Line by line
// function HMyfun(n1, n2) {
//     //*Function Body
//     console.log("RESOF: ", n2 + n1);
// }

// //^function Calling
// console.log("Calling Function After creation Body ");
// HMyfun(10, 10);

// //*Not Fully  OOP Lang (Inhertance,Abstarction,Intarvace,Polmarphesm,Encapsulation)
// //*Simulation For OOP===>Mainly Function Based with Object
// //&OverLoading====>Numbers of function with the same name but 
// //*different type of inputs params 
// //*different type of Return data type
// //&LOOSLY Type
// //*with the same name

// // function int  Myfun(int x, int y) {//!Uncaught SyntaxError: Unexpected identifier
// //     int z;
// //     z = x + y;
// //     return z;
// // }
// //^WIth JS
// function Myfun(x, y) {
//     var z = 0;
//     z = x + y;
//     return z;
// }

// var Res = Myfun(10, 20);
// console.log(Res);

// //&MAny function with the same name but diff numbers of inputs
// //&Hoisitng for Sum Function ===>search keyword function ===>Take name of function and body creation saved iside memory before line by line transpailing
// function Sum(n1, n2) {
//     console.log("SumRes:", n1, n2);
// }
// //*Calling function with Two Params
// Sum(10, 20);//^SumResWithFourParams:  NaN

// function Sum(n1, n2, n3) {
//     console.log("SumResWithThreeParams: ", n1 + n2 + n3);
// }

// Sum(10, 20, 30);//^SumResWithFourParams:  NaN
// //*Last version of function ===>Hoisted ===>Saved memory
// function Sum(n1, n2, n3, n4) {
//     console.log("SumResWithFourParams: ", n1 + n2 + n3 + n4);
// }

// //^Calling
// //*Calling without data values to function inputs
// Sum();//^SumResWithFourParams:  NaN

// Sum(10);//^SumResWithFourParams:  NaN

// Sum(10, 20, 30, 40);//^100


// //&Creation function ===>REf variable name for input

// function Testfun(x, y)//^ref name for varaible of input===>store data value with calling function
// {
//     console.log("x+y =", x, y, x + y);
//     //&inside body of function ===>create by default object contained store value data send to function while calling
//     console.log(arguments);
//     console.log("args[0]", arguments[0]);
// }
// // Testfun();
// // Testfun(10);
// // Testfun(20, 20);
// // Testfun(20, 20, 50);
// // Testfun(20, 20, 50, 60);
// // Testfun(20, 20, 50, 60, 100);
// // Testfun(20, 20, 50, 60, 100,200);
// //&Function paramless for params ref name
// function Sum() {
//     //^While calling any value data send to function store inside argumnets object
//     console.log(arguments);
// }
// Sum();;
// Sum(100);
// Sum(100, 200);
// Sum(100, 200, 300);
// Sum(100, 200, 300);
// Sum(100, 200, 300, 400);
// Sum(100, 200, 300, 400, 500);

// function MathOperation(op) {

//     var Sum = 0;
//     switch (op) {
//         case '+':
//             for (var i = 1; i < arguments.length; i++) {
//                 if (typeof arguments[i] == "number") {
//                     Sum = Sum + arguments[i];
//                 }
//             }
//             break;
//         case '-':
//             for (var i = 1; i < arguments.length; i++) {
//                 Sum = Sum - arguments[i];
//             }
//             break;

//     }
//     console.log(arguments);
//     console.log("Res Of Operation :", Sum);
// }
// MathOperation("+", 10, 20, 30, 40, 50, 60, 70);
// MathOperation("-", 10, 20, 30, 70);



console.log("*********************************************");
// //^variable scope
// function Functionscope(x, y) {
//     //&input varaible for function private inside function scope===>used only inisde function function
//     console.log("X:", x);
//     console.log("Y", y);
// }

// Functionscope(80, 90);
// //&calling variable out of function body
// // console.log(x);//! ReferenceError: x is not defined

// //^Second senacior

// function Functionscope2(a, b) {
//     //&callinh variable 
//     //&a,b Hoised inside function scope ====>calling before
//     console.log(a);//*Undefined
//     console.log(b);//*undefined
//     //&Override
//     a = 10;
//     b = 20;
//     console.log(a + b);
// }

// Functionscope2();
// Functionscope2(100, 200);//*ref value data for a,b

//&get data from user 
function Functionscope3(x, y, z) {
    //*x,y,z===>private varaible inside function
    console.log(x);
    console.log(y);
    console.log(z);
    x = x + 1000;
    //&insode finctopn 
    console.log("inner x:", x);
    console.log(x + y + z);
}

var A = 100;
var B = 200;
var C = 300;

//^Calling function send input data ===>ref value from A,B,C
Functionscope3(A, B, C);//&Values Data inside varaibles (A,B,C);
console.log("A:", A);
//&More Complex 

var x = 1;
var y = 2;
var z = 3;
// Functionscope3(x, y, z);//&send value data inside globe x,y,z==>Dfeind over file 
// console.log("x:", x);


//^public vaiable over file 

var publicV = 900;//^public over file
function testscope() {
    console.log("public", publicV);
    var myprivatev = 200;//&private accessed only function scope
    console.log("privatev", myprivatev);
}

// testscope();
//&after function calling
// console.log(myprivatev);//! ReferenceError: myprivatev is not defined



var K = 800;//&shared public

var L = 900;

function Testfunscope() {
    // console.log("public value K ", K);
    //^Override public value
    K = 700;
    // console.log("K inside function after override: K", K);
    //^define anthor varaible with the same name of public

    console.log("L public Before: ", L);
    var L = 1000;//*once defined variable inside function using var hoisted inside function scope
    console.log("Inner scope for L", L);

    M = 4000;//*intialized variable inside function ===>publci
    console.log("Inside function : M", M);

    //&created and intailezed varaible insdied function with var
    var H = 3000;
    console.log("H inside function scope:", H);

}

// console.log("K before function calling : K= ", K);
Testfunscope();

// console.log("K after function calling outer function scope: K", K);


// function printData() {
//     console.log("public varaible K", K);
// }

// printData();
console.log("L outer function scope: ", L);

//&After function Calling Whole varaible intialized inside function creation without var===>public
console.log("M Outer function scope :", M);

console.log("H:: outer function scope:", H);//!Uncaught ReferenceError: H is not defined