const https = require('http');
const PORT = 3000;
//trae un modeulo de js para crear una pagina web

// Creamos el servidor

const server = https.createServer((req,res) => {
    res.end('Hola equipo desde el servidor CREADO')
});

// el metodo create server se le pasan dos parametros, uno de solicitud y otro de respeusta, y le digo que la respuesta cuando se solicute sera ese mensaje

server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});

// investigar