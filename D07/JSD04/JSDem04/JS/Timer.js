// console.log("HIIII");
// // for (var i = 0; i < 10000000; i++) {
// //     console.log("I:", i);
// // }

// //&1-
// // setTimeout("console.log('hi timeout');", 1000);
// // console.log("HI22222");

// //&2-CallbackFunction

// for (var i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log("I:", i);
//     }, 1500);
// }

// var J = 0;

// function FireInterval() {
//     //^Eacution Each 900 MilScond Until ===>Stop
//     J++;
//     document.title = "Counter:" + J + "  Time: " + new Date().toLocaleTimeString();
//     console.log("J:", J);
//     if (J > 10)
//         clearInterval(Timer);
// }

// var Timer = setInterval(FireInterval, 900);


// setTimeout(function () {
//     alert("RUNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN");
// }, 1200);


//^Collection Selector ===>document  as Array HTML Object As JS Object
//*Attribute ====>HTML ====>As property JS
console.log(document.images);
console.log(document.images[0]);
console.log(document.images[0].src);//^Getter
document.images[0].src = "images/3.jpg";

var i = 0;
function Slider() {
    //*Select Img 
    //&Change Each second
    i++;
    document.images[0].src = "images/" + i + ".jpg";
    console.log("i");
    if (i >= 8) {
        i = 0;
    }
}
function StartSlider() {
    SliderIn = setInterval(Slider, 1000);
}
function StopSlider() {
    clearInterval(SliderIn);
}