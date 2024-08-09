import React from "react";
import { useState } from "react";
import loginService from '../services/login'
import Notification from "./Notification";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [notification, setNotification] = useState('')
  const [user, setUser] = useState('')

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault()
    const credentials = {
      email:email,
      password:password
    }
    try {
      const response = await loginService.login(credentials)
      setNotification(`Signed in.`)
      setUser(response)
      console.log("USER",response)
      window.localStorage.setItem(
        'loggedInSpartan', JSON.stringify(response)
      )
      // setTimeout(() => {
      //   navigate('/');
      // }, 1000);
    }
    catch (error) {
      setNotification("Invalid credentials")
      setTimeout(() => {
        setNotification('')
      }, 1750);
    }
    setEmail('')
    setPassword('')

  }
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <div className="text-center pt-8">
        <h2 className="text-4xl font-bold">Login</h2>
      </div>
      <div className="text-center mt-10 text-pretty font-bold text-2xl">
        {notification && <Notification message={notification}/>}
      </div>
      <div className="pt-12">
        <form onSubmit={handleSubmit} className="text-center">
          <div className="mb-4">
            <label className="block text-lg mb-2">Email:</label>
            <input
              className="bg-gray-200 text-gray-900 p-2 rounded w-64"
              placeholder="Enter Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
