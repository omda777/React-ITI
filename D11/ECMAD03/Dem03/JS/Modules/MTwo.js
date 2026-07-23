import { x } from "./MOne.js";

let Myfun = () => {
    console.log("HI from Module Two");
}

let MyObjectAsModule = {
    id: 2020,
    Name: "MTwo"
}


export class MTwoClass {
    constructor(id, name) {
        this.Id = id;
        this.Name = name;
    }
}

//^Export Many Element from Same Module
export {
    MyObjectAsModule, Myfun
}

// console.log("x printed in MTow", x);


export let A = 900;