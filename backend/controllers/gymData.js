const gymDataRouter = require('express').Router()
const config = require('../utils/config')
const axios = require('axios'); 
const { getJson } = require("serpapi");

gymDataRouter.get('/', async (request, response) => {
    getJson({
        api_key: config.SERP_API_KEY,
        engine: "google",
        q: "SRAC SJSU",
        google_domain: "google.com",
        gl: "us",
        hl: "en",
        location: "San Jose, California, United States"
      }, (json) => {
        response.json(json)
      });
  })


module.exports = gymDataRouter