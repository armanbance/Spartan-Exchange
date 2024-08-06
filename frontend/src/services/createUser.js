import axios from 'axios'
const baseUrl = '/api/users' //or just users?

const createUser = async (user) => {
  console.log("HERE USER:",user)
  const response = await axios.post(baseUrl, user)
  return response.data
}

export default {createUser}; 