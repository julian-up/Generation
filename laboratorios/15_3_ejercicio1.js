// Ejercicio 1

class Empleado {
    constructor(nombre, cargo, salario) {
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario = salario;
        this.activo = true;
    }
    presentarse() {
        console.log(`Hola, mi nombre es ${this.nombre}, soy ${this.cargo}`);
    }
    calcularSalarioAnual() {
        return this.salario * 12;
    }
    desactivar() {
        this.activo = false;
        console.log(`${this.nombre} ha sido desactivado.`);
    }
    info() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Cargo: ${this.cargo}`);
        console.log(`Salario mensual: $${this.salario}`);
        console.log(`Activo: ${this.activo ? 'Sí' : 'No'}`);
    }
}


class Lider extends Empleado {
    constructor(nombre, salario, equipo) {
        super(nombre, "Lider de equipo", salario); //super es un constructor de la clase padre
        this.equipo = equipo; // Array con los nombres del equipo
    }
    presentarEquipo() {
        return `Mi equipo está conformado por: ${this.equipo.join(", ")}.`;
    }

    agregarMiembro(nombre) {
        this.equipo.push(nombre);
        return `${nombre} ha sido agregado al equipo de ${this.nombre}.`;
    }

    info() {
        super.info();
        console.log(`Personas en el equipo: ${this.equipo.length}`);
    }
}

const empleado1 = new Empleado("Juan", "Desarrollador", 3000);
const empleado2 = new Empleado("María", "Diseñadora", 2500);
const empleado3 = new Empleado("Pedro", "Gerente", 5000);
const empleado4 = new Empleado("Julian", "Desarrollador Senior", 4000);
const lider1 = new Lider("Ana", 6000, ["Juan", "María"]);
const lider2 = new Lider("Carlos", 5500, ["Julian", "Pedro"]);

console.log(`La nomina mensual de mis empleados es: $${empleado1.salario + empleado2.salario + empleado3.salario + empleado4.salario}`);

console.log(`La nomina anual de mis empleados es: $${empleado1.calcularSalarioAnual() + empleado2.calcularSalarioAnual() + empleado3.calcularSalarioAnual() + empleado4.calcularSalarioAnual()}`);

empleado4.desactivar();
console.log(empleado4);
console.log();
lider1.info();
lider1.presentarEquipo();
lider2.info();
lider2.presentarEquipo();

