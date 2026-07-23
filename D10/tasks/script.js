let arr = [ 1 , 50 , 3, 4, 6, 7 , 22 ,49 , 60 , 76, 98 , 343]

arr.sort((a , b) => a-b);
console.log("ascending:", arr);

arr.sort((a , b) => b-a);
console.log("descending:", arr);

const res = arr.filter((v) => v > 50) ;
console.log("filtered:", res);

let min = Math.min(...arr);
console.log("min:", min);

let max = Math.max(...arr);
console.log("max:", max);

// 2


function calc(op , ...nums){
    let res = 0 ;

    switch(op){
        case "+":
            nums.forEach((v) => res += v);
            break;
        case "-":
            res = nums[0];
            for(let i = 1 ; i < nums.length ; i++){
                res -= nums[i];
            }
            break;
        case "*":
            res = 1;
            nums.forEach((v) => res *= v);
            break;
        case "/":
            res = nums[0];
            for(let i = 1 ; i < nums.length ; i++){
                res /= nums[i];
            }
            break;
        default:
            console.log("invalid op");
            break;
    }

    return res ;
}

console.log(calc("+", 1, 2, 3, 4));
console.log(calc("-", 10, 2, 3));
console.log(calc("*", 2, 3, 4));
console.log(calc("/", 100, 2, 5));


// 3


const projectId = prompt("Enter project id: ");
const projectName = prompt("Enter project name: ");
const duration = prompt("Enter project duration: ");

const project = {
    projectId,
    projectName,
    duration,
    print: function(){
        console.log(`Project ID: ${this.projectId}`);
        console.log(`Project Name: ${this.projectName}`);
        console.log(`Duration: ${this.duration}`);
    }
}

project.print();