/*
    1. Importamos el modelo y la validación
    2. Creamos cada función
        2.1. Try - catch, se obtiene el dato (ardilla), se valida, si está todo bien, se añade o se devuelve.
        2.2. Se termina la función devolviendo un status
*/

const { Squirrel, validate } = require('../models/squirrel')

exports.getSquirrelsSightings = async (req, res) => {
  try {
    const squirrels = await Squirrel.find({}) // Getting all squirrels sightings

    res.status(201).send(squirrels)
  } catch (err) {
    console.log('Error while getting all the squirrels information...')
    console.error(err)
    res.status(400).send(err)
  }
}

exports.getSquirrelSightingsById = async (req, res) => {
  try {
    const { squirrelid } = req.params
    const squirrelData = await Squirrel.find({ 'Unique Squirrel ID': squirrelid }) // Getting all squirrels sightings with an squirrel ID

    if (squirrelData) {
      res.status(201).json({ message: `Successfully obtained squirrel data with id: ${squirrelid}`, data: squirrelData })
    }
    res.status(404).send('Squirrel not found...')
  } catch (err) {
    console.log('Error while obtaining squirrel sightings data...')
    console.error(err)
    res.status(400).send(err)
  }
}

exports.setSquirrelSighting = async (req, res) => {
  try {
    const { X, Y, squirrelId, color } = req.params
    const { error } = validate({ X, Y, 'Unique Squirrel ID': squirrelId, 'Combination of Primary and Highlight Color': color })

    if (error) { res.status(400).send(error) }

    const newSquirrelSighting = await Squirrel.create({
      X, Y, 'Unique Squirrel ID': squirrelId, 'Combination of Primary and Highlight Color': color
    })

    res.status(201).send({ message: 'Successfully created a new squirrel sighting...', data: newSquirrelSighting })
  } catch (err) {
    console.log('Error while creating a new squirrel sighting...')
    console.error(err)
    res.status(400).send(err)
  }
}
