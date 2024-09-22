const bcrypt = require('bcrypt')
const crypto = require('crypto')
const nodemailer = require('nodemailer')
const usersRouter = require('express').Router()
const User = require('../models/user')
const config = require('../utils/config')


const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: config.EMAIL,
    pass: config.EMAIL_PASSWORD,
  },
})

usersRouter.post('/', async (request, response) => { //on app.js when this is used, it is /api/users
  const { username, email, password } = request.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const verificationToken = crypto.randomBytes(32).toString('hex')

  const user = new User({
    username,
    email,
    passwordHash,
    verificationToken,
    verified: false,
  })

  try{
    const savedUser = await user.save()

    const mailOptions = {
      from: `${config.EMAIL}@gmail.com`,
      to: email,
      subject: 'Account Verification',
      text: `Click on this link to verify your account: http://localhost:3000/api/users/verify/${verificationToken}`,
    }
    await transporter.sendMail(mailOptions)

    response.status(201).send("Success! Please check email for verification:")
  }
  catch (error) {
    if(error.message.includes("email")) {
      console.log("BRUH: ", error.message)
      response.status(401).send("Email already in use")
    }
    else if(error.message.includes("username")) {
      console.log("Duplicate username")
      response.status(401).send("Username already in use")
    }
    else if(error.message.includes("EmailError")) {
      response.status(401).send("failed to send email")
    }
    else {
      console.log("HERE IS ERROR:",error)
      response.status(400).send("An error has occurred, please try again")
    }
    console.log(error)
  }
})

usersRouter.get('/verify/:token', async (request, response) => {
  const { token } = request.params

  try {
    const user = await User.findOne({ verificationToken: token })

    if (!user) {
      return response.status(400).send('Invalid or expired token.')
    }

    user.verified = true
    user.verificationToken = undefined // Remove the token after successful verification
    await user.save()

    response.status(200).send('Email verified successfully.')
  } catch (error) {
    console.log(error.message)
    response.status(500).send('Error verifying account.')
  }
})

usersRouter.get('/', async (request, response) => {
    const users = await User.find({})
      // .populate('notes', {content:1, important:1}) //whhen we get users we can see the notes they have, instead of just the id of the notes they have.
    //in prev line, content:1 and important:1 make sure only content and important are shown
    response.json(users)
  })

usersRouter.delete('/', async (request, response) => {
  const deleteAll = await User.deleteMany({})
  response.json(deleteAll)
})

module.exports = usersRouter