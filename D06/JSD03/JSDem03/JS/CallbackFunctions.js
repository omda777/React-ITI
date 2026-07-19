function Myfun(param1, param2) {
    console.log("HIII function body");
    if (typeof param1 == "number" && typeof param2 == "number") {
        console.log(param1);
        console.log(param2);
    }
}

// Myfun(10, 20);//&send value data direct
// var x = 10;
// var y = 20;
// Myfun(x, y);//&send var ref name ====>ref to data value
// var A = "ABC";
// var B = "XYZ";
// Myfun(A, B);

//*ReadMe File for functions
//*Take Two Params 
//*param1 ====>function take One input ===>Array Object value===>print Array Object
//*param2====>number value
//*log sum of param2 with internal number
//*log internal Arry object data value elements
function Parentfun(param1, param2) {
    //*inside body function 
    var x = 90 + 90;
    var Myarry = [20, 30, 60];//*BackEnd Requested Data //Custome Call
    if (typeof param1 == "function")
        param1(Myarry);//&Calling param1

    console.log("Sum:", x + param2);
}

Parentfun(100, 200);
//*param1 as ref name for function
function printArryData(ArryObject) {
    for (var i in ArryObject) {
        console.log("index:", i, " Element:", ArryObject[i]);
    }
}

//*calling
Parentfun(printArryData, 600);//&param1 ref name ref to function body
//*param1 as anounoums function body
Parentfun(function (Arr) {
    for (var i in Arr) {
        console.log("index:", i, " Element:", Arr[i]);
    }
}, 600);


function Caller(param) {
    var MydataArray = [1, 2, 3];
    if (typeof param == "function") {
        param(MydataArray);
    }
}

Caller(function (input) {
    for (var i in input) {
        console.log("Elment*2", input[i] * 2);
    }
});