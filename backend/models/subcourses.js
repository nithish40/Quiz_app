const subCourseSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: true
    },
    description: {
      type: String,
      required: false
    }
  });
  
  const SubCourse = mongoose.model('SubCourse', subCourseSchema);