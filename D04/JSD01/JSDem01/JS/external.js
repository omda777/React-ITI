// window.alert("Hi from external file");
// alert("HI");
//funtion ===>display data or fixed text ===>browser===>Devloper tool ===>browser engine
//Tab====>console tab=====>RUNTIME JS CODE
// window.console.log("Welcome console from js file");
//Error ===>Unlogic Result ====>console window
//ERROR  WHICH Line

console.log("HIIIIIIIIIII");
//How To Know the Type of Data
//1- premitive data type====>type of varaible from data ===>save inside memeory size of data

//Number,String,Boolean,undefined,not defined,null
//inside ECMA5
//How to defined varaible 
//keyword var ===>save inside lang
// var nameofvaraible=data;

//each line must be inded with semicolon===>interpret ==>end of lineocde

// var 1=90;//ERROR 
// var A B=30; //ERROR
console.log(x);//undefined====>X already saved inisde memory ===>without qualivation ,take value data
console.log(y);
console.log(z);
var x = 90;//defined for varaible inside js with fully formual efination
//typless lang
//check type of data inside x
console.log(typeof x);//number ====>X=90
console.log(x);//90
//JS case sensativity

//interpretaion ===>Two Step 
//1- take varaible names ===>save memeory ===>Watch whole file search each line for variable defined with var keyword ===>save varaible inside memory
// HOisting ===========>Watch Whole file search varaible dfiend with var ===>save inside memory

//2-excute line by line ===>bind data to varaible 

var y;
var z = "ABC";//*Double Qouts or single Qout ===>type String
console.log(z);
console.log(y);
var testStr = 'Welcome To ITI'
console.log(testStr);

//^Defined Variable Without var 
//*Calling Before
// console.log(A);//!ERROR A is not defined
A = 80;//~Not Hoisted====>defined throw Data value ===>bind while excute ==>defined===>Save memeory
console.log(A);
console.log(typeof A);
console.log(typeof z);


//^With Operators +,-,*,/

var a = 10;
var b = 20;
var c = 30;

var res = a + b + c;//~Res of Math operation
console.log(res);
var resMulti = a * b * c;
console.log(resMulti);

var d = '40';
console.log(typeof d);
console.log(a + d);//^1040 Concatiantion ===> between string + anytype====>String
var e;//*type of e ===>undefined 
console.log(d + e);//^40undefined ==>concat
//*Boolean premitive ===>check condition true or false
var flg = true;//* true =1  false =0;
var flg2 = false;
console.log(flg2 + a);
console.log(flg + a);//*===>Flg=true  plus with number value ===>flg===> One 1
console.log(flg + b);
console.log(flg + d);//^Concat ===>true40
console.log(flg + e);//^NAN true+udefined===>NAN

//^flg+e====>Retrun NAN ===>check validation using if condition
if (e == undefined)
    //*override e vale =0
    e = 0;
console.log(flg + e);

//&Array varaible===>container of data

var Arry = [100, 200, 300];
console.log(typeof Arry);//^Object datatype
console.log(flg + Arry);
console.log(a + Arry);
console.log("Res Of Sum:", a + b);
console.log("Res Of Cncat Boolean with Number:", flg + a, flg + b);
//&How To write String Multi Line===>JS
//*calling document Object ===>write String from JS 
window.document.write("HIIIIIIIIIII from JS");

var StringHTML = "<div>" +
    "<p>" +
    "<h2>REACTG02</h2>" +
    " Weclome From JS Code" +
    "<span>JavaScript Code</span>" +
    "</p>" +
    "</div>";
//^write fuinction ==>take String ===>bind body tag===>html tags===>interpratation as html
window.document.write(StringHTML);

var StringHTML2 = "<div>\
        <p>\
        <h2>REACTG02</h2>\
        Weclome From JS Code\
        <span>JavaScript Code</span>\
        </p>\
    </div>";
document.write(StringHTML2);
















//2-Object data type
//How To definned Variabls
//How To Mange inside Memory ===>Browser Memory 