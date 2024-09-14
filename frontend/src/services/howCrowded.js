import axios from 'axios'
const baseUrl = '/api/crowdedness' 

const howCrowded = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default {howCrowded}; 