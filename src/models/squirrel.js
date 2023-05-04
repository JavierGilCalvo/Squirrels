/*
    1.- Mongoose para crear el esquema y joi para validar.
    2.- Crear un nuevo esquema de Mongoose.
    3.- Modelar un objeto de Ardilla usando el esquema.
    4.- Validar una nueva Ardilla.
    5.- Exportar el modelo y la función para validar.
*/
const mongoose = require('mongoose')
const Joi = require('joi')

const squirrelSchema = new mongoose.Schema({
  X: { type: Number, default: false },
  Y: { type: Number, default: false },
  'Unique Squirrel ID': { type: String, default: null },
  Hectare: { type: String, default: null },
  Shift: { type: String, default: null },
  Date: { type: Date, default: Date.now },
  'Hectare Squirrel Number': { type: Number, default: 0 },
  'Combination of Primary and Highlight Color': { type: String, default: null },
  Running: { type: Boolean, default: false },
  Chasing: { type: Boolean, default: false },
  Climbing: { type: Boolean, default: false },
  Eating: { type: Boolean, default: false },
  Foraging: { type: Boolean, default: false },
  Kuks: { type: Boolean, default: false },
  Quaas: { type: Boolean, default: false },
  Moans: { type: Boolean, default: false },
  'Tail flags': { type: Boolean, default: false },
  'Tail twitches': { type: Boolean, default: false },
  Approaches: { type: Boolean, default: false },
  Indifferent: { type: Boolean, default: false },
  'Runs from': { type: Boolean, default: false },
  'Lat/Long': { type: String, default: null }
})

const Squirrel = mongoose.model('squirrel', squirrelSchema)

const validate = (squirrel) => {
  const schema = Joi.object({
    X: Joi.number().required(),
    Y: Joi.number().required(),
    'Unique Squirrel ID': Joi.string().required(),
    'Combination of Primary and Highlight Color': Joi.string().required()
  })

  return schema.validate(squirrel)
}

module.exports = { Squirrel, validate }
