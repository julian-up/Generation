const calculator = require("./calculator");

describe("Pruebas del módulo Calculator", () => {
  // Tarea 1: 2 Pruebas unitarias para multiply()
  test("Debería multiplicar 2 * 3 y dar como resultado 6", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  test("Debería multiplicar números negativos correctamente (-2 * 4 = -8)", () => {
    expect(calculator.multiply(-2, 4)).toBe(-8);
  });

  // Tarea 1: 2 Pruebas unitarias para divide()
  test("Debería dividir 6 / 2 y dar como resultado 3", () => {
    expect(calculator.divide(6, 2)).toBe(3);
  });

  test("Debería manejar divisiones con resultados decimales (5 / 2 = 2.5)", () => {
    expect(calculator.divide(5, 2)).toBe(2.5);
  });

  // Tarea 3: Prueba unitaria TDD para división por 0
  test("Debería lanzar un error cuando se intenta dividir entre cero", () => {
    expect(() => calculator.divide(6, 0)).toThrow("Cannot divide by zero");
  });
});
