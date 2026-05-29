// CURL => cliente url. ahi le estoy haciedo una solicitud sin necesidad de escribir codigo, no descargamos nada vamos es a la pagina y nos retorna informacion propiamente de ese programa.


// fetch es para ir a buscar la informacion de esa URL, de lo que sea que nos vaya a mostrar la API,
// then dice = lo que sea que me traiga esta url lo guardamos en response. y despues la convierte a formato json.
// entonces despues todo ese formato json se guarda en data.
// Log me muestra por la terminal la informacion

// asi se hace una solicitud basica :


// fetch('https://dragonball-api.com/api/characters').then(response => response.json()).then(data => {
//     console.log('esta es la data: ', data/*.items[0].description*/); 
//     // Creo una variable con math.floor que quita decimales, y math.random que hace una operacion matematica que trae cualquier numero, y lo multiplico por la longitud de los items de la data que traigo del api. y luego traigo el nombre
//     let idRandom = Math.floor(Math.random () * data.items.length);
//     console.log(`El nombre del personaje con id: ${idRandom} es ${data.items[idRandom].name}`);
    
// })
// .catch(error => {
//     console.log('hubo un error', error);
    
// });

/**/

/*
fetch('https://rickandmortyapi.com/api/character').then(response => response.json()).then(data => {
    console.log('Rick se creo en la siguiente fecha =', data.results[0].created);
    
})
*/
    
// uso funcion async cuando dependemos de algun proveedor, entonces el codigo seguira funcionando hasta que traiga esa informacion.
async function obtenerPersonajes() {
    try {
        //el response guarda la informacion de rick and morty
        //await indica que toca esperar mientras se cumple la promesa del fetch.
        const response = await fetch('https://rickandmortyapi.com/api/character')
        //despues ese response lo guardo en una variable a data convirtiendolo en formato json.
        const data = await response.json();
        //muestro los resultados del json, pero como eso es un arreglo de objetos, puedo usar los metodos de un arreglo.
        console.log(data.results[0]);
        
    } catch (error) {
        console.log(`Error ${error}`);
        
    }
}
// por ultimo llamamos la funcion para que haga algo sino no sirve.
obtenerPersonajes();