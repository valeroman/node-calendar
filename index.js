const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
require('dotenv').config();


// Crear servidor express
const app = express();

// Base de datos
dbConnection()

// CORS
app.use(cors());


// Habilitar la carpeta public
// use en express = middleware que es una funcion que se ejecuta
// cuando se hace una peticion al servidor
app.use(express.static('public'));


// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));




// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${ process.env.PORT }`);
});