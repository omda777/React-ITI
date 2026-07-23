
export function validateName(name) {
    const value = name.trim();

    if (value === "") {
        return "Name is required";
    }
    if (!/^[A-Za-z\s]+$/.test(value)) {
        return "Name must contain only letters";
    }

    return "";
}

export function validateAge(age) {
    if (age === "") {
        return "Age is required";
    }

    const num = Number(age);

    if (Number.isNaN(num)) {
        return "Age must be a number";
    }
    if (num < 25 || num > 60) {
        return "Age should be from 25 to 60";
    }
    return "";
}

export function validateSalary(salary) {
    if (salary === "") {
        return "Salary is required";
    }
    const num = Number(salary);
    if (Number.isNaN(num)) {
        return "Salary must be a number";
    }
    if(num < 0) {
        return "Salary must be a positive number";
    }
    return "";
}