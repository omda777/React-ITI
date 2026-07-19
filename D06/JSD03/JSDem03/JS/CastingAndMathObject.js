//*Take Daata from User
// var Number1=prompt("plz add number1");//Return String value
// var Number2=prompt("plz add number1");//Return String value
// console.log(typeof Number1);
// console.log(Number1+Number2);
// 
console.log(Number("30"));
console.log(Number("30.5"));
console.log(parseInt("30"));
console.log(parseFloat("30.5"));
console.log(Number("30aa"));//*NAN
console.log(parseInt("30aa"));//*30
//*check incase number or not
console.log(isNaN("50"));//*false ===>number
console.log(isNaN("30abc"));//*true ===>string

console.log(Math.PI);
console.log(Math.round(3.6));
console.log(Math.round(3.4));
console.log(Math.floor(3.6));
console.log(Math.floor(3.4));
console.log(Math.ceil(3.6));
console.log(Math.ceil(3.4));

console.log(Math.random())
console.log(Math.random() * 8);
console.log(Math.round(Math.random() * 8));
//*compare
console.log(Math.max(8, 9, 7, 3, 5, 0));
console.log(Math.min(8, 9, 7, 3, 5, 0));
console.log(Math.pow(4, 2));
console.log(Math.sign(60));
console.log(Math.sign(90));