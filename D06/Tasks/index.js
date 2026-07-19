function swapchar(str){
    var res = "";
    for(i=0 ; i<str.length ; i++){
        if(str[i] === str[i].toUpperCase()){
            res += str[i].toLowerCase()
        }else{
            res += str[i].toUpperCase()
        }
    }
    return res
}
console.log(swapchar('Egypt'))


function unique(str){
    var res = ""
    for(i=0 ; i< str.length ; i++){
        if(res.includes(str[i]) === false){
            res += str[i]
        }
    }
    console.log(res)
}
unique("thequickbrownfoxjumpsoverthelazydog")

/////////////////////////
console.log("................................");

const arr = [1 , 1 ,1 , 5 ,5 , 70, 9, 10, 2, 41, 510];

function removeDuplicates(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(removeDuplicates(arr));

arr.sort(function (a, b) {
    return a - b;
});

console.log("ascending: " , arr);


arr.sort(function (a, b) {
    return b - a;
});

console.log("descending: " , arr);



function filterG50(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > 50) {
            result.push(arr[i]);
        }

    }

    return result;
}

console.log("greater than 50: " , filterG50(arr)    );



const filtered = arr.filter(function (number) {
    return number > 50;
});

console.log("greater than 50: " , filtered);

console.log("................................");

function getMax(arr) {

    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max)  max = arr[i];
    }
    return max;
}

function getMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    return min;
}

console.log("Max: ", getMax(arr));
console.log("Min: ", getMin(arr));

console.log("max built-in: ", Math.max.apply(null, arr));
console.log("min built-in: ", Math.min.apply(null, arr));

////////

function sumAll(nums) {
    const sum = eval(nums.join("+"));
    const product = eval(nums.join("*"));

    console.log("Sum     : ", sum);
    console.log("Product : ", product);

}

console.log("................................");
sumAll([2, 3, 4, 5]);


console.log("................................");
function getMonthName(data) {

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    const mth = new Date(data).getMonth();
    return months[mth];

}

console.log("month name: ", getMonthName("2026-6-15"));