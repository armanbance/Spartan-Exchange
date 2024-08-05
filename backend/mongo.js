const mongoose = require('mongoose')
const password = MONGODB_URI="mongodb+srv://armanbance:AkqlWksJQg3s2Kgu@cluster0.tkdqbww.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0"
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