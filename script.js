var entradaA = prompt("Ingresa el primer número:");
var entradaB = prompt("Ingresa el segundo número:");

var numeroA = Number(entradaA);
var numeroB = Number(entradaB);

var resultado = document.getElementById("resultado");

if (entradaA === null || entradaB === null) {
    resultado.innerHTML = '<h3>Operación cancelada</h3>' +
        '<p class="comparacion igual">No ingresaste los números.</p>';
    console.log("Operación cancelada por el usuario.");

} else if (entradaA.trim() === "" || entradaB.trim() === "") {
    resultado.innerHTML = '<h3>Error</h3>' +
        '<p class="error">Debes ingresar ambos números. No puedes dejar campos vacíos.</p>';
    console.log("Error: se dejaron campos vacíos.");

} else if (isNaN(numeroA) || isNaN(numeroB)) {
    resultado.innerHTML = '<h3>Error</h3>' +
        '<p class="error">\"' + entradaA + '\" o \"' + entradaB + '\" no es un número válido. Intenta de nuevo.</p>';
    console.log("Error: entrada no numérica. Se ingresó: " + entradaA + " y " + entradaB);

} else {
    var numerosHTML = '<span class="numero">' + numeroA + '</span>' +
        '<span class="numero">' + numeroB + '</span>';

    if (numeroA > numeroB) {
        resultado.innerHTML = '<h3>Resultado</h3>' +
            numerosHTML +
            '<p class="comparacion mayor">El número ' + numeroA + ' es MAYOR que ' + numeroB + '</p>';
        console.log(numeroA + " es mayor que " + numeroB);

    } else if (numeroA < numeroB) {
        resultado.innerHTML = '<h3>Resultado</h3>' +
            numerosHTML +
            '<p class="comparacion menor">El número ' + numeroA + ' es MENOR que ' + numeroB + '</p>';
        console.log(numeroA + " es menor que " + numeroB);

    } else {
        resultado.innerHTML = '<h3>Resultado</h3>' +
            numerosHTML +
            '<p class="comparacion igual">Los números ' + numeroA + ' y ' + numeroB + ' son IGUALES</p>';
        console.log(numeroA + " y " + numeroB + " son iguales");
    }
}
