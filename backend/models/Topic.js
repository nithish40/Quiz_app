const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  name: { type: String, required: true },
  description: {type: String},
});

const Topic = mongoose.model('Topic', topicSchema);
module.exports = Topic;