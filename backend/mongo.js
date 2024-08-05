const mongoose = require('mongoose')
const config = require('./utils/config')
const password = config.MONGODB_URI

const url =
  `mongodb+srv://fullstack:${password}@cluster0.o1opl.mongodb.net/?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'multiversus is easy',
  important: true,
})

note.save().then(result => {
  mongoose.connection.close()
})