const https = require('http');
const PORT = 5000;

const server = https.createServer((req,res) => {
    res.end('Servidor creado')
});

server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});