import React from "react";
import { useState } from "react";
import Notification from "./Notification";

function HowCrowded() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [notification, setNotification] = useState('')
  const [user, setUser] = useState(null)
  return (
    <div className="text-white text-4xl font-bold text-center">
      Personal fitness plan
    </div>
  );
}

export default HowCrowded;
