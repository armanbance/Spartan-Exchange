import axios from 'axios'
const baseUrl = '/api/login'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
  console.log(`login service new token: ${token}`)
}

const login = async (user) => {
  console.log("IN LOGIN",user.email,user.password)
  const response = await axios.post(baseUrl, user)
  return response.data
}

export default { login, setToken }