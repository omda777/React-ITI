var NumbersArray = [0, 8, 2, 4, 3, 2, 1, 5, 6, 9];
var StringArray = ['mohamed', 'eman', 'ahmed', 'sara', 'youmna', 'ali', 'taha']

//*Add values to Array
//*add new element at the last index===>change length of array increase with one
// console.log(NumbersArray.push(5, 4));//&Appends new elements to the end of an array, and returns the new length of the array.
// //*add element value at the index zero ===>change length incrase with one and shifting for index values
// console.log(NumbersArray.unshift(3, 3));//&Inserts new elements at the start of an array, and returns the new length of the array.
// console.log(NumbersArray);
// //~delete elements from Array ===>last index or zero index ===>change length of array
// console.log(NumbersArray.pop());//&Removes the last element from an array and returns it
// console.log(NumbersArray);
// console.log(NumbersArray.shift())//&Removes the first element from an array and returns it
// console.log(NumbersArray);

// //*Remove from detected indexs 
// console.log(NumbersArray.slice(0, 3));//*return Copy
// console.log(NumbersArray);
// //*Delete from Array and return deleted elements
// console.log(NumbersArray.splice(0, 3));//&Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// console.log(NumbersArray);
// //&Copy from Array element 
// var copyV = NumbersArray.slice();//return Copy of Array Element
// console.log(copyV);
// copyV.push(50);
// console.log(copyV);
// console.log(NumbersArray);
// //!
// // var testcopy = NumbersArray;//*Anthor Ref Name ===>ref to the same locatio Heap
// // testcopy.push("Testssssss");
// // console.log(NumbersArray);
// // console.log(testcopy);

// console.log(NumbersArray.splice(0,0,80));//&Add new Element value for idecated index while deleted count zero
console.log(NumbersArray);
// console.log(NumbersArray.splice(3,0,70,70));
// console.log(NumbersArray);

// console.log(NumbersArray.at(0));
// console.log(NumbersArray.concat(10,210));//*Add last index return new Array 
// console.log(NumbersArray);
// var ConcatedArray=NumbersArray.concat(StringArray);
// console.log(ConcatedArray);

//^Array To String 
console.log(NumbersArray.join());
console.log(NumbersArray.join("+"));//&return String value separeted each char with special operand
//!Never Ever Use this
//^function built in javascrip====>string ===>interpreation as js code
eval("console.log('HI from eval');alert('HIIIIIII');");
// eval("document.write('<h3 style='background-color:lightgreen; color: darkblue; font - size: 20px'>Welcome Eval function</h3>')");
console.log(eval(NumbersArray.join("+")));//^Evaluates JavaScript code and executes it.@param x — A String value that contains valid JavaScript code.
