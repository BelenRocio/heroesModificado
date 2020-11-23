const express = require('express');
const router = express.Router();

const mainController = require('../controller/mainController');

// Ruta Raíz / ➝ Home
app.get('/', mainController.index);

// Ruta Créditos
app.get('/creditos', mainController.creditos);

// Ruta... ¿Pára qué sirve esto?
app.get('*', mainController.error);

module.exports = router;
