require('dotenv').config()

const PORT = process.env.PORT
const SECRET = process.env.SECRET
const SERP_API_KEY = process.env.SERP_API_KEY
const MONGODB_URI = process.env.NODE_ENV === 'test' 
  ? process.env.TEST_MONGODB_URI
  : process.env.MONGODB_URI
module.exports = {
  MONGODB_URI,
  PORT,
  SECRET,
  SERP_API_KEY
}