const busynessRouter = require('express').Router()
const data = require('../db.json')
const url = "https://timeapi.io/api/time/current/zone?timeZone=America%2FPhoenix"
const axios = require('axios'); 


function findBusynessScore(convertedTime, currentDay) {
  let array = data.knowledge_graph.popular_times.graph_results[currentDay]
  let time = convertedTime
  let busynessObject = array.find(item => {

    return item.time.replace(/\s/g, "") === time.replace(/\s/g, "")
  })
  return busynessObject ? busynessObject.busyness_score : "SRAC IS CURRENTLY CLOSED";
}
function convertTime(currentHour) {
  let hour = currentHour;

  if (hour.startsWith(13) || hour.startsWith(14) || hour.startsWith(15) || hour.startsWith(16) || hour.startsWith(17) || hour.startsWith(18) ||  
  hour.startsWith(19) || hour.startsWith(20) || hour.startsWith(21) || hour.startsWith(22) || hour.startsWith(23) || hour.startsWith(24)) {
    let time = hour.substring(0,2)
    time = parseInt(time)
    time = time-12
    return time+" PM";
  }
  else if (hour.startsWith(0)) {
    let time = "12 AM"
    return time
  }
  else if (hour.startsWith(12)) {
    let time = hour.substring(0,2)
    return time + " PM"
  }
  else if (hour.startsWith(10) || hour.startsWith(11)) {
    let time = hour.substring(0,2)

    return time + " AM"
  }
  else {
    let time = hour.substring(0,1)
    return time + " AM"
  }
}
async function getTime() {
  try {
    const result = await axios.get(url);
    const data = result.data.time;
    return data

  } catch (error) {
    console.error("Error ", error);
    response.status(500).json({ error: 'Could not get time data' });
  }
}
async function getDay() {
  try {
    const result = await axios.get(url);
    const data = result.data.dayOfWeek;
    return data
    
  } catch (error) {
    console.error("Error ", error);
    response.status(500).json({ error: 'Could not get time data' });
  }
}
busynessRouter.get('/', async (request, response) => {
  try {
    const currentHour = await getTime();
    let currentDay = await getDay();
    currentDay = currentDay.toLowerCase()

    const convertedTime = convertTime(currentHour)

    const busyness = findBusynessScore(convertedTime, currentDay)

    currentDay = currentDay.charAt(0).toUpperCase() + currentDay.slice(1) //capitalizing first letter
    response.json({"busyness": busyness, "day": currentDay})

  } catch (error) {
    console.error("Error in fetching busyness score: ", error);
    response.status(500).json({ error: 'Could not retrieve busyness score' });
  }
  })

module.exports = busynessRouter