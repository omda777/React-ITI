

let TrackName = "FrontEndReactG02";
let StudentName = "Sara Mohamed";
let JoindDate = new Date("05 07 2026");
let MyHTMLSTRING = `<div
        style="text-align: center;background-color: lightgreen;color: darkmagenta;margin: 5px auto;padding: 4px;font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;border-radius: 90px;border: 4px solid royalblue;">
        <h3>Hellow :::: ${StudentName}</h3>
        <p>Welcome TO ITI ${TrackName}</p>
        <p>Date Time : ${JoindDate.toDateString()}</p>
    </div>`;

window.addEventListener("load", () => {
    document.querySelector("#Mycontent").innerHTML = MyHTMLSTRING;

});//*After loading function