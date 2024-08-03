import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount'

import './index.css'

function App() {
  return (
    <Router>
    <div className="bg-slate-900 min-h-screen">
      <nav className="bg-slate-600 shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <div>
              <Link className="text-gray-300 hover:text-blue-700 px-3 text-2xl font-bold" to="/login">Login</Link>
              <Link className="text-gray-300 hover:text-blue-700 px-3 text-2xl font-bold" to="/createAccount">Create Account</Link>
            </div>
          <div>
            <Link className="text-gray-300 hover:text-blue-700 px-3" to="/">Home</Link>
            <Link className="text-gray-300 hover:text-blue-700 px-3" to="/about">About</Link>
          </div>
        </div>
      </nav>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createAccount" element={<CreateAccount />} />
        </Routes>
      </div>
    </div>
  </Router>
  )
}

export default App
