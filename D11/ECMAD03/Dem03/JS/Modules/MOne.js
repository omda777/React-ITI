import { A } from "./MTwo.js"//^Named exported from MTwo

import { Myfun as ExportedFun } from "./MTwo.js";//^Named Export with Elias Name

//^Named Export x
export let x = 30;


ExportedFun();

export let MyArr = [300, 400, 500];

let MyObject = {
    id: 2020,
    Name: "ABC",
    Age: 30
}


//^default export ===>One Time 

let y = 1000;

export default y;

let Myclass = class {
    constructor() {

    }
}

//!ERROR export default Myclass; //! Identifier '.default' has already been declared


console.log("A from MTwo", A);

//^Redefined variable A

//! ERROR let A="Ahmed";//!Identifier 'A' has already been declared
//&ReIntialzed variable import from anthor module
//! ERROR A="ABC";//!Assignment to constant variable