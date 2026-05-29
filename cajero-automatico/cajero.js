// en este documento vamos a hacer una actividad de un cajero automatico, pedir un PIN  y luego mostrar un menu con opcioens a realizar diferentes operacioens usando las 4 operaciones matematicas basicas, y luego mostrar el saldo final despues de realizar las operaciones, y que el usuario pueda salir del menu cuando quiera.


let mensaje = 'Bienvenido al cajero automatico del grupo 16, por favor ingresa tu PIN para continuar';

console.log(mensaje);

const prompt = require('prompt-sync')();

let pinCorrecto = prompt('Ingresa tu PIN: ');


//Comprobar si el PIN es correcto, si es correcto mostrar el menu, si no es correcto mostrar un mensaje de error y salir del programa.

if (pinCorrecto === '1234') {
    console.log('PIN correcto, bienvenido al cajero automatico');
} else {
    console.log('PIN incorrecto, por favor intenta de nuevo');
    process.exit();
}

let saldo = 500000; // saldo inicial del usuario

let opcion = 0;

while (opcion !== 5) {
    console.log(`
    
    MENU PRINCIPAL

    1. Consultar saldo
    2. Retirar dinero
    3. Depositar dinero
    4. Transferir dinero
    5. Salir
    
    `);

    opcion = parseInt(prompt('Selecciona una opción del 1 al 5: '));

    switch (opcion) {
        case 1:
            console.log(`Tu saldo actual es: $${saldo}`);
            break;
        case 2:
            let retiro = parseInt(prompt('¿Cuánto dinero deseas retirar? '));
            if (retiro > saldo) {
                console.log('No tienes suficiente saldo para realizar esta operación');
            } else {
                saldo -= retiro;
                console.log(`Has retirado $${retiro}. Tu nuevo saldo es: $${saldo}`);
            }
            break;
        case 3:
            let deposito = parseInt(prompt('¿Cuánto dinero deseas depositar? '));
            saldo += deposito;
            console.log(`Has depositado $${deposito}. Tu nuevo saldo es: $${saldo}`);
            break;
        case 4:
            let transferencia = parseInt(prompt('¿Cuánto dinero deseas transferir? '));
            if (transferencia > saldo) {
                console.log('No tienes suficiente saldo para realizar esta operación');
            } else {
                let destinatario = prompt('Ingresa el nombre del    destinatario: ');
                saldo -= transferencia;
                console.log(`Has transferido $${transferencia} a ${destinatario}. Tu nuevo saldo es: $${saldo}`);
            }
            break;
        case 5:
            console.log('Gracias por usar el cajero automatico, hasta luego');
            break;
        default:
            console.log('Opción no válida, por favor selecciona una opción del 1 al 5');
    }
}   