// Desafio Fizzbuzz - Julian Santiago Gonzalez Malpica

// Este programa debe imprimir los numeros del 1 al 100
// - si es divisible por 3, imprimir "Fizz"
// - si es divisible por 5, imprimir "Buzz"
// - si es divisible por 3 y por 5, imprimir "FizzBuzz"
// - en caso contrario, imprimir el numero

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}   