const { log } = require("node:console");

let nombre = 'Norma';
let edad = 51;
let esMayorDeEdad = true; // false

console.log(`El nombre de mi mama es: ${nombre}`);
//hacer esto es interpolacion de variables, es decir, insertar el valor de una variable dentro de un string, utilizando las comillas invertidas (backticks) y la sintaxis ${variable} para insertar el valor de la variable dentro del string.
console.log('El nombre de mi mama es: ', nombre);

//operadores arimeticos

// suma (+)
// resta (-)
// multiplicacion (*)
// division (/)
// residuo (%)
// potencia (**)

let potencia = 5 ** 2; // la potencia de un numero, en este caso es 25, porque 5 elevado a la potencia de 2 es igual a 5 multiplicado por si mismo, es decir, 5 * 5 = 25.


let lista_de_regalos = ['muñeca', 'carro', 'pelota', 'rompecabezas', 2300];

console.log('Primer elemento de la lista de regalos: (índice:0)', lista_de_regalos[0]);

// Cuantos elementos tiene un arreglo.
console.log('Cantidad de elemntos:', lista_de_regalos.length);

// Como agregamos o quitamos elemntos a un arreglo?

lista_de_regalos.push('play4');
console.log('Cantidad de elemntos nueva:', lista_de_regalos.length);
lista_de_regalos.pop();
// con el pop elimine el ultimo elemnto de la lista.
console.log('Cantidad de elemntos nueva:', lista_de_regalos.length);
// como agregar un elemento en la mitad del arreglo?
lista_de_regalos.splice(2, 0, 'lego'); // el primer parametro es el indice donde quiero agregar el elemento, el segundo parametro es la cantidad de elementos que quiero eliminar, en este caso 0 porque no quiero eliminar ningun elemento, y el tercer parametro es el elemento que quiero agregar.
console.log(lista_de_regalos);

// agregar elemnto al inicio de la lista

lista_de_regalos.unshift('puzzle');
console.log(lista_de_regalos);


// Objeto es una estructura de datos que guarda la informacion en pares. clave-valor, y se declaran con llaves {}.

let persona = {
    nombre: 'Norma',
    edad: 51,
    ciudad: 'Bogota',
    hobbies: ['leer', 'cocinar', 'viajar']
};

console.log('El nombre de la persona es: ', persona.nombre); // para acceder a una propiedad del objeto, se usa la sintaxis objeto.propiedad, en este caso persona.nombre para acceder al nombre de la persona.

console.log(`El nombre de la persona es: ${persona.nombre}`); // otra forma de acceder a una propiedad del objeto, usando backticks y la sintaxis ${} para insertar el valor de la variable en el string.

// como agregar una nueva propiedad a un objeto?

persona.profesion = 'Ingeniera';
console.log(persona);

// como eliminar una propiedad de un objeto?

delete persona.ciudad;
console.log(persona);

// como modificar el valor de una propiedad de un objeto?

persona.edad = 52;
console.log(persona);

// si tenemos varios usuarios para agregar varios valores tenemos que tener esos usuarios dentro del mismo objeto y entrar con nombre de usuario para acceder a cada uno de ellos, por ejemplo:

let usuarios = {
    norma: {
        nombre: 'Norma',
        edad: 51,
        ciudad: 'Bogota',
        hobbies: ['leer', 'cocinar', 'viajar']
    },
    juan: {
        nombre: 'Juan',
        edad: 30,
        ciudad: 'Medellin',
        hobbies: ['futbol', 'musica', 'cine']
    }
};

console.log(usuarios.norma); // para acceder a la informacion de norma, se usa la sintaxis objeto.propiedad, en este caso usuarios.norma para acceder a la informacion de norma.

console.log(usuarios.juan); // para acceder a la informacion de juan, se usa la sintaxis objeto.propiedad, en este caso usuarios.juan para acceder a la informacion de juan.

let prodcuto = {
    nombre: 'MacBook',
    precio: 5600000,
    caracteristicas: {
        color: 'gris',
        peso: '1.4 kg',
        procesador: 'M1'
    },
    etiquetas: ['tecnologia', 'computadora', 'portatil']
};

console.log(prodcuto);

// accediendo a las etiquetas del producto
console.log(prodcuto.etiquetas[0]); // para acceder a las etiquetas del producto, se usa la sintaxis objeto.propiedad, en este caso prodcuto.etiquetas para acceder a las etiquetas del producto.
