/*
    1.- Mongoose y dotenv
    2.- Función para conectar a la Base de Datos usando mongoose.
*/
const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI

exports.connect = () => {
  mongoose.connect(MONGO_URI).then(() => {
    console.log('Succesfully connected to database...')
  }).catch((error) => {
    console.log('Error while connecting. Terminating app...')
    console.error(error)
    process.exit(1)
  })
}
