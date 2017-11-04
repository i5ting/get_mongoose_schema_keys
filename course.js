/**
 * Created by alfred on July 1st 2015, 11:52:49 pm.
 */

var mongoose = require('mongoose')
var Schema = mongoose.Schema
var MongooseDao = require('mongoosedao')

var courseSchema = new Schema({
  name: { type: String, unique: true }, //课程名称
  category: String, //分类（/首页/人工智能/系统掌握深度学习）
  price: String, //价格
  picture: String, //头图

})

var course = mongoose.model('Course', courseSchema)
var courseDao = new MongooseDao(course)

module.exports = courseDao