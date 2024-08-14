import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount'
import loginService from './services/login'

import './index.css'

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedInSpartan');
    if (loggedUserJSON) {
      const tokenedUser = JSON.parse(loggedUserJSON);
      setUser(tokenedUser);
      loginService.setToken(tokenedUser.token)
    }
  }, []);

  const handleLogout = () => {
    window.localStorage.removeItem('loggedInSpartan');
    setUser(null);
  };

  return (
    <Router>
    <div className="bg-slate-900 min-h-screen">
      <nav className="bg-slate-600 shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <div>
              {user ? (
                  <>
                    <button
                      onClick={handleLogout}
                      className="text-gray-300 hover:text-blue-700 px-3 text-xl font-bold"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link className="text-gray-300 hover:text-blue-700 text-xl px-3 font-bold" to="/login">
                      Login
                    </Link>
                    <Link className="text-gray-300 hover:text-blue-700 text-xl px-3 font-bold" to="/createAccount">
                      Create Account
                    </Link>
              
                  </>
                )}
            </div>
            <div>
              <Link className="text-gray-300 hover:text-blue-700 px-3 text-xl font-bold" to="/about">About</Link>
              <Link className="text-gray-300 hover:text-blue-700 px-3 text-xl font-bold" to="/">Home</Link>
            </div>
        </div>
      </nav>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login setUser={setUser}/>} />
          <Route path="/createAccount" element={<CreateAccount />} />
        </Routes>
      </div>
    </div>
  </Router>
  )
}

export default App
