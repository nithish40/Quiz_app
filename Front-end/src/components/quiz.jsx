import React, { useState, useEffect } from "react";
import "./styles/quiz.css";
function Quiz() {
  const addquestionmap = {
    "What is an array?": [
      "An array is a data structure that stores a collection of elements of the same type in contiguous memory locations.",
      "An array is a data structure which stores values in contiguous memory locations",
      "An array is a data structure which stores the same type in non-contiguous memory locations",
      "None of the Above",
    ],
    "What is the correct way to initialize an array": [
      "int arr[size]",
      "int arr",
      "int [size]arr",
      "None of the above",
    ],
    "What is the time complexity of accessing an element in an array (linear search)":
      ["O(n)", "O(logn)", "O(nlogn)", "None"],
    "What is the difference between arrays and vectors in C++?": [
      "Arrays have a fixed size determined at compile time, while vectors are dynamic arrays that can grow or shrink in size at runtime.",
      "Arrays can store elements of different types, while vectors can only store elements of the same type.",
      "both a & b",
      "None",
    ],
    "What is the correct way to find the length of an array": [
      "int length = sizeof(myArray) / sizeof(myArray[0]);",
      "int length = myArray.size();",
      "int length = sizeof(myArray);",
      "None",
    ],
    "How do you access elements of an array in C++?": [
      "myArray[0]",
      "myArray.first()",
      "myArray.at(0);",
      "None",
    ],
    "Is it possible to change the size of an array once it has been declared in C++?":
      [
        "No, the size of an array in C++ is fixed once it is declared.",
        "Yes, you can change the size of an array using the resize() function.",
        "Don't know",
        "None of this",
      ],
    "What is the time complexity of accessing an element in an array (binary search)":
      ["O(n)", "O(logn)", "O(nlogn)", "None"],
    "What is the difference between declaring an array with int array[5] and int* array = new int[5] in C++?":
      [
        "The first declaration creates a statically allocated array, while the second creates a dynamically allocated array.",
        "Both declarations create arrays with the same properties.",
        "both a & b",
        "None of the above",
      ],
    "Select the Application of an array from the following": [
      "sliding window",
      "knapsack",
      "job scheduling",
      "rod cutting",
    ],
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const [question, setQuestion] = useState(
    Array(Object.keys(addquestionmap).length).fill("not-visited")
  );
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(Object.keys(addquestionmap).length).fill("")
  );

  const handleButton = (index) => {
    setActiveIndex(index);
    // Only update to 'visited' if it's not already answered
    if (question[index] === "not-visited") {
      const newArrayOfQuestions = [...question];
      newArrayOfQuestions[index] = "visited";
      setQuestion(newArrayOfQuestions);
    }
  };

  const handleOptionClick = (option) => {
    const updatedSelectedAnswers = [...selectedAnswers];
    updatedSelectedAnswers[activeIndex] = option;
    setSelectedAnswers(updatedSelectedAnswers);

    const newArrayOfQuestions = [...question];
    newArrayOfQuestions[activeIndex] = "answered";
    setQuestion(newArrayOfQuestions);
  };

  function getButtonColor(state, isActive) {
    if (isActive) return "blue"; // Current question
    switch (state) {
      case "answered":
        return "#4CAF50"; // Green for answered questions
      case "visited":
        return "#F44336"; // Red for visited but not answered
      case "not-visited":
        return "white"; // White for not visited
      default:
        return "white";
    }
  }

  const answeredCount = question.filter((q) => q === "answered").length;
  const notViewedCount = question.filter((q) => q === "not-visited").length;
  const skippedCount = question.filter((q) => q === "skipped").length;

  function startTimer(duration, display) {
    let timer = duration;
    const intervalId = setInterval(function () {
      let minutes = parseInt(timer / 60, 10);
      let seconds = parseInt(timer % 60, 10);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      display.textContent = minutes + ":" + seconds;
      if (--timer < 0) {
        clearInterval(intervalId);
        alert("Timer finished!");
      }
    }, 1000);
  }

  useEffect(() => {
    var oneHour = 60 * 60;
    var display = document.querySelector(".timer");
    startTimer(oneHour, display);
  }, []);

  const endTest = () => {
    let score = 0;
    const questions = Object.keys(addquestionmap);
    for (let i = 0; i < questions.length; i++) {
      const currentQuestion = questions[i];
      const currentQuestionOptions = addquestionmap[currentQuestion];
      const selectedAnswer = selectedAnswers[i];
      if (selectedAnswer === currentQuestionOptions[0]) {
        score++;
        console.log(`Question ${i + 1}: Correct answer!`);
      } else {
        console.log(`Question ${i + 1}: Incorrect answer!`);
      }
    }
    console.log(`Total Score: ${score}`);
    window.location.href = "/result";
  };

  return (
    <div className="quiz-template">
      <div>
        <nav>
          <div className="quiz-name">Name of the Quiz</div>
          <div className="details">User details</div>
          <div className="submission">
            <div className="timer"></div>
            <button className="submit-test" onClick={endTest}>
              Submit Test
            </button>
          </div>
        </nav>
      </div>
      <div className="main">
        <div className="question-number-container">
          <div className="question-number">
            {question.map((state, index) => (
              <button
                key={index}
                className={`qtn ${state}`}
                onClick={() => handleButton(index)}
                style={{
                  backgroundColor: getButtonColor(state, index === activeIndex),
                }}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="question-info">
            <div className="answered">
              <p>Answered: {answeredCount}</p>
            </div>
            <div className="skipped">
              <p>Skipped: {skippedCount}</p>
            </div>
            <div className="notviewed">
              <p>Not viewed: {notViewedCount}</p>
            </div>
          </div>
        </div>
        <div className="question-block">
          <div className="question-details">
            <p>{Object.keys(addquestionmap)[activeIndex]}</p>
          </div>
          <div className="problem-statement">
            <ul>
              {addquestionmap[Object.keys(addquestionmap)[activeIndex]].map(
                (option, index) => (
                  <li key={index} onClick={() => handleOptionClick(option)}>
                    {option}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="marks"></div>
        </div>
        <div className="answer">
          <div className="answer-block">
            <div className="options">
              {addquestionmap[Object.keys(addquestionmap)[activeIndex]].map(
                (option, index) => (
                  <div
                    className="option"
                    key={index}
                    onClick={() => handleOptionClick(option)}
                  >
                    <input
                      type="radio"
                      name={`options-${activeIndex}`}
                      checked={selectedAnswers[activeIndex] === option}
                      onChange={() => handleOptionClick(option)}
                    />
                    <label>{option}</label>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="submission-block">
            <button className="clear">Clear</button>
            <button className="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
