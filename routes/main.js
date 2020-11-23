const express = require('express');
const router = express.Router();

const mainController = require('../controller/mainController');

// Ruta Raíz / ➝ Home
app.get('/', mainController.index);
// Ruta Créditos
app.get('/creditos', mainController.creditos);

module.exports = router;
