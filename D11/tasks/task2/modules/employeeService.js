import Employee from "./employee.js";

const employees = [];

export function getEmployees(){
    return employees;
}

export function addEmployee(name,age,salary,department){

    const employee = new Employee(
        name,
        Number(age),
        Number(salary),
        department
    );

    employees.push(employee);
}

export function deleteEmployee(index){
    employees.splice(index,1);
}

export function sortEmployees(type){

    if(type==="name"){
        employees.sort((a,b)=>a.name.localeCompare(b.name));
    }

    if(type==="department"){
        employees.sort((a,b)=>a.department.localeCompare(b.department));
    }
}

export function filterEmployees(department){

    if(department==="All")
        return employees;

    return employees.filter(emp=>emp.department===department);
}