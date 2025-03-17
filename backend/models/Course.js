const mongoose = require('mongoose');

const courseschema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String},
});

const Course = mongoose.model('Subtopic', courseschema);
module.exports = Course;
