export class Usuario {
  constructor(nombre, email, rol = "Cliente") {
    this.nombre = nombre;
    this.email = email;
    this.rol = rol;
    this.activo = true;
  }
  saludo() {
    return `Mi nombre es ${this.nombre}, y soy ${this.rol}`;
  }
  desactivar() {
    this.activo = false;
    return `El usuario ${this.nombre} ah sido desactivado`;
  }
  resumen() {
    return `${this.nombre}, ${this.email}, ${this.rol}, ${this.activo}`;
  }
}

export class UsuarioVIP extends Usuario {
  constructor(nombre, email, membresia = "Esmerald") {
    super(nombre, email);
    this.membresia = membresia;
    this.rol = "Cliente VIP";
  }
  saludo() {
    return `Mi nombre es ${this.nombre}, y soy ${this.rol} y tengo mi categoria ${this.membresia}`;
  }
  beneficios() {
    return `Tienes ventajas que no tiene un cliente natural.`;
  }
}
