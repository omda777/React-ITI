
var userName = prompt("Enter your name:");
var telephone = prompt("Enter your telephone number:");
var mobile = prompt("Enter your mobile number:");
var email = prompt("Enter your email address:");


var color = prompt("Choose a color: red, green, or blue");


color = color.toLowerCase();

if (color != "red" && color != "green" && color != "blue") {
    alert("Invalid color! Default color will be blue.");
    color = "blue";
}


var today = new Date();
document.writeln(
    "<span style='color:" + color + ";'><b>Welcome dear guest </b></span>" +
    userName.bold()
);
document.writeln("<br>");

document.writeln(
    "<span style='color:" + color + ";'><b>your telephone number is </b></span>" +
    telephone
);
document.writeln("<br>");

document.writeln(
    "<span style='color:" + color + ";'><b>your mobile number is </b></span>" +
    mobile
);
document.writeln("<br>");

document.writeln(
    "<span style='color:" + color + ";'><b>your email address is </b></span>" +
    email
);
document.writeln("<br><br><br>");

document.writeln(
    "<span style='color:" + color + ";'><b>today is </b></span>" +
    today.toDateString()
);