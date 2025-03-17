const QuestionSchema = new mongoose.Schema({
    subtopicId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subtopic' },
    questionText: String,
    options: [String],
    correctAnswer: String,
  });
  
  module.exports = mongoose.model('Question', QuestionSchema);
  