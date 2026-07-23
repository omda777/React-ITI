import Employee from "./EmployeeM.js";
import { Student } from "./StudentM.js";


let EmployeeArray = [
    new Employee(1010, "Ahmed Alaa", 20, "HR", 12000),
    new Employee(1020, "Alaa yasser", 30, "SA", 3000),
    new Employee(1030, "Mohamed taha", 26, "HR", 12000),
    new Employee(1040, "Sara Mohamed", 20, "SA", 34000),
];

console.table(EmployeeArray);

let SortedEmp = EmployeeArray.slice().sort((a, b) => {
    return a.Age - b.Age;
});

console.table(SortedEmp);
let FilterEmp = EmployeeArray.filter(emp => {
    return emp.Age >= 25;
});

console.table(FilterEmp);

let StudentArray = [
    new Student(2020, "Eman Taha", 20, "SD", 2000, ["JS", "HTML", "Front"]),
    new Student(2020, "Eman Taha", 20, "SD", 2000, ["JS", "HTML", "Front"]),
    new Student(2020, "Eman Taha", 20, "SD", 2000, ["JS", "HTML", "Front"]),
    new Student(2020, "Eman Taha", 20, "SD", 2000, ["JS", "HTML", "Front"]),
]

console.table(StudentArray);