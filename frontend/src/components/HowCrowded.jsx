import React from "react";
import { useState } from "react";
import Notification from "./Notification";
import { useNavigate } from 'react-router-dom'

function HowCrowded() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [notification, setNotification] = useState('')
  const [user, setUser] = useState(null)

  const navigate = useNavigate();

  return (
    <div className="text-white text-4xl font-bold text-center">
      how crowded is it
    </div>
  );
}

export default HowCrowded;
