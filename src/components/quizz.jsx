import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Howl } from 'howler';
import './index.css';

// Khởi tạo âm thanh
const correctSound = new Howl({ src: ['/sounds/correct.mp3'] });
const incorrectSound = new Howl({ src: ['/sounds/incorrect.mp3'] });

const QuizQuestion = ({ question, options, correctAnswer, onAnswer, reset }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    setLocked(false);
  }, [reset]);

  const handleAnswerSelect = (option) => {
    if (!locked) {
      const correct = option === correctAnswer;
      setSelectedAnswer(option);
      setIsCorrect(correct);
      setLocked(true);
      onAnswer(correct);

      // Phát nhạc khi trả lời
      if (correct) {
        correctSound.play();
      } else {
        incorrectSound.play();
      }
    }
  };

  return (
    <motion.div 
      className="quiz-question"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="question">{question}</h3>
      <ul className="options">
        {options.map((option, index) => (
          <li
            key={index}
            className={`option ${selectedAnswer === option ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
            onClick={() => handleAnswerSelect(option)}
            style={{ pointerEvents: locked ? 'none' : 'auto' }}
          >
            {option}
          </li>
        ))}
      </ul>
      {selectedAnswer && (
        <motion.p
          className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {isCorrect ? 'Chính xác!' : `Sai rồi! Đáp án đúng là: ${correctAnswer}`}
        </motion.p>
      )}
    </motion.div>
  );
};

export default QuizQuestion;
