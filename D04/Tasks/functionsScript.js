function sum(a, b) {
    return a + b;
}

function fullName(first, middle, last) {
    first ||= "";
    middle ||= "";
    last ||= "";

    return (first + " " + middle + " " + last);
}
function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    }

    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}

function calculator(number1, number2, operation) {
    switch (operation) {
        case "+":
            return number1 + number2;
        case "-":
            return number1 - number2;
        case "*":
            return number1 * number2;
        case "/":
            if (number2 === 0)
                return "Cannot divide by zero";
            return number1 / number2;
        case "%":
            return number1 % number2;
        default:
            return "Invalid Operation";
    }
}

function getGrade(degree) {
    if (degree >= 85)
        return "Excellent";
    else if (degree >= 75)
        return "Very Good";
    else if (degree >= 65)
        return "Good";
    else
        return "Fail";
}