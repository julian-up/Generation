// como buena practica, declaro todas las variables en el comienzo del programa y las funciones que vamos a usar, tambien tuve que declarar la opcion para que el codigo del while pueda verlo, ya que fue necesario dejar el prompt dentro del ciclo para que el cliente pueda seleccionarlo, pero si lo dejo dentro del if, el codigo se rompe porque se queda con solo 1 opcion, no es variable y el codigo se buguea mostrando siempre la misma opcion.
const prompt = require("prompt-sync")();
let pin = 1234;
let saldo = 500000;
let opcion = 0;
// Declare esta funcion con el menu para mostrarlo de manera estatica.
function mostrarMenu() {
  console.log(`
        Menu principal

        1. Consultar saldo
        2. Retirar dinero
        3. Enviar dinero
        4. Calcula tu retabilidad con nosotros (%10 anual)
        5. Convertir tu saldo en dolares
        6. Salir
        `);
}
// Use esta verificacion del pin haciendo la negacion para cuando el pin ingresado es falso y cuando es correcto retorna true, para que se percerbe en la variable
function verificarPin() {
  let pinIngresado = parseInt(prompt("ingresa tu pin: "));
  if (pinIngresado !== pin) {
    return false;
  } else if (pinIngresado == pin) {
    return true;
  }
}
// con backticks llamamos la variable del saldo.
function consulta() {
  console.log(`Su saldo actual es ${saldo}`);
}
// con condicionales logramos establecer criterios suficientes para que el cajero no vaya a cometer errores con valores atipicos en la realidad
function suma() {
  console.log(`¿Cuanto dinero quiere retirar?`);
  let cantidadRetiro = parseInt(
    prompt("cantidad a retirar (Solo billetes de 10000): "),
  );
  if (saldo < cantidadRetiro || cantidadRetiro <= 0) {
    console.log("Fondos insuficientes..");
  } else if (cantidadRetiro % 10000 !== 0) {
    console.log(
      `Solo puedes realziar retiros en multiplos de 10000, e intentaste retirar ${cantidadRetiro}`,
    );
  } else {
    saldo = saldo - cantidadRetiro;
    console.log(`Nuevo saldo: ${saldo}`);
    console.log("Retiro exitoso,reciba su dinero");
  }
}

function resta() {
  console.log(`¿Cuanto dinero quieres depositar?`);
  let cantidadDeposito = parseInt(prompt("Ingresa el valor de tu deposito: "));
  if (cantidadDeposito <= 0) {
    console.log("El retiro que estas haciendo no es valido");
  } else if (cantidadDeposito >= 3000000) {
    console.log("No puedes hacer depositos de 3000000 o mas. ");
  } else {
    saldo = saldo + cantidadDeposito;
    console.log(`Proceso correcto, el saldo actual es ${saldo}`);
  }
}

function producto() {
  console.log(`Su saldo actual es ${saldo}`);
  let ganancia = saldo * 0.1;
  console.log(
    `Tu rentabilidad del 10% en un año es ${ganancia} y tu ganancia con tu saldo actual es ${saldo + ganancia}`,
  );
  console.log(
    "la operacion que usamos para calcular el 10% es tu saldo multiplicado por 0.1",
  );
}
// en la guia el instructor pidio que fuera un valor de 4000 pesos, pero me referi de la pagina web de esa casa de cambios para tomar esta decision.
function division() {
  console.log(`Su dinero en dolares es ${saldo / 3670}`); //tomamos esa tasa de una casa de cambio en https://goldbusiness.app
}

function salida() {
  console.log(`Haz cerrado sesion`);
  process.exit();
}

// La guia no pedia un sistema de intentos, pero decidi integrarla con el ciclo for que aprendimos, donde la i es la variable de intentos, que tiene 3, pero el primer prompt ya es 1 entonces por eso empieza en 2, lo pongo con i-- para que vaya decrementando la variable y termina cuando es = 0
for (let i = 2; i >= 0; i--) {
  if (verificarPin()) {
    console.log("Pin correcto! ");
    mostrarMenu();
    // uso while (){ switch(){case x: break; default: process.exit();}}
    while (opcion !== 6) {
      opcion = parseInt(prompt("ingresa una opcion: "));
      switch (opcion) {
        case 1:
          consulta();
          mostrarMenu();
          break;
        case 2:
          suma();
          mostrarMenu();
          break;
        case 3:
          resta();
          mostrarMenu();
          break;
        case 4:
          producto();
          mostrarMenu();
          break;
        case 5:
          division();
          mostrarMenu();
          break;
        case 6:
          salida();
          process.exit();
        default:
          console.log("Opcion digitada incorrecta");
          break;
      }
    }
  } else {
    console.log(`El pin no es correcto, te quedan ${i} intentos`);
  }
}
