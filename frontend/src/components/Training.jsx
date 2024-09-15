import React from "react";
import { useState, useEffect } from "react";
import Notification from "./Notification";
import trainingService from "../services/training";

function Training() {
  const [training, setTraining] = useState('')
  useEffect(() => {
    const data = async () => {
      const response = await trainingService.training();
      setTraining(response)
    }
    data();
  }, [])

  return (
    <div>
      <div className="text-white text-4xl font-bold text-center">
        Hello World 
      </div>
      <div className="text-white text-5xl font-bold text-center">{training}</div>
    </div>
  );
}

export default Training;
