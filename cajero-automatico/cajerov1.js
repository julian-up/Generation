const prompt = require("prompt-sync")();

let saldo = 500000;
const pinCorrecto = "1234";

console.log("Bienvenido al cajero automatico con conversion de divisas");

let pinIngresado = prompt("ingresa tu PIN: ");

if (pinIngresado !== pinCorrecto) {
  console.log("El pin ingresado no es correcto, intentalo nuevamente.");
} else {
  console.log("Bievenido al sistema de cajero");
  let opcion = 0;
  while (opcion !== 6) {
    console.log(`
        Menu principal

        1. Consultar saldo
        2. Retirar dinero
        3. Enviar dinero
        4. Calcula tu retabilidad con nosotros (%10 anual)
        5. Convertir tu saldo en dolares
        6. Salir
        `);
    console.log();

    opcion = parseInt(prompt("Selecciona alguna opcion: "));
    switch (opcion) {
      case 1:
        console.log(`Su saldo actual es ${saldo}`);
        break;
      case 2:
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
        break;
      case 3:
        console.log(`¿Cuanto dinero quieres depositar?`);
        let cantidadDeposito = parseInt(
          prompt("Ingresa el valor de tu deposito: "),
        );
        if (cantidadDeposito <= 0) {
          console.log("El retiro que estas haciendo no es valido");
        } else if (cantidadDeposito >= 3000000) {
          console.log("No puedes hacer depositos de 3000000 o mas. ");
        } else {
          saldo = saldo + cantidadDeposito;
          console.log(`Proceso correcto, el saldo actual es ${saldo}`);
        }
        break;
      case 4:
        console.log(`Su saldo actual es ${saldo}`);
        let ganancia = saldo * 0.1;
        console.log(
          `Tu rentabilidad del 10% en un año es ${ganancia} y tu ganancia con tu saldo actual es ${saldo + ganancia}`,
        );
        console.log(
          "la operacion que usamos para calcular el 10% es tu saldo multiplicado por 0.1",
        );
        break;
      case 5:
        console.log(`Su dinero en dolares es ${saldo / 3670}`); //tomamos esa tasa de una casa de cambio en https://goldbusiness.app
        break;
      case 6:
        console.log(`Haz cerrado sesion`);
        process.exit();
        break;
      default:
        console.log("Haz ingresado una opcion invalida.");
        break;
    }
  }
}
