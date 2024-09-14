const crowdednessRouter = require('express').Router()
const data = require('../db.json')
const url = "https://timeapi.io/api/time/current/zone?timeZone=America%2FPhoenix"
const axios = require('axios'); 


function findBusynessScore(currentHour, busynessData) {
  return busynessData.find(item => {
    let timeParts = item.time.split(" "); // Split time (e.g., ["6", "AM"])
    let hour = parseInt(timeParts[0]);

    if (timeParts[1] === 'PM' && hour !== 12) {
      hour += 12; // Convert to 24-hour format for PM times
    }

    return currentHour === hour;

  })
}

async function getTime() {
  try {
    const result = await axios.get(url);
    const data = result.data.time;
    let num = parseInt(data)
    if (num>12) {
        let hour = num-12;
        let minute = data.substring(3,5)
      let time = hour+":"+minute
      return time
    }
    else {
      return num
   }
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
crowdednessRouter.get('/', async (request, response) => {
  // const time = async () => {
  //   try {
  //     const time = await getTime()
  //     return time
  //   }
  //   catch (error) {
  //     console.log(error)
  //   }
    
  // }
  // response.json("HI")


  try {
    // const currentHour = await getTime();
    // const currentDay = await getDay()
    const currentHour = "1:12"
    let currentDay = "monday"
    currentDay = currentDay.toLowerCase()

    const popularTimes = data.knowledge_graph.popular_times.graph_results[currentDay][9].busyness_score

    if (currentHour.startsWith(10) || currentHour.startsWith(11) || currentHour.startsWith(12)) {
      response.json(currentHour.substring(0,2)+", "+currentDay)
    }
    else {
      // response.json(currentHour.substring(0,1)+", "+currentDay)
      response.json(popularTimes)
    }
  } catch (error) {
    console.error("Error in fetching busyness score: ", error);
    response.status(500).json({ error: 'Could not retrieve busyness score' });
  }


  // response.json(result)
  // response.json(data.knowledge_graph.popular_times.graph_results.monday[0].busyness_score)
  })

module.exports = crowdednessRouter