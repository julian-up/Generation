// Ejercicio 1: Calculadora de Propinas
// - Una app para calcular propinas en restaurantes.
// Crea una función calcularPropina(total, porcentaje) que reciba el total de la cuenta y el porcentaje de propina, y retorne el monto final a pagar (total + propina)

// Para calcular las propinas de los restaurantes usare la funcion tal como lo explica la guia
// function calcularPropina(total, porcentaje) {
//   return total * porcentaje + total;
// }

// // calculo primero el porcentaje del total y luego lo sumo al total, iba a agregar parentesis para que funcionara pero

// console.log(calcularPropina(500000, 0.1));

// Ejercicio 2: Validar Contraseña
// - Formulario de registro.
// Crea una función validarContraseña(contraseña) que retorne true si:
// - Tiene al menos 8 caracteres.
// - Incluye un número.
// - Incluye una mayúscula.

// const prompt = require("prompt-sync")();
// let contraseña = prompt("ingrese su contraseña: ");
// function validarContraseña(contraseña) {
//   if (
//     contraseña.length >= 8 &&
//     /[0-9]/.test(contraseña) &&
//     /[A-Z]/.test(contraseña)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // para que el ejemplo funcione con cualquier contraseña pido con prompt al usuario que porfavor, escriba una contraseña; evaluo que este bien escrita para retornar true si la longitud es de 8. con una expresion regular, hago un test de mi contraseña /[]/ adentro coloco el test a realizar, y luego como es a modo de funcion ya queda operando correctamente lo solicitado

// console.log(validarContraseña(contraseña));

// Ejercicio 3: Buscar Producto en Inventario
// - Sistema de gestión de inventario.
// Crea una función buscarProducto(nombre, inventario) que retorne el producto si existe, o null si no. El
// inventario debería estar PREDEFINIDO
// ejemplo:
// const inventario = [
// { nombre: "Camisa", precio: 20 },
// { nombre: "Zapatos", precio: 50 }
// ];

// const inventario = [
//   { nombre: "Camisa", precio: 20 },
//   { nombre: "Zapatos", preci: 50 },
// ];

// function buscarProducto(nombre, inventario) {
//   for (const producto of inventario) {
//     if (producto.nombre === nombre) {
//       return producto;
//     }
//   }
//   return null;
// }

// console.log(buscarProducto("Camisa", inventario));

// Ejercicio 4: Calcular Promedio de Notas
// - Plataforma educativa.
// Crea una función calcularPromedio(notas) que reciba un array de notas dado por el usuario
// (separadas por comas) y retorne el promedio (redondeado a 2 decimales).

// let notas = [3.0, 2.0, 4.0, 4.8];

// console.log(notas);

// function calcularPromedio(notas) {
//   return (
//     notas.reduce((acumulador, elemento) => acumulador + elemento, 0) /
//     notas.length
//   ).toFixed(2);
// }
// console.log(calcularPromedio(notas));

//  .reduce((acumulador, elemento) => acumulador + elemento, 0) para sumar los elementos de un array, y el 0 es el valor inicial porque la sintaxis es .reduce(reducer, initial). por ultimo notas.length para la cantidad, pero tambien me estan pidiendo que lo redondee a dos decimales, por ultimo el toFixed(2) se agrega para dejar solo con 2 decimales el codigo despues del return que es el que queda con el valor numerico.

// Ejercicio 5: Filtrar Usuarios por Edad
// - Red social.
// Dado un array de usuarios ([{ nombre: "Ana", edad: 25 }, ...]), crea una función
// filtrarUsuarios(usuarios, edadMinima) que retorne los usuarios que cumplen con la edad mínima, la
// cual será dada por el usuario, es decir, si el usuario escribe 18, debería decirle que personas de la lsita
// cumplen con tener más de 18.

// const prompt = require("prompt-sync")();

// const usuarios = [
//   { nombre: "Julian", edad: 22 },
//   { nombre: "Natalia", edad: 20 },
//   { nombre: "Juan", edad: 17 },
//   { nombre: "Emily", edad: 18 },
// ];

// let consutla = parseInt(
//   prompt("Ingrese una edad, y aparecera el usuario registrado con esa edad: "),
// );

// function filtrarUsuarios(usuarios, edadMinima) {
//   return usuarios.filter((usuario) => usuario.edad > edadMinima);
// }

// console.log(filtrarUsuarios(usuarios, consutla));

// // uso filter para asignar una variable al valor edad y lo concateno con una edad minima en la funcion, esa edad minima despues, se convierte en una funcion donde esa edad minima es la consulta del usuario, y lo trae del arreglo de objetos.

// Ejercicio 6: Contador de Palabras
// -Editor de texto.
// Crea una función contarPalabras(texto) que retorne el número de palabras en un string (separadas por
// espacios).

// let palabra = "amor de mi vida";
// function contarPalabras(texto) {
//   return texto.split(" ").length; // uso el metodo split para separar el texto en espacios y queda como un arreglo de palabras y luego con length miro la cantidad como lo pide el ejercicio.
// }
// console.log(contarPalabras(palabra));

// Ejercicio 7: Simulador de Cajero Automático
// -App bancaria.
// Crea una función retirarDinero(saldo, monto) que:
// Pide al usuario su saldo actual y el monto a retirar.
// Muestra el nuevo saldo o "Fondos insuficientes".

// const prompt = require("prompt-sync")();
// let saldo = 300000;
// let consulta = parseInt(
//   prompt(`Cuanto quieres retirar, tu saldo es de ${saldo} :`),
// );
// function retirarDinero(saldo, monto) {
//   if (monto > saldo) {
//     console.log("no puedes retirar esa cantidad");
//   } else if (monto == 0) {
//     console.log("no puedes retirar 0 pesos");
//   } else {
//     return saldo - monto;
//   }
// }
// // es el mismo ejercicio del cajero que ya habia hecho antes.
// console.log(retirarDinero(saldo, consulta));

// Ejercicio 8: Cambio de Moneda
// -App de viajes.
// Crea una función convertirMoneda(monto, monedaDestino) que convierta de pesos a USD o EUR,
// pedir al usuario monto en COP y la moneda con la que desea hacer la converción.

// const prompt = require("prompt-sync")();
// let usd = 3700;
// let eur = 4600;
// let divisa = parseInt(prompt("Digita tu cantidad en peso colombiano: "));

// function convertirMoneda(moneda, monedaDestino) {
//   return (moneda / monedaDestino).toFixed(0);
// }

// console.log(convertirMoneda(divisa, usd));
// console.log(convertirMoneda(divisa, eur));
