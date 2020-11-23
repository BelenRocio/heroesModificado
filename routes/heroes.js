const express = require('express');
const router = express.Router();

const hero = require('../controllers/heroesController')

// Ruta /heroes/n ➝ se envía el nombre y profesión del héroe solicitado
router.get('/detalle/:id', hero.detalle);

// Ruta /heroes/n/bio ➝ se envía la bio del héroe solicitado
router.get('/bio/id/ok?', hero.bio);

module.exports = router;