// ============================================
// EJERCICIO 1 - SISTEMA DE EMPLEADOS
// Sistema de empleados de una empresa de tecnología
// ============================================

// 1.1 CLASE BASE: EMPLEADO
// Todos los empleados tienen características comunes
class Empleado {
    constructor(nombre, cargo, salario) {
        this.nombre = nombre;
        this.cargo = cargo;
        this.salario = salario;
        this.activo = true;  // Siempre inicia en true, no se recibe como argumento
    }

    // presentarse() retorna una oración con nombre y cargo
    presentarse() {
        return `Hola, soy ${this.nombre} y soy ${this.cargo}`;
    }

    // calcularSalarioAnual() retorna el salario mensual multiplicado por 12
    calcularSalarioAnual() {
        return this.salario * 12;
    }

    // desactivar() cambia activo a false y retorna un mensaje confirmando
    desactivar() {
        this.activo = false;
        return `El empleado ${this.nombre} ha sido desactivado.`;
    }

    // info() retorna nombre, cargo, salario mensual y si está activo
    info() {
        const estado = this.activo ? "Activo" : "Inactivo";
        return `${this.nombre} - Cargo: ${this.cargo} - Salario: $${this.salario}/mes - Estado: ${estado}`;
    }
}

// ============================================
// 1.2 CLASE EXTENDIDA: LIDER
// Los líderes heredan de Empleado pero tienen equipo a su cargo
// ============================================
class Lider extends Empleado {
    constructor(nombre, salario, equipo) {
        // El cargo queda fijo como "Lider de equipo"
        super(nombre, "Lider de equipo", salario);
        this.equipo = equipo;  // Array con los nombres de las personas a cargo
    }

    // presentarEquipo() retorna los nombres del equipo en una sola oración
    // Usa .join() para unir los nombres con comas
    presentarEquipo() {
        const miembros = this.equipo.join(", ");
        return `Mi equipo está conformado por: ${miembros}`;
    }

    // agregarMiembro(nombre) agrega un nombre al array del equipo
    agregarMiembro(nombre) {
        this.equipo.push(nombre);
        return `${nombre} ha sido agregado al equipo de ${this.nombre}`;
    }

    // Sobreescribe info() para incluir el número de personas en el equipo
    // Hereda calcularSalarioAnual() y desactivar() sin redefinirlos
    info() {
        const estado = this.activo ? "Activo" : "Inactivo";
        return `${this.nombre} - Cargo: ${this.cargo} - Salario: $${this.salario}/mes - Equipo: ${this.equipo.length} personas - Estado: ${estado}`;
    }
}

// ============================================
// CHECKPOINT 1: Prueba de Empleado
// ============================================
console.log("=== CHECKPOINT 1: Prueba de Empleado ===");

const empleado1 = new Empleado("Juan", "Desarrollador", 3000);
const empleado2 = new Empleado("María", "Diseñadora", 2800);
const empleado3 = new Empleado("Carlos", "Tester", 2500);

console.log(empleado1.presentarse());
console.log("Salario anual:", empleado1.calcularSalarioAnual());
console.log(empleado1.info());

console.log("\n" + empleado2.presentarse());
console.log("Salario anual:", empleado2.calcularSalarioAnual());
console.log(empleado2.info());

console.log("\n" + empleado3.presentarse());
console.log("Salario anual:", empleado3.calcularSalarioAnual());
console.log(empleado3.info());

// Desactivar uno y verificar que info() lo refleja
console.log("\n--- Desactivando a Carlos ---");
console.log(empleado3.desactivar());
console.log(empleado3.info());

// ============================================
// CHECKPOINT 2: Prueba de Lider
// ============================================
console.log("\n\n=== CHECKPOINT 2: Prueba de Lider ===");

const lider1 = new Lider("Ana", 5000, ["Juan", "María"]);
const lider2 = new Lider("Pedro", 4800, ["Carlos", "Sofia"]);

// Verificar que heredan calcularSalarioAnual() sin redefinirlo
console.log(lider1.presentarse());
console.log("Salario anual:", lider1.calcularSalarioAnual());
console.log(lider1.presentarEquipo());

console.log("\n" + lider2.presentarse());
console.log("Salario anual:", lider2.calcularSalarioAnual());
console.log(lider2.presentarEquipo());

// Agregar un miembro y verificar que presentarEquipo() se actualiza
console.log("\n--- Agregando miembro a equipo de Ana ---");
console.log(lider1.agregarMiembro("Diego"));
console.log(lider1.presentarEquipo());

// ============================================
// 1.3 ESCENARIO COMPLETO
// ============================================
console.log("\n\n=== ESCENARIO COMPLETO ===");

// 1. Crear cuatro empleados regulares y dos líderes
const empl1 = new Empleado("Roberto", "Backend Developer", 3500);
const empl2 = new Empleado("Lucia", "Frontend Developer", 3300);
const empl3 = new Empleado("Miguel", "DevOps", 4000);
const empl4 = new Empleado("Elena", "QA Engineer", 2900);

const lider3 = new Lider("Lucas", 5200, ["Roberto", "Lucia"]);
const lider4 = new Lider("Isabella", 5100, ["Miguel", "Elena"]);

// 2. Calcular el costo total mensual de nómina
const todosLosEmpleados = [empl1, empl2, empl3, empl4, lider3, lider4];

let costoMensual = 0;
for (let i = 0; i < todosLosEmpleados.length; i++) {
    costoMensual += todosLosEmpleados[i].salario;
}

console.log(`\n--- Nómina de la empresa ---`);
console.log(`Costo total mensual: $${costoMensual}`);

// 3. Imprimir el costo anual total
const costoAnual = costoMensual * 12;
console.log(`Costo total anual: $${costoAnual}`);

// 4. Desactivar un empleado e imprimir su info()
console.log(`\n--- Desactivando empleado ---`);
console.log(empl1.desactivar());
console.log(`Info actualizada: ${empl1.info()}`);

// 5. Imprimir info() y presentarEquipo() de cada líder
console.log(`\n--- Información de Líderes ---`);
console.log(lider3.info());
console.log(lider3.presentarEquipo());

console.log();
console.log(lider4.info());
console.log(lider4.presentarEquipo());

// ============================================
// CHECKPOINT 3: Verificación
// ============================================
console.log(`\n\n=== CHECKPOINT 3: Verificación ===`);
console.log("✓ node ejercicio1.js corre sin errores");
console.log(`✓ Costo de nómina refleja todos los empleados: $${costoMensual}`);
console.log(`✓ El empleado desactivado aparece como inactivo: ${empl1.info()}`);
