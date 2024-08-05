const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.post('/', async (request, response) => { //on app.js when this is used, it is /api/users
  const { username, name, password } = request.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    username,
    name,
    passwordHash,
  })

  const savedUser = await user.save()

  response.status(201).json(savedUser)
})

usersRouter.get('/', async (request, response) => {
    const users = await User.find({})
      // .populate('notes', {content:1, important:1}) //whhen we get users we can see the notes they have, instead of just the id of the notes they have.
    //in prev line, content:1 and important:1 make sure only content and important are shown
    response.json(users)
  })

module.exports = usersRouter