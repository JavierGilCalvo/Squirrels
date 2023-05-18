/*
    1.- Mongoose y dotenv
    2.- Función para conectar a la Base de Datos usando mongoose.
*/
const mongoose = require('mongoose')
require('dotenv').config()

const MONGO_URI = process.env.MONGO_URI

const options = {
  dbName: 'Squirrels'
}

exports.connect = async () => {
  await mongoose.connect(MONGO_URI, options).then(() => {
    console.log('Succesfully connected to database...')
  }).catch((error) => {
    console.log('Error while connecting. Terminating app...')
    console.error(error)
    process.exit(1)
  })
}
