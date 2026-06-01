// Ejercicio 1: Libro (Objeto básico + if)
// Crear un sistema de préstamo de libros.
// Tareas:
// 1.Usa el constructor Libro para crear un objeto con título y autor.
// 2.Agrega una propiedad prestado = false.
// 3.Implementa el método prestar() que:
// •Cambie prestado a true si el libro está disponible.
// •Muestre un mensaje de error si ya está prestado (usando if).
// 4.Prueba prestar el libro dos veces y observa los mensajes.


// ============================================================
// EJERCICIO 1: Libro (Objeto básico + if)
// ============================================================

function Libro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
  this.prestado = false;
}

Libro.prototype.prestar = function () {
  if (this.prestado) {
    console.log(`Error: "${this.titulo}" ya está prestado.`);
  } else {
    this.prestado = true;
    console.log(`"${this.titulo}" ha sido prestado exitosamente.`);
  }
};

// Prueba
const libro1 = new Libro("El Principito", "Antoine de Saint-Exupéry");
libro1.prestar(); // Éxito
libro1.prestar(); // Error: ya prestado


// ============================================================
// EJERCICIO 2: Lista de Compras (Array + for)
// ============================================================

function ListaCompras() {
  this.productos = [];
}

ListaCompras.prototype.agregar = function (producto) {
  this.productos.push(producto);
};

ListaCompras.prototype.mostrar = function () {
  console.log("--- Lista de Compras ---");
  for (let i = 0; i < this.productos.length; i++) {
    console.log(`${i + 1}. ${this.productos[i]}`);
  }
};

// Prueba
const lista = new ListaCompras();
lista.agregar("Manzanas");
lista.agregar("Leche");
lista.agregar("Pan");
lista.mostrar();


// ============================================================
// EJERCICIO 3: Reproductor de Música
// ============================================================

function Reproductor() {
  this.estado = "detenido";
}

Reproductor.prototype.play = function () {
  if (this.estado === "detenido" || this.estado === "pausado") {
    this.estado = "reproduciendo";
    console.log("Reproduciendo música...");
  } else {
    console.log("Ya se está reproduciendo música.");
  }
};

Reproductor.prototype.pausar = function () {
  if (this.estado === "reproduciendo") {
    this.estado = "pausado";
    console.log("Música pausada.");
  } else {
    console.log("No hay música reproduciéndose.");
  }
};

Reproductor.prototype.detener = function () {
  this.estado = "detenido";
  console.log("Música detenida.");
};

// Prueba
const reproductor = new Reproductor();
reproductor.play();    // Reproduciendo música...
reproductor.play();    // Ya se está reproduciendo música.
reproductor.pausar();  // Música pausada.
reproductor.play();    // Reproduciendo música...
reproductor.detener(); // Música detenida.


// ============================================================
// EJERCICIO 4: Carrito de Compras con Descuentos (if/else)
// ============================================================

function Carrito() {
  this.productos = [];
  this.total = 0;
}

Carrito.prototype.agregarProducto = function (nombre, precio) {
  this.productos.push({ nombre, precio });
  this.total += precio;
  console.log(`Producto agregado: ${nombre} - $${precio}`);
};

Carrito.prototype.calcularDescuento = function () {
  if (this.total > 100) {
    const descuento = this.total * 0.10;
    const totalFinal = this.total - descuento;
    console.log(`Total: $${this.total}. Descuento del 10%: -$${descuento.toFixed(2)}. Total final: $${totalFinal.toFixed(2)}`);
  } else if (this.total > 50) {
    const descuento = this.total * 0.05;
    const totalFinal = this.total - descuento;
    console.log(`Total: $${this.total}. Descuento del 5%: -$${descuento.toFixed(2)}. Total final: $${totalFinal.toFixed(2)}`);
  } else {
    console.log(`Total sin descuento: $${this.total}`);
  }
};

// Prueba
const carrito = new Carrito();
carrito.agregarProducto("Teclado", 60);
carrito.agregarProducto("Mouse", 30);
carrito.agregarProducto("Audífonos", 25);
carrito.calcularDescuento(); // Total > $100 → 10% de descuento

