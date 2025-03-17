import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

function Courses() {
    const courses = [
        "Data Structures",
        "Web Technology",
        "Data Science",
        "Cloud Computing",
        "Cyber Security",
        "UI/UX Design"
    ];

    const subCoursesMap = {
        "Data Structures": ["Arrays", "Linked Lists" ,"Stack","Queue" ,"Trees" , "Graphs"],
        "Web Technology": ["HTML", "CSS", "JavaScript"],
        "Data Science": ["Machine Learning", "Data Analysis", "Big Data"],
        "Cloud Computing": ["AWS", "Azure", "Google Cloud"],
        "Cyber Security": ["Network Security", "Ethical Hacking", "Cryptology"],
        "UI/UX Design": ["UI Principles", "UX Research", "Prototyping"]
    };

    const [selectedCourse, setSelectedCourse] = useState(courses[0]);
    const [selectedSubcourse, setSelectedSubcourse] = useState(null);

    const navigate = useNavigate(); // Initialize useNavigate

    const handleCourseClick = (course) => {
        setSelectedCourse(course);
        setSelectedSubcourse(null); // Reset subcourse selection when changing course
    };

    const handleTest = (subcourse) => {
        setSelectedSubcourse(subcourse);
        console.log(`Starting test for ${subcourse} in ${selectedCourse}`);
        // Navigate to quiz page with course and subcourse data
        navigate('/quiz', { state: { course: selectedCourse, subcourse } });
    };

    return (
        <div className="maincontainer">
            <div className="corecourse">
                <h1>Courses</h1>
                <ul>
                    {courses.map((course, index) => (
                        <li
                            key={index}
                            onClick={() => handleCourseClick(course)}
                            className={selectedCourse === course ? "coursename selected" : "coursename"}>
                            {course}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="subcourses">
                {selectedCourse && (
                    <ul>
                        {subCoursesMap[selectedCourse].map((subCourse, index) => (
                            <li key={index} className="subcoursename">
                                {subCourse}
                                <button
                                    type="button"
                                    className="start-course-test"
                                    onClick={() => handleTest(subCourse)}>
                                    Start
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Courses;
