import React, { useState, useEffect } from 'react';
import './index.css';  // Đảm bảo rằng bạn đã có file CSS

const QuizQuestion = ({ question, options, correctAnswer, onAnswer, reset }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [locked, setLocked] = useState(false);  // Biến để khóa việc chọn lại

  // Reset khi câu hỏi thay đổi
  useEffect(() => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    setLocked(false);  // Mở khóa khi câu hỏi mới xuất hiện
  }, [reset]);

  const handleAnswerSelect = (option) => {
    if (!locked) {
      setSelectedAnswer(option);
      const correct = option === correctAnswer;
      setIsCorrect(correct);
      setLocked(true);  // Khóa lựa chọn
      onAnswer(correct);
    }
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
            style={{ pointerEvents: locked ? 'none' : 'auto' }}  // Khóa tùy chọn sau khi chọn
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
