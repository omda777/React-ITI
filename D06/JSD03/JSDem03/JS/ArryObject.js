//*1
var Arr1 = [10, 20, 30];
console.log(typeof Arr1);//^Object
var Arr2 = Array(20, 30, 10);//^Object
console.log(typeof Arr2);
var Arr3 = new Array(200, 300, 200);
console.log(typeof Arr3);

//^Display Data of Array Element
//^Container of diffrent data types 
var ContainerOfData = [200, "ABC", true, new Date().toDateString(), function () {
    console.log("Array Element")
}, [20, 30, 10]];

console.log(ContainerOfData);
console.log(ContainerOfData.length);
//^retrive value of element =====>Zero Based index position 
//^square [indexvalue]===>getter for value 
console.log(ContainerOfData[0]);
console.log(ContainerOfData[2]);
console.log(ContainerOfData[4]);

//^Loop
for (var i = 0; i < ContainerOfData.length; i++) {
    if (typeof ContainerOfData[i] == "function") {
        ContainerOfData[i]();
    }
    else
        console.log(ContainerOfData[i]);

}
//*Squential Object ===>Start from zero index based ===>end then length of object
//*Operator ====>check incase index position have value of not
//*Array Object non fixed size
var Myarr = new Array(4);
console.log(Myarr);
//^Setter
Myarr[0] = 50;
Myarr[3] = 100;
console.log(Myarr);
//*In Operator ===>check index have value or not
console.log(0 in Myarr);//^true index have value
console.log(1 in Myarr);//^false empty
console.log(Myarr.length);
Myarr[20] = "ABC";//^Set new Value ====>change orginale object of array
console.log(Myarr.length);
console.log(Myarr);
for (var i = 0; i < Myarr.length; i++) {
    console.log("I", i, "Element", Myarr[i]);
}
console.log("***************************");
for (var i in Myarr) {
    //*Ignore ===>Empty value
    console.log("I", i, "Element", Myarr[i]);

}

//*of operator ====>Itrable 
for (var i of Myarr) {//*I ===>value of element
    console.log("Element value :", i);
}
//*Operator ====>Remove element from Array delete
console.log(delete Myarr[0]);//*Remove value inside index 0
console.log(Myarr);
console.log(delete Myarr[1]);
console.log(delete Myarr[25]);
console.log(Myarr.length);
