const express = require('express')
const config = require('./utils/config')
// const app = express()
const app = require('./app')
  

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})