//*
console.log(window.document.getElementById("example"))//*eturns an Element object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.
//*First Element Object of html ===>interprted @ page

//*Selector ====>call with id value direct
//!Not Recommend 
console.log(example);//*incase one element id value ===>element direct
//*incase many element with the same id value return html collection array of objecy
// console.log(example[0]);
// console.log(example[1]);

//&Selection using Dom Selector Methods
//*Catch props and action @ object ===>use dot notation .propName or .actionName
var Mydiv = document.getElementById("example");
//&Methods ,props ===>inhert from parent objedct window
//&Attribute inside html page ===>as prop inside object element js
//!Not All with the same 
// Mydiv.style.backgroundColor="lightgreen";
// Mydiv.style.color="darkblue";
// Mydiv.style.textAlign="center";
//*Calling BTN ====>Call Onclick Attribute inside JS
CSP.onclick = function () {
    Mydiv.style.backgroundColor = "lightgreen";
    Mydiv.style.color = "darkblue";
    Mydiv.style.textAlign = "center";
    Mydiv.style.border = "2px solid yellow";
    Mydiv.style.padding = "5px";
    Mydiv.style.margin = "5px";
};//End of Function
//*Bind Style value as String value (string css value);
console.log(MyBTN);
MyBTN.onclick = function () {
    //*Override Value of Style Attribute
    Mydiv.style = "background-color:lightcyan;color:darkgreen;font-size:25px;border:5px dashed red;padding:5px";
    Mydiv.style.letterSpacing = "5px";
    Mydiv.style.borderRadius = "85px";
}
//&GET ELements ByTagName
var MyListItems = document.getElementsByTagName("li");//^HTMLCOLLECTION OBJECT
console.log(MyListItems);
//*Styling Accoring To Action Whole List Items
//*Loop ==>Bind clickElemnt each List ITem
for (var i in MyListItems) {
    // console.log(MyListItems[i]);
    // MyListItems[i].onmouseover = function () {
    //     console.log("I", i);
    //     MyListItems[i].style.backgroundColor = "red";
    // }
}
// for (var j = 0; j < MyListItems.length; j++) {
//     MyListItems[j].onmouseover = function () {
//         console.log("J", j);
//         //&Inside Callback Handler OF ANyEvent ELement====>Object Bydefualt Created Ref To Element ITSelf 
//         console.log(this);//&Ref To Current Element Fire Event Handler
//         // MyListItems[j].style.backgroundColor = "red";
//         this.style.backgroundColor = "red";
//     }
//     MyListItems[j].onmouseleave = function () {//&props from Type of Event Action ====>value function handler fire while calling action==>As Anonoums afunction
//         console.log(j);
//         this.style.backgroundColor = "yellow";
//         this.style.margin = "5px";
//         this.style.padding = "5px";
//         this.style.textAlign = "center";
//     }
// }
// //*JQuery Object ====>JS Object Wrapped Common Method ===>CSS Function inside JSQuery Object ===>CSS Selector return Collection detecat collection loop bind style

// console.log("J", j);
// console.log("I", i);
// MyListItems[0].onclick=function(){
//     alert("HI");
// }

//&SELECT ELEMENTS ByNAME VALUE====>FORM ELEMENTS
console.log(document.getElementsByName("hoppy"));
//^SELECTOR RETURN HTML COLLECTION ELEMENT====>RETURN ELEMENT FOR ACTUAL HTML TAG
//&NODELIST RETURN TAG AND EMBDED CONTENT FOR UNDISLAYED TAGS
console.log(document.querySelector("#example"))//~String value ===>CSS SELCTOR
console.log(document.querySelector(".bPink"))//~String value ===>CSS SELCTOR
console.log(document.querySelector("input"))//~String value ===>CSS SELCTOR
console.log(document.querySelector("div p"))//~String value ===>CSS SELCTOR
//&COLLECTION OF ELEMENTS
console.log(document.querySelectorAll("#example"))//~String value ===>CSS SELCTOR
console.log(document.querySelectorAll(".bPink"))//~String value ===>CSS SELCTOR
console.log(document.querySelectorAll("input"))//~String value ===>CSS SELCTOR
var ALlP = document.querySelectorAll("div p");//~String value ===>CSS SELCTOR NodeList ===>Loop Using forEachFunction

