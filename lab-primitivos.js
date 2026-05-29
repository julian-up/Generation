// // 1. Variables y Tipos de Datos
// // Declarar variables y usar tipos de datos primitivo
// // (number, string, boolean, null, undefined)

// // Ejercicio 1:
// // •Crea una variable nombre con tu nombre.
// // •Crea una variable edad con tu edad.
// // •Crea una variable esEstudiante con true o false.

// const nombre = "julian";
// let edad = 22;
// let esEstudiante = true;

// // Ejercicio 2:
// // •Declara una variable sinValor sin asignarle nada (queda undefined).
// // •Declara una variable valorNulo y asígnale null.
// // •Muestra ambas en consola y observa la diferencia

// let sinValor;
// let valorNulo = null;
// console.log(
//   `variable sin valor ${sinValor}, y variable con valor nulo ${valorNulo}`,
// );

// // 2. Ingreso de Datos por Teclado
// // Usar prompt() para pedir datos al usuario.

const prompt = require("prompt-sync")();

// const year = new Date().getFullYear();
// const born = parseInt(prompt("Que anio naciste?"));

// if (born == 0 || isNaN(born)) {
//   console.log(`Digitaste ${born}, es una opcion incorrecta`);
// } else if (born <= 1900) {
//   console.log(`Increible, tienes ${year - born} anios`);
// } else {
//   console.log(`Genial, tienes ${year - born} anios`);
// }

// // Ejercicio 2:
// // •Pide dos números con prompt().
// // •Convierte los datos a número.
// // •Muestra la suma en consola.
// const mensaje = console.log("digita 2 numeros porfavor.");
// let x = parseInt(prompt("x = "));
// let y = parseInt(prompt("y = "));
// console.log(`La suma de tus dos numeros es ${x + y}`);

// // 3. Condicional if
// // Tomar decisiones con if, else if, else.
// // Ejercicio 1:
// // •Pide al usuario su edad.
// // •Si es mayor o igual a 18, muestra "Puedes entrar".
// // •Si no, muestra "No puedes entrar"

// console.log("Porfavor ingresa tu edad para entrar a la discode -.-");
// edad = parseInt(prompt("Edad: "));
// if (edad < 18) {
//   console.log("Eres menor de edad, no puedes discodear");
// } else if (edad >= 18) {
//   console.log("sigue y discodea");
// }

// // Ejercicio 2:
// // •Pide un número.
// // •Si es positivo, muestra "Es positivo".
// // •Si es negativo, muestra "Es negativo".
// // •Si es cero, muestra "Es cero".

// let numero = parseInt(prompt("Porfavor ingresa un numero para validar: "));
// if (numero == 0) {
//   console.log("tu numero es 0");
// } else if (numero < 0) {
//   console.log("tu numero es negativo");
// } else if (numero > 0) {
//   console.log("tu numero es positivo");
// }

// 4. Bucle while
// Repetir código mientras una condición sea verdadera.
// Ejercicio 1:
// •Pide un número con prompt().
// •Usa un while para contar desde 1 hasta ese número.
// •Muestra cada número en consola.

// let numero = parseInt(prompt("Ingresa un numero porfavor."));
// if (isNaN(numero)) {
//   console.log("Solo se aceptan numeros");
// } else if (numero > 0) {
//   while (numero > 0) {
//     console.log(--numero);
//   }
// }
// Ejercicio 2:
// •Pide una contraseña con prompt().
// •Usa un while para seguir preguntando hasta que ingrese "1234".
// •Cuando acierte, muestra "Contraseña correcta".

// const contraseña = 1234;
// let contraseñaIngresada;

// do {
//   contraseñaIngresada = parseInt(prompt("Ingresa contraseña"));
// } while (contraseñaIngresada !== contraseña);
// {
//   if (contraseñaIngresada == contraseña) {
//     console.log("ingreso exitoso");
//   }

//   process.exit();
// }

// 5. Bucle for
// Repetir código un número exacto de veces.
// Ejercicio 1:
// •Usa un for para imprimir los números del 1 al 10 en consola.

// for (let i = 1; i <= 10; i++) {
//   console.log(`este codigo se repitio ${i} veces`);
// }

// Ejercicio 2:
// •Pide un número con prompt().
// •Usa un for para mostrar la tabla de multiplicar de ese número (del 1 al 10)

// let numero = parseInt(prompt("ingresa un numero: "));
// for (let i = 1; i <= 10; i++) {
//   console.log(`${numero * i}`);
// }
