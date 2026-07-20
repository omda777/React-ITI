console.log(location.href);
console.log(location.host);
console.log(location.hostname);
console.log(location.protocol);
console.log(location.search);

var DisplayHTMLData = "<div>";
var SplittedSearchData = location.search.split("&");//^["userName=Nadia","txtEmail=nadiasaloih11@gmail.com","G=F"];

var PImgContent = "";
var PContent = "";
for (var i in SplittedSearchData) {
    console.log(SplittedSearchData[i].split("=")[0]);
    if (SplittedSearchData[i].split("=")[0] == "G") {

        if (SplittedSearchData[i].split("=")[1] == "F")
            PImgContent = "<p>UserImage : <img  src='../Images/1.jpg'/></p></div > ";
        else {
            PImgContent = "<p>UserImage : <img src='../Images/2.jpg' /></p></div > ";
        }
    }
    else {
        PContent += "<p><span>" + SplittedSearchData[i].split("=")[0] + "</span>:" + SplittedSearchData[i].split("=")[1] + "</p>";
    }
}
DisplayHTMLData += PContent + PImgContent + "</div>";
console.log(DisplayHTMLData);

document.write(DisplayHTMLData);
