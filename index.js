import { Producto } from "./producto.js";
import { ProductoDigital } from "./producto.js";
import { Usuario } from "./usuario.js";
import { UsuarioVIP } from "./usuario.js";

// 1. Tres usuarios
const cliente = new Usuario("Ana", "ana@mail.com");
const admin = new Usuario("Carlos", "carlos@mail.com", "Administrador");
const vip = new UsuarioVIP("María", "maria@mail.com", "Platinum");

// 2. Cuatro productos
const laptop = new Producto("Laptop", 2000000, "Tecnología");
const camisa = new Producto("Camisa", 80000, "Ropa");
const curso = new ProductoDigital("Curso JS", 150000, "anual");
const software = new ProductoDigital("Adobe CC", 300000, "mensual");

// 3. Desactivar un usuario
admin.desactivar();

// 4. Descuento 20% a un producto físico
console.log(laptop.aplicarDescuento(0.2));

// 5. Tarjeta de todos los productos
console.log(laptop.tarjeta());
console.log(camisa.tarjeta());
console.log(curso.tarjeta());
console.log(software.tarjeta());

// 6. Resumen de todos los usuarios
console.log(cliente.resumen());
console.log(admin.resumen());
console.log(vip.resumen());
