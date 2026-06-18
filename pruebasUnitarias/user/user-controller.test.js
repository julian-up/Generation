const UserController = require("./user-controller");
const User = require("./user");

describe("Pruebas del módulo UserController", () => {
  let userController;

  // Se ejecuta antes de cada test para limpiar el estado de la lista
  beforeEach(() => {
    userController = new UserController();
  });

  // Tarea 2: 1 prueba para add() de un usuario no registrado
  test("Debería agregar exitosamente un usuario que no está en la lista", () => {
    const user = new User(1, "Carlos Gómez", "carlos@mail.com");
    expect(userController.add(user)).toBe(true);
    expect(userController.getUsers()).toContain(user);
  });

  // Tarea 2: 1 prueba para remove() de un usuario que no está en la lista
  test("Debería retornar false al intentar remover un usuario que no existe", () => {
    const userNoRegistrado = new User(999, "Falso", "falso@mail.com");
    expect(userController.remove(userNoRegistrado)).toBe(false);
  });

  // Tarea 2: 2 pruebas unitarias para findByEmail()
  test("Debería retornar el usuario correcto al buscar por un email existente", () => {
    const user = new User(2, "Ana Rojas", "ana@mail.com");
    userController.add(user);
    expect(userController.findByEmail("ana@mail.com")).toEqual(user);
  });

  test("Debería retornar undefined al buscar por un email que no existe", () => {
    expect(userController.findByEmail("inexistente@mail.com")).toBeUndefined();
  });

  // Tarea 2: 2 pruebas unitarias para findById()
  test("Debería retornar el usuario correcto al buscar por un id existente", () => {
    const user = new User(3, "Luis Páez", "luis@mail.com");
    userController.add(user);
    expect(userController.findById(3)).toEqual(user);
  });

  test("Debería retornar undefined al buscar por un id que no existe", () => {
    expect(userController.findById(888)).toBeUndefined();
  });
});
