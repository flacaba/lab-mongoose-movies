const mongoose = require('mongoose')

const celebritySchema = new mongoose.Schema ({
  title: String,
  occupation: String,
  catchPhrase: String
})

const Celebrity = mongoose.model('Celebrity',celebritySchema)

module.exports = Celebrity