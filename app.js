// Require de Express
const express = require('express')

// Ejecución de Express
const app = express()

const heroesRouter = require('./routes/heroes.js');
const mainRoute = require('/routes/main');

// Levantando el Servidor en el puerto 3030
app.listen(3030, () => console.log('Server running in 3030 port'));

app.use('/',mainRoute);
app.use('/heroes', heroesRouter);

