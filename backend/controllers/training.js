const trainingRouter = require('express').Router()
const config = require('../utils/config')
const axios = require('axios'); 

trainingRouter.get('/', async (request, response) => {

  response.json("HASHIRA TRAINING")
  })


module.exports = trainingRouter