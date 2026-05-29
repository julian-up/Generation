/* let nota = "B";
let mensaje;

switch (nota) {
    case "A":
        mensaje = "Excelente";
        break;
    case "B":
        mensaje = "Muy bien";
        break;
    case "C":
        mensaje = "Bien";
        break;
    case "D":
        mensaje = "Suficiente";
        break;
    case "F":
        mensaje = "Insuficiente";
        break;
    default:
        mensaje = "Nota no válida";
}

console.log(mensaje); */

// ahora vamos a ver una fusion de swich y while y que ingrese informacion por la consola

const prompt = require('prompt-sync')();

let opcion = 0;

console.log(`
    
    Bienvenido al chat de Julian Gonzalez Malpica
    
    `);

    while (opcion !== 5) {
        
        console.log(`
        
            MENU PRINCIPAL

            1. Saludar
            2. Preguntar por el clima
            3. Contar un chiste
            4. Despedirse
            5. Salir
        
        `);

    opcion = parseInt(prompt('Selecciona una opción del 1 al 5: '));

    switch (opcion) {
        case 1:
            console.log('¡Hola! ¿Cómo estás?');
            break;
        case 2:
            console.log('El clima está soleado y cálido.');
            break;
        case 3:
            console.log('¿Por qué el libro de matemáticas se sentía triste? Porque tenía muchos problemas.');
            break;
        case 4:
            console.log('¡Adiós Que tengas un buen día.');
            break;
        case 5:
            console.log('Saliendo del chat. ¡Hasta luego!');
            break;
        default:
            console.log('Opción no válida. Por favor, selecciona una opción del 1 al 5.');
    }
}
