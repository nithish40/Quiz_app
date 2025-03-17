import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function Quizz() {
  const location = useLocation();
  const { courseId, subCourseId, courseName, subCourseName } = location.state;
  
  const [questions, setQuestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [questionStates, setQuestionStates] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  useEffect(() => {
    fetchQuestions();
  }, [subCourseId]);

  const fetchQuestions = async () => {
    try {
      const response = await axios.get(`/api/questions/${subCourseId}`);
      setQuestions(response.data);
      setQuestionStates(Array(response.data.length).fill('not-visited'));
      setSelectedAnswers(Array(response.data.length).fill(''));
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleButton = (index) => {
    setActiveIndex(index);
    const newArrayOfQuestions = [...questionStates];
    newArrayOfQuestions[index] = selectedAnswers[index] !== '' ? 'answered' : 'visited';
    setQuestionStates(newArrayOfQuestions);
  };

  const handleOptionClick = (option) => {
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[activeIndex] = option;
    setSelectedAnswers(updatedSelectedAnswers);
    
    const newArrayOfQuestions = [...questionStates];
    newArrayOfQuestions[activeIndex] = option !== '' ? 'answered' : 'skipped';
    setQuestionStates(newArrayOfQuestions);
  };

  const endTest = async () => {
    try {
      const results = questions.map((question, index) => ({
        questionId: question._id,
        selectedAnswer: selectedAnswers[index],
        correct: selectedAnswers[index] === question.correctAnswer
      }));

      await axios.post('/api/submit-test', {
        courseId,
        subCourseId,
        results
      });

      window.location('/result');
    } catch (error) {
      console.error('Error submitting test:', error);
    }
  };

  // ... rest of the Quiz component (timer, UI rendering) remains the same
  
  return (
    <div>
      {/* ... existing JSX structure ... */}
      <div className="question-block">
        {questions.length > 0 && (
          <>
            <div className="question-details">
              <p>{questions[activeIndex].text}</p>
            </div>
            <div className="problem-statement">
              <ul>
                {questions[activeIndex].options.map((option, index) => (
                  <li key={index} onClick={() => handleOptionClick(option)}>
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
      {/* ... rest of the JSX ... */}
    </div>
  );
}

export default Quizz;