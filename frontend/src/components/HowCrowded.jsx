import React, { useEffect } from "react";
import { useState } from "react";
import Notification from "./Notification";
import { useNavigate } from 'react-router-dom'
import howCrowdedService from "../services/howCrowded";
import timeService from "../services/time"

function HowCrowded() {
  const [result, setResult] = useState([])
  const [time, setTime] = useState([])

  useEffect(() => {
    const data = async () => {
      const response = await howCrowdedService.howCrowded();
      setResult(response)
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
      How Crowded is the SRAC at {time}?
      <div>Busyness Rating: {result} </div>
      <br></br>
    </div>
  );
}

export default HowCrowded;
