export class Producto {
  constructor(nombre, precio, categoria) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
  }
  calcularTotal() {
    return this.precio * 0.19 + this.precio;
  }
  aplicarDescuento(porcentaje) {
    let precioConDescuento = this.precio * (1 - porcentaje);
    return `${precioConDescuento} es el precio con descuento`;
  }
  resumen() {
    return `${this.nombre}, ${this.categoria}, el precio base es ${this.precio}`;
  }
  tarjeta() {
    return `${this.nombre}, ${this.categoria}, ${this.calcularTotal()}`;
  }
}

export class ProductoDigital extends Producto {
  constructor(nombre, precio, licencia = "mensual") {
    super(nombre, precio, "Digital"); // ← pasa la categoría al padre
    this.licencia = licencia;
  }
  calcularTotal() {
    return this.precio;
  }
  tarjeta() {
    return `${this.nombre}, ${this.categoria}, ${this.calcularTotal()}, ${this.licencia}`;
  }
}
