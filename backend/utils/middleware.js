const logger = require('./logger')

const requestLogger = (request, response, next) => {
  logger.info('Method:', request.method)
  logger.info('Path:  ', request.path)
  logger.info('Body:  ', request.body)
  logger.info('---')
  next()
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  logger.error(error.message)
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  } 
  else if (error.name === 'MongoServerError' && error.message.includes('E11000 duplicate key error') && error.message.includes('email')) {
    console.log('Email is already in use')
    return response.status(400).json({ error: 'Email is already in use' })
  } 
  else if (error.name === 'MongoServerError' && error.message.includes('E11000 duplicate key error')) {
    console.log('Username is taken by another user')
    return response.status(400).json({ error: 'Username is taken by another user' })
  } 
  else if (error.name ===  'JsonWebTokenError') {
    return response.status(401).json({ error: 'token invalid' })
  } else if (error.name === 'TokenExpiredError') {
    return response.status(401).json({
      error: 'token expired'
    })
  } else if (error.name === 'EmailError') {
    return response.status(500).json({ error: 'Failed to send verification email' })
  } 
  // Handle invalid token error during verification
  else if (error.name === 'InvalidTokenError') {
    return response.status(400).json({ error: 'Invalid or expired verification token' })
  }
  else if (error.name === 'InvalidTokenError') {
    return response.status(400).json({ error: 'Invalid or expired verification token' })
  }

  next(error)
}

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler
}