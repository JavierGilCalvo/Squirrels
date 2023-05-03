const express = require('express')

const app = express()

const PORT = process.env.PORT || 3001

app.use(express.json())

app.get('/', (req, res) => {
  res.send('HOME')
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
