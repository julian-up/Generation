const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

// Tarea 1: Lógica para multiplicar
const multiply = (a, b) => a * b;

// Tarea 1 y Tarea 3: Lógica para dividir controlando el divisor 0 (TDD)
const divide = (a, b) => {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
};

module.exports = { add, subtract, multiply, divide };