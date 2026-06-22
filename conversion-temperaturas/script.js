var resultado = document.getElementById("resultado");
var entrada = prompt("Ingresa la temperatura en grados Celsius:");

if (entrada === null) {
    resultado.innerHTML = '<h3>Operación cancelada</h3>' +
        '<p class="error">No ingresaste ninguna temperatura.</p>';
    console.log("Operación cancelada por el usuario.");

} else if (entrada.trim() === "") {
    resultado.innerHTML = '<h3>Error</h3>' +
        '<p class="error">El campo no puede estar vacío. Recarga la página e intenta de nuevo.</p>';
    console.log("Error: campo vacío.");

} else {
    var celsius = Number(entrada);

    if (isNaN(celsius)) {
        resultado.innerHTML = '<h3>Error</h3>' +
            '<p class="error">"' + entrada + '" no es un número válido. Recarga la página e intenta de nuevo.</p>';
        console.log("Error: \"" + entrada + "\" no es un número válido.");

    } else {
        var fahrenheit = (celsius * 9 / 5) + 32;
        var kelvin = celsius + 273.15;

        resultado.innerHTML = '<h3>Resultado</h3>' +
            '<p class="entrada">' + celsius + ' °C</p>' +
            '<div class="conversion">' +
                '<p class="conversion-item fahrenheit">Grados Fahrenheit: ' + fahrenheit + ' °F</p>' +
                '<p class="conversion-item kelvin">Grados Kelvin: ' + kelvin + ' K</p>' +
            '</div>';

        console.log("Entrada: " + celsius + " °C");
        console.log("Grados Fahrenheit: " + fahrenheit);
        console.log("Grados Kelvin: " + kelvin);
    }
}
