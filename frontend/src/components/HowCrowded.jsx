import React, { useEffect } from "react";
import { useState } from "react";
import Notification from "./Notification";
import { useNavigate } from 'react-router-dom'
import howCrowdedService from "../services/howCrowded";

function HowCrowded() {
  const [result, setResult] = useState([])
  const [test, setTest] = useState('')

  useEffect(() => {
    const data = async () => {
      console.log("WE in data")
      const response = await howCrowdedService.howCrowded();
      setResult(response)
    }
    data();
  }, [])

  

  return (
    <div className="text-white text-4xl font-bold text-center">
      How Crowded is the SRAC?
      <div>
        <div>
          {result && <div>{result}</div>}
        </div>
      </div>
    </div>
  );
}

export default HowCrowded;
