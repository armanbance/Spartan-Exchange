const config = require('./utils/config')
const app = require('./app')
const logger = require('./utils/logger')

app.listen(PORT, () => {
  console.log(`Server running on port ${config.PORT}`,`${config.MONGODB_URI}`)
})