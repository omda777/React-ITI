var NumbersArray = [0, 80, 2, 40, 11, 100, 61, 55, 13, 12, 10, 3, 2, 1, 5, 6, 9];
var StringArray = ['mohamed', 'eman', 'Ahmed', 'Sara', 'youmna', 'ali', 'Taha']

// // var Res = NumbersArray.filter()

// //*Need ===>return Array Element value greated than 3
// //*userdefined fited functions
// function FiltedCondition(Element, newFiltedArray) {
//     if (Element > 3)
//         newFiltedArray.push(Element);
// }

// function fillytedArray(ArrObject) {
//     var resArray = [];
//     for (var i in ArrObject) {
//         FiltedCondition(ArrObject[i], resArray);//^Callback ===>
//     }
//     return resArray;
// }

// console.log("User:", fillytedArray(NumbersArray));


// var ResFilter = NumbersArray.filter(function (el) {//&Return Array of Elements Match Condition
//     return el > 3;
// });
// console.log("BuiltIn:", ResFilter);

// function ConditionRes(element) {
//     return element > 3;
// }

// console.log(NumbersArray.filter(ConditionRes));

// //&Seach ELement inside Array ===>index 
// var ReElement = NumbersArray.find(function (el) {
//     return el > 3;
// })   //*Return First Element inside Array Match Condition
// console.log("Eleent", ReElement);
// //&index of element
// var ResIndex = NumbersArray.findIndex(function (el) {
//     return el > 3;
// });
// console.log(ResIndex);//*First element index 

// var ResIndexLast = NumbersArray.findLastIndex(function (el) {
//     return el > 3;
// });
// console.log(ResIndexLast);
// //&Check condition ====>Whole Array Elments Match ==>true or false
// var EverRes = NumbersArray.every(function (el) {
//     return el > 3
// });
// console.log(EverRes);
// //*One at leaset match condition===>return true
// var SomeRes = NumbersArray.some(function (el) {
//     return el > 3;
// });
// console.log(SomeRes);

//*Sorting Array Elements
//*Reflect to orginal Array Object
var CopyOfArray = NumbersArray.slice();
console.log(NumbersArray);
CopyOfArray.sort();
console.log("Sorted:", CopyOfArray);
var CopyStr = StringArray.slice();
console.log(StringArray);
CopyStr.sort();
console.log(CopyStr);
console.log("Sara".charCodeAt(0));
console.log('ahmed'.charCodeAt(0));
console.log('Ahmed'.charCodeAt(0));
console.log("1".charCodeAt(0));
//&Callback function inside sort ===>differnatial betrween code of each element inside array 
//*check===>Positive or negative or zero(equel)
if ("A" > "a") {
    console.log(true);
}
if ((97 - 65) > 1) {//*-32
    console.log("true")
}
else {
    console.log("false")
}
//[0, 80, 2, 40, 11, 100, 61, 55, 13, 12, 10, 3, 2, 1, 5, 6, 9];
//[0, 80, 2, 40, 11, 100, 61, 55, 13, 12, 10, 3, 2, 1, 5, 6, 9];

//Native Code Algorithm ===>Bubble Sort
// for (var i = 0; i < CopyOfArray.length; i++) {
//     for (var j = 0; j < CopyOfArray.length; j++) {
//         if (CopyOfArray[i] < CopyOfArray[j]) {
//             var temp = CopyOfArray[i];
//             CopyOfArray[i] = CopyOfArray[j];
//             CopyOfArray[j] = temp;
//         }
//     }
// }
// console.log("Sorted Array:", CopyOfArray);
// CopyOfArray.sort(function (a, b) {
//     return a - b;
// });

CopyOfArray.sort(function (a, b) {
    if (a > b)
        return 1;//&a is greated than b
    else if (a < b)
        return -1;//& b is greater than a
    else
        return 0;//& a=b 
});

console.log("Sorted Array:", CopyOfArray);

//*RUNTIME SORTING CASE
CopyStr.sort(function (a, b) {
    //&Same Alpha Case
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a > b)
        return 1;//&a is greated than b
    else if (a < b)
        return -1;//& b is greater than a
    else
        return 0;//& a=b 
});

console.log("String After Sorting:", CopyStr);
console.log("Before:",NumbersArray);
console.log(NumbersArray.reverse())//&Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
console.log(NumbersArray);
