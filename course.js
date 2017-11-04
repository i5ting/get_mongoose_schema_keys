var mongoose = require('mongoose')
var Schema = mongoose.Schema
var MongooseDao = require('mongoosedao')

var courseSchema = new Schema({
  name: { type: String, unique: true },
  category: String,
  price: String,
  picture: String

})

var course = mongoose.model('Course', courseSchema)
var courseDao = new MongooseDao(course)

module.exports = courseDao
