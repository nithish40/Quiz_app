const quizschema=new mongoose.Schema({
  topicId: {type: mongoose.Schema.Types.ObjectId, ref: 'Topic', readOnly: true},
  question: {type: String, required: true},
  options: [{type: String, required: true}],
  correctAnswer: {type: String, required: true},
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
  subCourseId: {type: mongoose.Schema.Types.ObjectId, ref: 'SubCourse', required: true},
});
const Quiz=mongoose.model('Quiz',quizschema);

module.exports=Quiz;