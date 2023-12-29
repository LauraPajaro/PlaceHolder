const express = require('express');
const app = express();
const port = 5000;

// Sirve archivos estáticos desde el directorio actual
app.use(express.static('.'));

// Ruta principal que sirve tu archivo HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});