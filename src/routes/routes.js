/*
    1. Router de express.
    2. Importamos los controladores.
    3. Creamos las rutas para cada método en cada ruta.
    4. Exportamos el router creado
*/
const router = require('express').Router()
const squirrelController = require('../controllers/squirrel.js')

router.get('/squirrel', squirrelController.getSquirrelsSightings)

router.get('/squirrel/:squirrelid', squirrelController.getSquirrelSightingsById)

router.post('/squirrel', squirrelController.setSquirrelSighting)

module.exports = router
