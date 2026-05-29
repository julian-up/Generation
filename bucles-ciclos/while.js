//¿Qué ocurre si no ponemos un incremento de bucle en un bucle while?

let i = 1;
while (i < 7) {
  if (i % 2 === 0) { 
    console.log(i); 
  }
  i++; // El incremento DEBE ir aquí, afuera del if
}

// 2, 4, 6

for (let i of [1, 2, 3])
 { if (i % 2 === 1)
{ console.log(i); } }