let displayHTML = "<div>";
let imageHTML = "";

const params = location.search.substring(1).split("&");

for (const x of params) {

    const [key, value] = x.split("=");

    if (key === "G") {
        imageHTML = `<p>User Image: <img src="./Images/${value === "F" ? "1.jpg" : "2.jpg"}"></p>`;
    } else {
        displayHTML += `<p><span>${key}</span>: ${value}</p>`;
    }
}

displayHTML += imageHTML + "</div>";

document.write(displayHTML);