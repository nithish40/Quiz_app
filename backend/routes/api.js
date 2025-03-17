const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const SubCourse = require('../models/SubCourse');
const Question = require('../models/Question');

router.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/subcourses/:courseId', async (req, res) => {
  try {
    const subCourses = await SubCourse.find({ courseId: req.params.courseId });
    res.json(subCourses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/questions/:subCourseId', async (req, res) => {
  try {
    const questions = await Question.find({ subCourseId: req.params.subCourseId });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/submit-test', async (req, res) => {
  try {
    // Here you can add logic to store test results in the database
    // For example, create a new TestResult model
    res.json({ message: 'Test submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;