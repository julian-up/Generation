function persona(parametro1, parametro2) {
  this.nombre = parametro1;
  this.apellido = parametro2;

  this.nombreCompleto = function () {
    return `${this.nombre} ${this.apellido}`;
  };
}

let persona1 = new persona("Natalia", "Prada");

console.log(persona1);
