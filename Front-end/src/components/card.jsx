import React from 'react';
import './styles/card.css'
const Card = ({ title, description, difficulty = 'Beginner', students = 0 }) => {
  const difficultyLevel = difficulty?.toLowerCase() || 'beginner';
  
  return (
    <div className="course-card">
      <div className="card-difficulty" data-difficulty={difficultyLevel}>
        {difficulty || 'Beginner'}
      </div>
      <h3 className="card-title">{title || 'Course Title'}</h3>
      <p className="card-description">{description || 'Course description'}</p>
      <div className="card-footer">
        <span className="students-enrolled">
          {students.toLocaleString()} students
        </span>
        <button className="start-btn">Start Learning</button>
      </div>
    </div>
  );
};

export default Card;