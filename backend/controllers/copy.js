const copyRouter = require('express').Router()
const data = require('../db.json')


copyRouter.get('/', async (request, response) => {

    console.log(data)
    response.json(data.knowledge_graph.raw_hours)
  })

module.exports = copyRouter