import axios from 'axios'
const baseUrl = '/api/busyness' 

const howCrowded = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default {howCrowded}; 