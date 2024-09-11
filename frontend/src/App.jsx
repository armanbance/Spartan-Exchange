import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount'
import HowCrowded from './components/HowCrowded'
import FitnessPlan from './components/FitnessPlan'

import loginService from './services/login'
import backgroundImage from './assets/SRAC.jpg'

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
      <div className="min-h-screen relative" style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="relative z-10">
          <nav className='bg-gray-400 bg-opacity-15'>
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
              <div className='flex-1'>
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

                    
                    <Link className="text-gray-300 hover:text-blue-700 px-3 font-bold" to="/login">
                      Login
                    </Link>
                    <Link className="text-gray-300 hover:text-blue-700 px-3 font-bold" to="/createAccount">
                      Register
                    </Link>
                    
                  </>
                )}
              </div>
              <div className='flex-1 text-center font-serif'>
                <Link className="text-gray-300  px-3 text-4xl font-bold" to="/">SPARTAN</Link>
                <Link className="text-gray-300  px-3 text-4xl -ml-3 font-bold " to="/">FITNESS</Link>

              </div>
            
              {/* <div className='flex-1 text-center'>
                <Link className="text-gray-300 hover:text-blue-700 px-3 text-5xl font-bold" to="/howCrowded">Crowdedness</Link>
                <Link className="text-gray-300 hover:text-blue-700 px-3 text-5xl font-bold" to="/fitnessPlan">Training</Link>
              </div> */}
              <div className='flex-1 text-right'>
                <Link className="text-gray-300 hover:text-blue-700 px-3 font-bold" to="/howCrowded">Crowdedness</Link>
                <Link className="text-gray-300 hover:text-blue-700 px-3 font-bold" to="/fitnessPlan">Training</Link>
                <Link className="text-gray-300 hover:text-blue-700 px-3 font-bold" to="/about">About</Link>
              </div>
              
            </div>
          </nav>
          <div className="container mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login setUser={setUser}/>} />
              <Route path="/createAccount" element={<CreateAccount />} />
              <Route path="/howCrowded" element={<HowCrowded />} />
              <Route path="/fitnessPlan" element={<FitnessPlan />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
