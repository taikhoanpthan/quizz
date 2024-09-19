import React, { useState, useEffect } from 'react';
import './index.css';  // Đảm bảo file CSS vẫn được import

const QuizQuestion = ({ question, options, correctAnswer, onAnswer, reset }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  // Reset khi câu hỏi thay đổi
  useEffect(() => {
    setSelectedAnswer(null);
    setIsCorrect(null);
  }, [reset]);

  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option);
    const correct = option === correctAnswer;
    setIsCorrect(correct);
    onAnswer(correct);
  };

  return (
    <div className="quiz-question">
      <h3 className="question">{question}</h3>
      <ul className="options">
        {options.map((option, index) => (
          <li
            key={index}
            className={`option ${selectedAnswer === option ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
            onClick={() => handleAnswerSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
      {selectedAnswer && (
        <p className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
          {isCorrect ? 'Chính xác!' : `Sai rồi! Đáp án đúng là: ${correctAnswer}`}
        </p>
      )}
    </div>
  );
};

export default QuizQuestion;
