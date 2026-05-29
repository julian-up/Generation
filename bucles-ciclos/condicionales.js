if(5<4){
    console.log('N');
}
if (4<5){
    console.log('Y');
}
if ('name' === 'NAME'){ // = igual es asignacion, == igual en valor, === igual en valor y tipo
    console.log('O');
}

if (10 % 2 === 0){
    console.log('E');
}

if (10 % 3 === 0){
    console.log('T');
}

if ((4 * 6) === 24){
    console.log('S');
}

const prompt = require('prompt-sync')();
let comida = prompt('¿Cuál es tu comida favorita?').trim();

if (comida == 'sushi'){
    console.log('¡Me encanta el sushi!');
} else if (comida == 'guayaba'){
    console.log('¡La guayaba es deliciosa!');
} else if (comida == 'pizza'){
    console.log('la pizza es muy deliicosa');
} else {
 console.log('No la habia escuchado antes');
}

// Metodos mas comunes para comparar cadenas de texto

