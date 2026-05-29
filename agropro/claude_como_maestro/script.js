// VARIABLES Y TIPOS DE DATOS
/*
const nombre = 'Cafe';
let precio = 100000;
let disponible = true;
const categorias = ['arabica','eugenoides','java'];

console.log('Nuestro producto insignia es:', nombre);
console.log('El precio que manejamos por libra es:', precio);
console.log('¿Se encuentra disponible?', disponible);
console.log('¿Cuales son las especies que tenemos?:', categorias);

// en js un array es constante solo por la declaracion de su nombre y no por su conteido, debemos tener cuidado porque en otros lenguajes no funciona dela misma manera..
categorias.push('bourbon');

console.log(categorias);
*/

// =====FUNCIONES Y SCOPE======

// function miFunction () {} vs const miFunction = () => {}
// El scope define donde vive cada variable, una variable dentro de {}, no existe fuera.

// situacion:
// "Como usuario de AgroData Pro, quiero ver el precio final de un producto agrícola con IVA incluido, para saber cuánto voy a pagar realmente."

// Lo que debes crear:
// Dos funciones en tu archivo producto.js, en este orden exacto:
// Función 1 — calcularPrecioConIVA

// Recibe dos parámetros: precio y porcentajeIVA
// Hace el cálculo internamente
// Retorna el resultado (no lo imprime, solo lo retorna)

// Función 2 — mostrarProducto

// Recibe nombre y precio
// Internamente llama a calcularPrecioConIVA usando el precio que recibió
// Usa el IVA del 19% que aplica en Colombia para productos procesados
// Ella sí imprime todo en consola con mensajes descriptivos

// Luego llama a mostrarProducto con los datos de tu café.

// const calcularPrecioConIVA = (precio, porcentajeIVA) => {
//     return (precio * porcentajeIVA) + precio;
// };

// const mostrarProducto = (nombre, precio, porcentajeIVA) => {
//     console.log(`El producto es ${nombre} y su precio con IVA es:`,calcularPrecioConIVA(precio, porcentajeIVA));
// };

// mostrarProducto('Maíz', 10000, .19);
// mostrarProducto('Cafe', 14700, .5);

// ==== Arrays y objetos ====

// Lo que debes crear:
// Un array llamado cultivos con 4 objetos. Cada objeto representa un cultivo colombiano real con esta estructura:
// js// Así se ve UN objeto dentro del array, tú creas los 4
// {
//     id: ...,
//     nombre: ...,
//     rendimientoToneladas: ...,
//     precio: ...
// }
// Luego usa .filter() para quedarte solo con los cultivos cuyo rendimientoToneladas sea mayor a 5, guarda ese resultado en una variable y muéstralo en consola.

// Criterios de calificación (sobre 10):
// CriterioPuntosEstructura correcta: array de objetos con las 4 propiedades2 ptsLos datos son cultivos colombianos reales y coherentes2 pts.filter() aplicado correctamente con arrow function3 ptsResultado guardado en variable nueva, sin mutar el original2 ptsComentarios explicando decisiones clave — Definition of Done1 pt

// Dos pistas antes de arrancar:
// .filter() recibe una función que debe retornar true o false por cada elemento. Los que retornen true quedan en el nuevo array, los demás se descartan.
// El array original cultivos no debe cambiar después del filter. Si lo verificas con un console.log antes y después, deben ser idénticos.
// ¡Escribe el código, recuerda tu Definition of Done, y pégalo aquí!

//Organizamos un arreglo de objetos con las claves requeridas y los valores agregados en base a datos, haria falta colocar una variable de metros cuadrados para especificar el rendimiento por m2.
const cultivos = [
    {
        id: 0,
        nombre: 'Fresa',
        rendimientoToneladas: 2,
        precio: 13000
    },
    {
        id: 1,
        nombre: 'Mango',
        rendimientoToneladas: 7,
        precio: 20000
    },
    {
        id: 2,
        nombre: 'Mandarina',
        rendimientoToneladas: 5,
        precio: 1200
    },
    {
        id: 3,
        nombre: 'Lulo',
        rendimientoToneladas: 10,
        precio: 18000
    },
];

//creo una nueva variable cultivoExportacion en la cual vamos a hacer el filtro del rendimiento con la condicion deseada. a el filtro le asigno la variable cultivo y luego le asigno a cultivo el rendimiento en toneldas mayor o igual que 5.
const cultivoExportacion = cultivos.filter(cultivo => cultivo.rendimientoToneladas > 5);

/*  En scrum definimos si va >= en la reunión de refinamiento del backlog */

console.log(cultivoExportacion);
console.log(cultivos);