//&Inside ARRY Object Loop Over EACH ELEMENT ARRAY ===>CALLBACK FUNCTION ===>ELEMENT CODE EACH ELEMENT
var MyArr = [10, 20, 30];
//&forEach(callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any): void
//&A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
// MyArr.forEach(function (item) {
//     console.log(item * 20);
// })
ALlP.forEach(function (PItem) {
    console.log("PPPPPPPPPPPPPPPPP");
    console.log(PItem);
});
// MyListItems.forEach(function (item) {
//     console.log(item);
// });
for (var i = 0; i < ALlP.length; i++) {
    console.log(ALlP[i]);
    ALlP[i].style.backgroundColor = "lightgreen";
}

console.log(document.querySelector("img + input"));
console.log(document.querySelectorAll("img ~ input"));
console.log(document.querySelectorAll("img ~ input")[0].parentElement);
console.log(ALlP);
console.log(ALlP[0].parentElement);
ALlP[0].parentElement.style.backgroundColor = "green";
console.log(ALlP[0].parentElement.nextSibling);
ALlP[0].parentElement.nextElementSibling.style.backgroundColor = "red";
console.log(ALlP[0].parentElement.nextElementSibling);

//&SELECTORS ====>DIRECT HTML COLLECTION SELECTOR
console.log(document.getElementsByTagName("img"));//^HTML COLLECTION OF ELEMENT TAG NAME
console.log(document.images);//*HTML COLLECTION OF IMAGES
console.log(document.getElementsByTagName("form"));
console.log(document.forms);
//&SELECT FORM BY NAME ATTRIBUTE VALUE DIRECT  AND FORM ELEMENTS
console.log(basicForm);//&NAME VALUE
console.log()
//*SELECT FORM WITH ID ATTRIBUTE NAME DIRECT
console.log(UserData);//ID VALUE

console.log(regForm.txtName);//^SELECT INPUT WITH NAME VALUE ATTRIBUT
console.log(regForm.hoppy);//^SELECT INPUT WITH NAME VALUE ATTRIBUT
console.log(document.forms[1])
console.log(document.forms[1].elements)
console.log(document.forms[1].elements[0])
console.log(document.forms[1].elements[0].parentNode);

//*ALL INPUTS ====>VALUE ATTRIBUTE
console.log(regForm.txtName.value);//getter for value of input
//*Set value input
regForm.txtName.value = "Nadia Saleh";
regForm.hoppy[0].checked = true;
regForm.hoppy[1].checked = false;
console.log(regForm.hoppy[0].value);

console.log(regForm.City.value);//&return value of selected opetion
console.log(regForm.City.selectedIndex)//&get index of selected options
//^SETTING
regForm.City.selectedIndex=1;
console.log(regForm.submitbtn);
regForm.submitbtn.value="SaveData";

//~Content Of Paires TAg
console.log(document.getElementById("example").value);//*UNDEFINED
console.log(document.getElementById("example").textContent);
console.log(document.getElementById("example").innerText);
console.log(document.getElementById("example").innerHTML);
//*AS SETTER//*interPreted String value As HTML CONTENT
// document.getElementById("example").innerHTML="<div style='background-color:red;text-align:center;color:yellow'>WELCOME FROM JS CONTENT</div>"
// *STRING VALUE BIND AS BLANK TEXT EVEN INCLUDED HTML TAG
// document.getElementById("example").textContent="<div style='background-color:red;text-align:center;color:yellow'>WELCOME FROM JS CONTENT</div>"

//&SELECT ELEMENTS BYCLASS NAME
console.log(document.getElementsByClassName("a"));
console.log(document.getElementById("example").classList);
document.getElementById("example").classList.remove("fontLarge");
document.getElementById("example").classList.add("fontGreen");
//*classNAME====>override class value inside html
document.getElementById("example").className="fontLarge"
console.log(document.getElementById("example").classList);
