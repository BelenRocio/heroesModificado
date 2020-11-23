// Require de Express
const express = require('express')

// Ejecución de Express
const app = express()

const heroesRouter = require('./routes/heroes.js');

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

const mainRoute = require('/routes/main');
app.use('/',mainRoute);

// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.use('/heroes', heroesRouter);

const heroesDetalle = require('/routes/heroes');
app.use('/heroes/detalle/:id', heroesDetalle);


const heroesBio = require('/routes/heroes');
app.use('/heroes/bio/id/ok?', heroesBio);

