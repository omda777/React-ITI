import * as validation from "./validation.js";
import * as employeeService from "./employeeService.js";
import renderTable from "./renderTable.js";


const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const salaryInput = document.getElementById("salary");
const departmentSelect = document.getElementById("department");
const nameError = document.getElementById("nameError");
const ageError = document.getElementById("ageError");
const salaryError = document.getElementById("salaryError");
const employeeTable = document.getElementById("employeeTable");
const sortSelect = document.getElementById("sort");
const filterSelect = document.getElementById("filter");

function loadEmployees(){

    let employees = employeeService.getEmployees();
    if(sortSelect.value!=="none"){
        employeeService.sortEmployees(sortSelect.value);
        employees=employeeService.filterEmployees(filterSelect.value);
    }

    renderTable(employeeTable,employees,(index)=>{
        employeeService.deleteEmployee(index);
        loadEmployees();
    });

}

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    nameError.textContent="";
    ageError.textContent="";
    salaryError.textContent="";

    const nameMessage= validation.validateName(nameInput.value);
    const ageMessage= validation.validateAge(ageInput.value);
    const salaryMessage= validation.validateSalary(salaryInput.value);

    if(nameMessage) nameError.textContent=nameMessage;
    if(ageMessage) ageError.textContent=ageMessage;
    if(salaryMessage) salaryError.textContent=salaryMessage;

    if(nameMessage||ageMessage||salaryMessage)
        return;

    employeeService.addEmployee(
        nameInput.value.trim(),
        ageInput.value,
        salaryInput.value,
        departmentSelect.value
    );

    form.reset();
    loadEmployees();

});

sortSelect.addEventListener("change",loadEmployees);
filterSelect.addEventListener("change",loadEmployees);
loadEmployees();