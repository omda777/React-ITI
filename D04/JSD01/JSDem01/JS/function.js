//Looping ,//control Statment==>if
for (var i = 0; i < 5; i++) {
    console.log("I", i);
}
var myName = "Nadia Saleh";//^chining of chars===>start and end ,length
var MyNumbers = [100, 200, 300];//^start position for element and end ==>length number of elemnts
console.log(myName.length);
console.log(MyNumbers.length);
for (var i = 0; i < myName.length; i++) {
    console.log("Char: ", myName[i]);
}

for (var i = 0; i < MyNumbers.length; i++) {
    console.log("Element:", MyNumbers[i]);
}

//^variables inside js ====>excute per line
var a = 70;
console.log(a);
var a = "Ahmed";
console.log(a);


//~How To define function with js
//&Loosly type lang ===>typless lang
function Myfun() {//^function header
    //^function 
}
//^ParamLess without paramter

function myfun() {
    console.log("HI fun");
}

//&function =====>namoffun()===>function calling
myfun();
//^params function 
function myfun2(param1, param2) {
    console.log("param1", param1);
    console.log("param2", param2);
    if (param1 == undefined)
        param1 = 0;
    if (param2 == undefined)
        param2 = 0;
    //&return res
    var res = param1 + param2;//!undefined+undefined==>Not A Number ==>NAN
    return res;
}
//~calling
var returnoffun = myfun2(10, 30);
console.log(returnoffun);
console.log(myfun2(10, 10));
//*Param function must take param
var res2 = myfun2();//&take param ===>no send ===>params alread defined inside funciton scope
console.log(res2);

//^defined external varaibles ===>send ref of data to function input
var x = 20;
var b = 20;
console.log("ResofData",myfun2(x, b));//^take data inside x value send to as input value for function also at b 
 //* To Be Contiue Next Lecture

