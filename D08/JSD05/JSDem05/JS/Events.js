//&SELECT ELEMENT ===>BIND EVENT AS PROPERTY ====.VALUE CALLBACK HANDLER FUNCTION AS ANONOUMS FUNCTION

// console.log(clickMeBtn);//&SELECT BTN USE ID VALUE DIRECT
//&BIND EVENT VALUE INSIDE HTML 

//*interprtd ===>ANy JS CODe SELECTOR ELEMENTS DIRECT ===>RUNNING AFTER PAGE LOADING
//^CALLING EVENT ===>PGAE LOADING ====>CALLBACK HANDLER FUNCTION EXCUTE AFTER LOADING
//*LOADING EVENT AUTO FIRE AFTER INTERPTED PAGE 
//*1-
// window.onload = function () {
//     //*BODY CODE LLL FIRE AFTER PAGE LOADING ==>AUTO FIRE
//     alert("HI AFTER PAGE LOADING>>>>>");
//     console.log(clickMeBtn);
//     //*SELECTOR ===>INSIDE PAGGE LOAD
// };//*END OF PAGE LOADING CALLBACK HANDLER

function MyFun() {

}

function loadingCallBackFun() {
    // console.log(document.getElementsByTagName("li"));
    // //~selector bind as property
    // clickMeBtn.onclick = function () {
    //     alert("HI from Anonoums call prop onclick");
    // }
    // //*listen to one previous callbackhanlder for same event at same element
    // clickMeBtn.addEventListener("click", function () {
    //     alert("hi from callback anoumous for listener");
    // });

    // clickMeBtn.addEventListener("click", listenrcallbackbtn);

    // btnRemoveListener.addEventListener("click", function () {
    //     //clickMeBTN ===>remove handler callback of click event
    //     clickMeBtn.onclick = null;//*override prop event onclick==null
    //     //*Remove callback from listener
    //     clickMeBtn.removeEventListener("click", listenrcallbackbtn);
    // });
    //*Deep In ===>calllbackHnadler FUnCTION for EVENT
    document.getElementById("testingDiv").addEventListener("mouseover", function () {
        // alert("HI");
        //*inside callback function for event ====>this ref to element fire event
        testingDiv.style.backgroundColor = "yellow";
        this.style.backgroundColor = "yellow";
    });
    testingDiv.addEventListener("mouseout", fireMouseOutHandler);
    //*By default inside each callback handler for element event ====>create object ref to event itself
    //*inside event object ===>property object ref to element fire event 
    testingDiv.addEventListener("mousemove", function (event) {
        console.log(event);
        event.target.innerHTML = "X:" + event.x + " Y:" + event.y;
    });



    //^create elements RUNTIME ===>EVENT
    AddnewELement.addEventListener("click", function () {
        //*create new List Item As HTML JS OBJECT
        var newLIST = document.createElement("li");//*return Object selector ref to create element
        newLIST.style = "background-color:lightgreen;text-align:center;font-size:20px;padding:5px;margin:5px;border:2px solid yellow";
        newLIST.innerText = "MY NEW LIST ITEM";
        newLIST.addEventListener("click", function () {
            alert("HI CREATED ELEMETN RUNTITME");
        });
        //*CALL PARENT SELECTOR BIND NEW CHILD ELEMENT
        document.getElementById("ulElm").append(newLIST);

    });


    //*Form Validation keypress,keydown,keyup,blur,hover
    whichkey.addEventListener("blur", function (e) {
        if (e.target.value == "") {
            log.style.display = "inline";
            log.innerText = "this field is required";
            e.target.focus();
            e.target.style.backgroundColor = "red";
        }
        else {
            log.style.display = "none";
            e.target.style.backgroundColor = "white";
        }
    });

    //*Accept Number only
    whichkey.addEventListener("keypress", function (e) {
        log.style.display = "inline";
        log.innerText = "char:" + e.key + " Code:" + e.keyCode;
        if (e.keyCode < 48 || e.keyCode > 57) {
            e.preventDefault();
            log.innerText = "this field accept numbers only";
        }
    });

    //*fire event Number of time
    var counter = 3;
    TimeBtn.onclick = function (e) {
        counter--;
        e.target.value = counter;
        if (counter <= 0) {
            TimeBtn.onclick = null;
        }
    }


    selectCours.addEventListener("change", function (e) {
        console.log(e.target.value);
        if (e.target.selectedIndex == 0) {
            alert("you have to select your course");
        }
    });





}

function fireMouseOutHandler(eventObject) {
    // alert(this);
    // this.style.backgroundColor="green";
    eventObject.target.style.backgroundColor = "green";
    console.log(eventObject);

}
//*Calling For FUNCTION FROM WINOW Object
// fireMouseOutHandler();//*this ref caller 


// function listenrcallbackbtn() {
//     alert("HI BTN REF FUNCTION NAME");
// }




//*Callback fire After page Laoding 2
// window.onload = loadingCallBackFun;//Ref refere to function fire after loading
//^incase Same Event Take Many CallBack Handlers
//*Listener function ====>event name ,callabckhandler ===>listen previous handler for same event on same element
window.addEventListener("load", loadingCallBackFun);