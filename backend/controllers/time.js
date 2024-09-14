const timeRouter = require('express').Router()
const config = require('../utils/config')
const axios = require('axios'); 
const url = "https://timeapi.io/api/time/current/zone?timeZone=America%2FPhoenix"

timeRouter.get('/', async (request, response) => {

  try {
    const result = await axios.get(url);
    const data = result.data.time;
    let num = parseInt(data)
    if (num>12) {
        let hour = num-12;
        let minute = data.substring(3,5)
      let time = hour+":"+minute
      response.json(time)
    }
    else {
      response.json(data);
   }
    
    
  } catch (error) {
    console.error("Error ", error);
    response.status(500).json({ error: 'Could not get time data' });
  }
  })


module.exports = timeRouter