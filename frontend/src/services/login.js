import axios from 'axios'
const baseUrl = '/api/login'

const login = async (user) => {
  console.log("IN LOGIN",user.email,user.password)
  const response = await axios.post(baseUrl, user)
  return response.data
}

export default { login }