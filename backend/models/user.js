const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type:String,
    required:true,
    unique:true
  },
  email: {
    type:String,
    required:true,
    unique:true
  },
  passwordHash: String,
  verified: { type: Boolean, default: false },
  verificationToken: { type: String }
  
  
})
// userSchema.index({ email: 1 }, { unique: true });
// userSchema.index({ username: 1 }, { unique: true });
//if duplicate emails stop working just uncomment this

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User