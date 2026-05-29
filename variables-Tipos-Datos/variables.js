let nombre = "Natalia";
console.log(nombre);
let edad = 20;
console.log(edad);

// operadores matematicos, suma, resta, multiplicacion, division
// ¿que signifca let? significa que el valor puede cambiar, es decir, se puede reasignar un nuevo valor a la variable, a diferencia de const que no se puede reasignar un nuevo valor a la variable, es decir, es constante.

let precioPan = 500; // buenas practicas de declaracion de variables, usar camelCase, es decir, la primera letra de cada palabra en mayuscula, excepto la primera palabra que va en minuscula
let precioLeche = 1500;
let precioCafe = 2000;

let totalCompra = precioPan + precioLeche + precioCafe;
console.log("El total de la compra es: " + totalCompra);

// operadores de asignacion, suma, resta, multiplicacion, division
// +=, -=, *=, /=

totalCompra += 500; // totalCompra = totalCompra + 500
console.log('El total de la compra mas 500 es: ' + totalCompra);

totalCompra -= 200; // totalCompra = totalCompra - 200
console.log('El total de la compra menos 200 es: ' + totalCompra);

//pascalCase, camelCase, snake_case, kebab-case

let MivariableEjemplo

//camelCase, es la forma mas comun de declarar variables en js, la primera letra de cada palabra en mayuscula, excepto la primera palabra que va en minuscula

let mi_variable_ejemplo

//snake_case, es la forma de declarar variables en js, la primera letra de cada palabra en minuscula, y se separan las palabras con guion bajo

//let mi-variable-ejemplo

//kebab-case, es la forma de declarar variables en js, la primera letra de cada palabra en minuscula, y se separan las palabras con guion medio, pero no es una buena practica de declaracion de variables en js, ya que el guion medio se interpreta como un operador de resta, por lo que no se puede usar para declarar variables en js.

// no se pueden usar espacios en blanco, ni caracteres especiales, ni numeros al inicio de la variable, ni palabras reservadas de js como var, let, const, etc. Solamente usan mayusculas para declarar constantes.

let suma = 15 + 10;
let resta = 15 - 10;
let multiplicacion = 15 * 10;
let division = 15 / 10;
let residuo = 15 % 10; // el residuo de la division, es decir, el resto de la division, en este caso es 5, porque 15 dividido entre 10 da un cociente de 1 y un residuo de 5.
let potencia = 15 ** 2; // la potencia de un numero, en este caso es 225, porque 15 elevado a la potencia de 2 es igual a 15 multiplicado por si mismo, es decir, 15 * 15 = 225.

let nombreEstudiante = "Natalia";
let apellidoEstudiante = "Prada";
let ciudadEstudiante = "Bogota";

let mensajeBackTicks = `Hola, mi nombre es ${nombreEstudiante} ${apellidoEstudiante} y vivo en ${ciudadEstudiante}`;

console.log(mensajeBackTicks);

// Boleano solamente tiene dos valores. Verdadero o Falso, y se configuran con true o false, sin comillas, porque si se ponen comillas se convierten en string y no en booleano.

let esMayorDeEdad = edad >= 18; // el operador de comparacion mayor o igual que, devuelve un valor booleano, en este caso true, porque 20 es mayor o igual que 18.

console.log('Es mayor de edad puede entrar: ' + esMayorDeEdad);

// Operadores de comparacion 

/*
Mayor que: >
Menor que: <
Mayor o igual que: >=
Menor o igual que: <=
Igual a: ==
Igual en valor y tipo: ===
Diferente a: !=
Diferente en valor o tipo: !==
*/

// Array, es una estructura de datos que permite almacenar una lista de elementos, y se declaran con corchetes [], y los elementos se separan por comas.

let familiaDeFlores = ["Rosa", "Tulipan", "Girasol", "Lirio"];
console.log(familiaDeFlores);

// Objeto, es una estructura de datos que permite almacenar una colección de propiedades y métodos, y se declaran con llaves {}, y las propiedades se separan por comas.

console.log('primer elemento del array: ' + familiaDeFlores[0]); // para acceder a un elemento del array, se usa el indice del elemento, que empieza desde 0, es decir, el primer elemento del array tiene indice 0, el segundo elemento tiene indice 1, y asi sucesivamente.

console.log(`Primer elemento del la familia de las flores: ${familiaDeFlores[0]}`); // otra forma de acceder a un elemento del array, usando backticks y la sintaxis ${} para insertar el valor de la variable en el string.