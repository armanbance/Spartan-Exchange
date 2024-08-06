import React from "react";
import { useState } from "react";


function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    console.log("USERNAME: ",username)
    console.log("PASSWORD: ",password)
  }
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <div className="text-center pt-8">
        <h2 className="text-4xl font-bold">Login</h2>
      </div>
      <div className="pt-12">
        <form onSubmit={handleSubmit} className="text-center">
          <div className="mb-4">
            <label className="block text-lg mb-2">Username:</label>
            <input
              className="bg-gray-200 text-gray-900 p-2 rounded w-64"
              placeholder="Enter Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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

export default Login;
