const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const genres = require('./genres.js');
const videogames = require ('./videogames.js');
const videogame = require ('./videogame.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', genres);
router.use('/', videogames);
router.use('/', videogame);

module.exports = router;
