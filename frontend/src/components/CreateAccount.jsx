import React from "react";
import { useState } from "react";
import userService from "../services/createUser";
import Notification from "./Notification";
import { useNavigate } from 'react-router-dom'

function CreateAccount() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [notification, setNotification] = useState('')
  const [user, setUser] = useState(null)

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      username: username,
      password: password,
      fullName: fullName
    }
    console.log("FULLNAME:",newUser.fullName)
    try {
      await userService.createUser(newUser)
      setNotification(`Hello ${newUser.fullName}! Going to login page...`)
      setUser(newUser)
    }
    catch (error) {
      setNotification('Username is already taken sorry bucko')
    }
    setUsername('')
    setFullName('')
    setPassword('')

    setTimeout(() => {
      navigate('/login');
    }, 1500);
    

  }
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <div className="text-center pt-8">
        <h2 className="text-4xl font-bold">Create a New Account</h2>
      </div>
      <div className="text-center font-bold mt-10">
        {notification && <Notification message={notification}/>}
      </div>
      <div className="pt-12">
        <form onSubmit={handleSubmit} className="text-center">
          <div className="mb-4">
            <label className="block text-lg mb-2">Username:</label>
            <input
              className="bg-gray-200 text-gray-900 p-2 rounded w-64"
              placeholder="Ex: thechosenone"//Enter Username
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2">Full Name:</label>
            <input
              className="bg-gray-200 text-gray-900 p-2 rounded w-64"
              placeholder="Ex: Anakin Skywalker"  //Enter First and Last Name
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2">Password:</label>
            <input
              className="bg-gray-200 text-gray-900 p-2 rounded w-64"
              placeholder="Enter Password" 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4 w-64 hover:bg-blue-700">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
