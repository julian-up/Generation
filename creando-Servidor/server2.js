const http = require('http');
const PORT = 3000;
//trae un modeulo de js para crear una pagina web

// Creamos el servidor

const server = http.createServer((req,res) => {
    res.end('Hola amor de mi vida te amo mucho')
});

// el metodo create server se le pasan dos parametros, uno de solicitud y otro de respeusta, y le digo que la respuesta cuando se solicute sera ese mensaje

server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});

// investigar    