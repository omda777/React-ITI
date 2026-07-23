let MySum = (operand, param1, param2, params) => {
    // console.log(arguments);//!ERROR 
    //^
    console.log(params);
    let res = 0;
    switch (operand) {
        case "+":
            res = param1 + param2;

    }
    console.log("RES:", res);
}

// MySum();
// MySum(10);
// MySum('+', 20, 30, 40);
// MySum('+', 20, 30, 40, 50);
// MySum('+', 20, 30, 40, 50, 70);
//*Two Param ====>first param ===>operator ,second the rest of inputs params while user calling

//&Collection of whole params ===>while calling function inside object ====>Array Object
//&use rest operator inside function header while creation function 

// let MysumRest = (operand, param1,param2,param3) => {

// //!Uncaught SyntaxError: Rest parameter must be last formal parameter
// let MysumRest = (operand, ...RstOfParams,param4) => {

let MysumRest = (operand, ...RstOfParams) => {
    console.log(operand);
    console.log(RstOfParams);
    let Res = 0;
    switch (operand) {
        case '+':
            for (var i in RstOfParams) {
                Res += RstOfParams[i];
            }
            break;
    }
    console.log("RES:::", Res);
}

// MysumRest('+', 20);
// MysumRest('+', 20, 30);
// MysumRest('+', 20, 30, 30);
// MysumRest('+', 20, 30, 30, 40);
// MysumRest('+', 20, 30, 30, 40, 50);
// MysumRest('+', 20, 30, 30, 40, 50, 60);
//*Deteed Params ===>push inside Rest Object
//&Statment Function
function TestFun(operand, param1, param2, ...Params) {
    console.log(operand);
    console.log(param1);
    console.log(param2);
    console.log(Params);//*Array Object Rest of function inputs []
}
// TestFun('+');
// TestFun('+', 10, 10);
// TestFun('+', 10, 10, 30);
// TestFun('+', 10, 10, 30, 30);
// TestFun('+', 10, 10, 30, 30, 40);
// TestFun('+', 10, 10, 30, 30, 40, 40);

//&Expression function ===>rest operator ==>function creation header
let Mytest = function (...restparam) {
    console.log(restparam);
}
// Mytest();
// Mytest(10);
// Mytest(10,20);
// Mytest(10,20,30);
// Mytest(10,20,30,40);

//&Reverse ====>Array As Function Param

let printArrayElement = (input) => {
    console.log(input);
    for (let i in input) {
        console.log(input[i]);
    }
}

let MyArr = [20, 30, "A", "B", "C"];
printArrayElement(MyArr);


let SumOperation = (opr, ...params) => {
    console.log(params);
    let Res = 0;
    switch (opr) {
        case "+":
            for (let i in params) {
                Res += params[i];
            }
            break;
        case "*":
            Res = 1;
            for (let i in params) {
                Res *= params[i];
            }
            break;
    }

    console.log("RES:::", Res);
}
SumOperation("+",20,20);
SumOperation("*",20,20);
SumOperation("+",20,20,30);
let ArrayOfNumbers=[10,20,30,40];
SumOperation("+",ArrayOfNumbers);//&Two Param operan ,second param Array ===>push inside res zero index as one element
//&while function calling spread array input param to spreated params input 
SumOperation("+",...ArrayOfNumbers);//^Spread Operator ===>use ... operator while function calling
