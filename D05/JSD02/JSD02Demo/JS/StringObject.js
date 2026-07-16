
// //^Object Data Type =======>String ==>Built In function and actions
// var Mystr = "ITI";//&As premitive
// console.log(typeof Mystr);//*saved inside Stack ===>Mystr="ITI";
// //*defined string as function built ins String
// var Mystr2 = String("ReactG02");//^as premitive
// console.log(typeof Mystr2);//^String
// //*create instance from String Object ===>new instnace new 

// var MystrObj = new String("FrontEnd React");//^constructor Function===>return object
// console.log(typeof MystrObj);//^As Object ===>save name inside stack ===>address value inside heap
// //&Calling Built In of functions and behvoiurs of object just using dot notation (.)
// //*Function inside object ()
// //*propert nameof it 
// console.log(MystrObj.length);//^return number of chars inside object===>position index
// console.log(MystrObj[0]);//&return char inside index 0
// console.log(MystrObj.charAt(0))//^Returns the character at the specified index.
// console.log(MystrObj.charAt(3))//^Returns the character at the specified index.
// console.log(MystrObj.charAt(11000))//^Returns the character at the specified index.
// //*function ====.search inside string ===>retrun index of char
// console.log(MystrObj.indexOf("f"))//^Returns the position of the first occurrence of a substring.
// console.log(MystrObj.indexOf("F"))//^Returns the position of the first occurrence of a substring.
// console.log(MystrObj.indexOf("R"))//^Returns the position of the first occurrence of a substring.
// console.log(MystrObj.indexOf("d"))//^Returns -1 this char not loacted at string .

var Mystr = "iti mansoura branch";//&As premetive
console.log(Mystr.indexOf("a"));//^dot notation ===>Wrapped for variable object tyep return buitl function
console.log(Mystr.indexOf("i"));//*0 first occurence index
console.log(Mystr.lastIndexOf("i"));//*2// last occurence index
console.log(Mystr.includes())//^Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.
console.log(Mystr.includes("i"))//^Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.
console.log(Mystr.includes("x"))//^Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.
console.log(Mystr.at(0));
console.log(Mystr.at());//^Zero Based
console.log(Mystr.charAt());//^i
console.log(Mystr.at(1000));//&undefined==>search accroind to unique code of chars UTF 16-code 
console.log(Mystr.charAt(10000));
//^change chars from lower to upper
console.log(Mystr.toUpperCase());
Mystr.toUpperCase();//^chanage Whole String Chars to Upper return new string varaible res
//&As String Object ===>Immutable ===>ReadOnly ===>change ====>using Function return 
//^Chage char index 1 ===>Upper 
//& iti mansoura branch 
//& iTi mansoura branch

Mystr[1].toUpperCase();//&dedect for change over string ===>new string override
console.log(Mystr);
var Res = "";
for (var i = 0; i < Mystr.length; i++) {
    if (i == 1) {
        //Each loope index ovvride ReIntailzed varaible Mystr with new value 
        Res += Mystr[i].toUpperCase();
    }
    else
        Res += Mystr[i];
}

console.log(Res);
console.log(Mystr);

//^ReIntailed
var X = "ABC";
var Y = X.toLocaleLowerCase();//&intialized Y return from toLowerCase()
console.log(Y);

//&Search inside String ===========>return new Pattern

console.log(Mystr.charCodeAt());//^return code of value inside zero index
console.log(Mystr.charCodeAt(0));//^return code of value inside zero index
console.log(Mystr.charCodeAt(1));//^return code of value inside zero index
console.log(Mystr.charCodeAt(2));//^return code of value inside zero index

console.log(Mystr.substring(2))//&Returns the substring at the specified location within a String object.
console.log(Mystr.substring(2, 5))//&Returns the substring at the specified location within a String object.
console.log(Mystr.slice(2));
console.log(Mystr.slice(2, 5));
console.log(Mystr.slice(2, 5));//^Returns a section of a string.

console.log(Mystr.search());
//^search(regexp: string | RegExp): number===>SelfStudy

//&Change String To Array 
console.log(Mystr);
console.log(Mystr.split());//^Whole string as value inside zero inex for array element
//&Take input ====>splitted slements of array 
console.log(Mystr.split(""));//^Each char inside string to array element
var Res1 = Mystr.split();
var Res2 = Mystr.split("");
console.log(Res1[0]);
console.log(Res2[0]);
//&speacial operator
var Res3 = Mystr.split(" ");
console.log(Res3);
console.log(Res3[0]);

//^input ====> iti mansoura branch
//^output====>Iti Mansoura Branch
console.log("Input::", Mystr);
//&chat each first word 
//&change first char of each word ===>upper
//&concat words after chagne first chars===>One String
//&Input from user ==========>
//Control Boxes ===>alert
// var InputsString = prompt("Plz add Ur Input Data");//^return string value
var SplittedStr = Mystr.split(" ");//^["iti","mansoura","branch"]
var Res = "";
// var SplittedStr = InputsString.split(" ");
for (var i = 0; i < SplittedStr.length; i++) {
    var UpperChar = SplittedStr[i].charAt(0).toUpperCase();
    Res += UpperChar + SplittedStr[i].slice(1) + " ";
}
console.log("OutPut:: ", Res);
document.writeln("<p style='background-color:lightgreen;color:darkblue;text-align:center;font-size:23px'>" + Res + "</p>")
document.writeln(Res.bold().fontcolor("red").fontsize(7));
document.writeln(Res.bold().fontcolor("red").fontsize(7).italics());
var str = "  HIHIK  ";
var str2 = "iti";
console.log(str.concat(str2));
console.log(str.trim().concat(str2));
console.log(str.trimEnd().concat(str2));
console.log(str.trimStart().concat(str2));

//&Date Object ===>OS date

var MyDate = new Date();
var MyCustomDate = new Date("02 feb 2013");
document.writeln("<p style='font-size:23px; background-color:yellow;color:green;text-align:center;'> " + MyDate + "</p>");
document.writeln("<p style='font-size:23px; background-color:blue;color:white;text-align:center;'> " + MyCustomDate + "</p>");
document.writeln("<p style='font-size:23px; background-color:yellow;color:green;text-align:center;'> " + MyDate.getFullYear() + "</p>");
document.writeln("<p style='font-size:23px; background-color:blue;color:white;text-align:center;'> " + MyCustomDate.getFullYear() + "</p>");
document.writeln("<p style='font-size:23px; background-color:yellow;color:green;text-align:center;'> " + MyDate.getDate() + "</p>");
document.writeln("<p style='font-size:23px; background-color:yellow;color:green;text-align:center;'> " + MyDate.getDay() + "</p>");
document.writeln("<p style='font-size:23px; background-color:yellow;color:green;text-align:center;'> " + MyDate.getMonth() + "</p>");
document.writeln("<p style='font-size:23px; background-color:yellow;color:green;text-align:center;'> " + MyDate.toDateString() + "</p>");
document.writeln("<p style='font-size:23px; background-color:yellow;color:green;text-align:center;'> " + MyDate.toLocaleDateString() + "</p>");
document.writeln("<p style='font-size:23px; background-color:yellow;color:green;text-align:center;'> " + MyDate.toTimeString() + "</p>");
MyCustomDate.setDate(5);
document.writeln("<p style='font-size:23px; background-color:blue;color:white;text-align:center;'> " + MyCustomDate + "</p>");
MyCustomDate.setMonth(4);
document.writeln("<p style='font-size:23px; background-color:blue;color:white;text-align:center;'> " + MyCustomDate + "</p>");
//&Log File ,Log Data ,Date ===>BE,DB