const ResultSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    subtopicId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subtopic' },
    score: Number,
    submittedAt: Date,
  });
  
  module.exports = mongoose.model('Result', ResultSchema);
  