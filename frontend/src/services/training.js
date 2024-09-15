import axios from 'axios'
const baseUrl = '/api/training' 


const training = async () => {
  const response = await axios.get(baseUrl)
  // let num = parseInt(response.data)
  // if (num>12) {
  //   let hour = num-12;
  //   let minute = response.data.substring(3,5)
  //   console.log((hour+":"+minute))
  //   let time = hour+":"+minute
  //   return time
  // }
  return response.data;
}

export default {training}; 