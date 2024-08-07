import React, { useState, useEffect, useRef } from 'react';
import '../App.css'; // Import the updated CSS file

// Large pool of questions
const allQuestions = [
  // Data Science Questions
  {
    questionText: "Which Python library is commonly used for data visualization?",
    answerOptions: [
      { answerText: "matplotlib", isCorrect: true },
      { answerText: "scikit-learn", isCorrect: false },
      { answerText: "NumPy", isCorrect: false },
    ],
  },
  {
    questionText: "What is the purpose of the 'fit' method in machine learning?",
    answerOptions: [
      { answerText: "To train the model with data", isCorrect: true },
      { answerText: "To test the model", isCorrect: false },
      { answerText: "To preprocess data", isCorrect: false },
    ],
  },
  {
    questionText: "What does 'p-value' help determine in hypothesis testing?",
    answerOptions: [
      { answerText: "The strength of the null hypothesis", isCorrect: false },
      { answerText: "The significance of the result", isCorrect: true },
      { answerText: "The correlation between variables", isCorrect: false },
    ],
  },
  {
    questionText: "What is the primary function of 'cross-validation' in machine learning?",
    answerOptions: [
      { answerText: "To prevent overfitting", isCorrect: true },
      { answerText: "To optimize the model parameters", isCorrect: false },
      { answerText: "To increase training data", isCorrect: false },
    ],
  },
  {
    questionText: "In data science, what does 'data normalization' aim to achieve?",
    answerOptions: [
      { answerText: "Standardize the range of features", isCorrect: true },
      { answerText: "Increase the size of the dataset", isCorrect: false },
      { answerText: "Reduce the number of features", isCorrect: false },
    ],
  },
  
  // Programming Languages Questions
  {
    questionText: "Which symbol is used to denote comments in Python?",
    answerOptions: [
      { answerText: "#", isCorrect: true },
      { answerText: "//", isCorrect: false },
      { answerText: "/* */", isCorrect: false },
    ],
  },
  {
    questionText: "What is the purpose of the 'return' keyword in functions?",
    answerOptions: [
      { answerText: "To exit the function", isCorrect: false },
      { answerText: "To specify the output of the function", isCorrect: true },
      { answerText: "To define the function's name", isCorrect: false },
    ],
  },
  {
    questionText: "Which programming language is known for its use in web development and has syntax similar to JavaScript?",
    answerOptions: [
      { answerText: "TypeScript", isCorrect: true },
      { answerText: "Java", isCorrect: false },
      { answerText: "Swift", isCorrect: false },
    ],
  },
  {
    questionText: "What does the 'print' function do in most programming languages?",
    answerOptions: [
      { answerText: "Outputs data to the console", isCorrect: true },
      { answerText: "Inputs data from the user", isCorrect: false },
      { answerText: "Writes data to a file", isCorrect: false },
    ],
  },
  {
    questionText: "In JavaScript, what does 'NaN' stand for?",
    answerOptions: [
      { answerText: "Not a Number", isCorrect: true },
      { answerText: "Null and Not", isCorrect: false },
      { answerText: "Not available Number", isCorrect: false },
    ],
  },
  
  // Web Development Questions
  {
    questionText: "What does the 'box-sizing' CSS property do?",
    answerOptions: [
      { answerText: "Controls how the width and height of an element are calculated", isCorrect: true },
      { answerText: "Changes the font size of an element", isCorrect: false },
      { answerText: "Adjusts the margin and padding of an element", isCorrect: false },
    ],
  },
  {
    questionText: "Which HTML element is used to display a block of text in an indented format?",
    answerOptions: [
      { answerText: "<pre>", isCorrect: true },
      { answerText: "<blockquote>", isCorrect: false },
      { answerText: "<div>", isCorrect: false },
    ],
  },
  {
    questionText: "What does the 'display: flex' CSS property do?",
    answerOptions: [
      { answerText: "Creates a flexible layout structure", isCorrect: true },
      { answerText: "Sets an element to be invisible", isCorrect: false },
      { answerText: "Changes the font style", isCorrect: false },
    ],
  },
  {
    questionText: "How do you include an external CSS file in an HTML document?",
    answerOptions: [
      { answerText: "<link rel='stylesheet' href='styles.css'>", isCorrect: true },
      { answerText: "<style src='styles.css'></style>", isCorrect: false },
      { answerText: "<script src='styles.css'></script>", isCorrect: false },
    ],
  },
  {
    questionText: "Which HTML attribute is used to add a tooltip to an element?",
    answerOptions: [
      { answerText: "title", isCorrect: true },
      { answerText: "alt", isCorrect: false },
      { answerText: "tooltip", isCorrect: false },
    ],
  },
  
  // Simple Cloud Computing Questions
  {
    questionText: "What does SaaS stand for in cloud computing?",
    answerOptions: [
      { answerText: "Software as a Service", isCorrect: true },
      { answerText: "System as a Service", isCorrect: false },
      { answerText: "Server as a Service", isCorrect: false },
    ],
  },
  {
    questionText: "Which cloud service model provides virtualized computing resources over the internet?",
    answerOptions: [
      { answerText: "IaaS", isCorrect: true },
      { answerText: "PaaS", isCorrect: false },
      { answerText: "SaaS", isCorrect: false },
    ],
  },
  {
    questionText: "What is the main benefit of using cloud storage?",
    answerOptions: [
      { answerText: "Accessibility from anywhere with an internet connection", isCorrect: true },
      { answerText: "Increased local storage capacity", isCorrect: false },
      { answerText: "Better performance of local applications", isCorrect: false },
    ],
  },
  {
    questionText: "What does 'scalability' refer to in cloud computing?",
    answerOptions: [
      { answerText: "The ability to increase or decrease resources as needed", isCorrect: true },
      { answerText: "The speed of data transfer", isCorrect: false },
      { answerText: "The security of data storage", isCorrect: false },
    ],
  },
  {
    questionText: "Which service allows you to run code without provisioning servers in cloud computing?",
    answerOptions: [
      { answerText: "Serverless computing", isCorrect: true },
      { answerText: "Virtual Machines", isCorrect: false },
      { answerText: "Database as a Service", isCorrect: false },
    ],
  },
];


  export const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [time, setTime] = useState(15); // Timer in seconds
  
    const timerRef = useRef(time);
  
    useEffect(() => {
      timerRef.current = time;
    }, [time]);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (time > 0 && !showScore) {
          setTime(time - 1);
        } else {
          clearInterval(interval);
          if (!showScore) {
            handleNextQuestion();
          }
        }
      }, 1000);
      return () => clearInterval(interval);
    }, [time, showScore]);
  
    const handleAnswerOptionClick = (isCorrect, index) => {
      setSelectedAnswer(index);
      if (isCorrect) {
        setScore(score + 1);
      } 
      setTimeout(() => handleNextQuestion(), 2000); // Move to the next question after a short delay
    };
  
    const handleNextQuestion = () => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < allQuestions.length) {
        setCurrentQuestion(nextQuestion);
        setTime(15); // Reset timer for the next question
        setSelectedAnswer(null); // Reset the selected answer
      } else {
        setShowScore(true);
      }
    };
  
    const handleReplay = () => {
      setCurrentQuestion(0);
      setScore(0);
      setShowScore(false);
      setTime(15); // Reset timer for the replay
      setSelectedAnswer(null);
    };
  
    return (
      <div className="quiz-container">
        <h2 className="quiz-title">Test your knowledge!</h2>
        {!showScore && (
          <>
            <div className="timer">Time remaining: {time} seconds</div>
            <div className="question-section">
              {allQuestions[currentQuestion].questionText}
            </div>
            <div className="answer-section">
              {allQuestions[currentQuestion].answerOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerOptionClick(option.isCorrect, index)}
                  className={`answer-button ${selectedAnswer === index && option.isCorrect ? 'correct' : ''} ${selectedAnswer === index && !option.isCorrect ? 'incorrect' : ''}`}
                  disabled={selectedAnswer !== null} // Disable buttons after selecting an answer
                >
                  {option.answerText} {selectedAnswer !== null && (
                    option.isCorrect ? <span>✔️</span> : <span>❌</span>
                  )}
                </button>
              ))}
            </div>
          </>
        )}
        {showScore && (
          <div className="score-section">
            You scored {score} out of {allQuestions.length}<br />
            <button className="replay-button" onClick={handleReplay}>
              Replay
            </button>
          </div>
        )}
      </div>
    );
  };