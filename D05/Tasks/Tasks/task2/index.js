var str = prompt("enter your full name")
var counter = 0

for (i=0 ;i<str.length; i++){
    if(str[i]==="e")counter+=1
}
console.log(counter)

var userInput = prompt("Enter a string:");
var caseSensitive = confirm("Consider case sensitivity? (OK = Yes, Cancel = No)");
var processedStr = userInput;
if (caseSensitive === false) {
    processedStr = userInput.toLowerCase();
}
var reversedStr = "";
for (var i = processedStr.length - 1; i >= 0; i--) {
    reversedStr += processedStr[i];
}

if (processedStr === reversedStr) {
    alert("palindrome");
} else {
    alert("not a palindrome");
}