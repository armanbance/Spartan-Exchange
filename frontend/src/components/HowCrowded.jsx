import React, { useEffect } from "react";
import { useState } from "react";
import Notification from "./Notification";
import { useNavigate } from 'react-router-dom'
import howCrowdedService from "../services/howCrowded";
import timeService from "../services/time"

function HowCrowded() {
  const [busyness, setBusyness] = useState(0)
  const [day, setDay] = useState("")
  const [time, setTime] = useState([])

  useEffect(() => {
    const data = async () => {
      const response = await howCrowdedService.howCrowded();
      setBusyness(response.busyness)
      setDay(response.day)
    }
    data();
  }, [])

  useEffect(() => {
    const time = async () => {
      const response = await timeService.time();
      setTime(response)
    }
    time();

    const intervalId = setInterval(time, 1000);
    return () => clearInterval(intervalId);
    
  }, [])

  

  return (
    <div className="text-white text-4xl font-bold text-center">
      How Busy is the SRAC at {time} on a {day}?
      <div className="w-full h-10 bg-gray-300 rounded-full mt-4">
        <div 
          className="h-full bg-green-400 rounded-full transition-width duration-500 ease-in-out" 
          style={{ width: `${busyness}%` }} 
        >
        </div>
      </div>
      <div>Busyness Rating: {busyness}/100 </div>
      <br></br>
    </div>
  );
}

export default HowCrowded;
