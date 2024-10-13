import React, { useState } from "react";
import QuizQuestion from "./components/quizz";

const App = () => {
  const questions = [
    {
      question:
        "Bạn phải làm gì để xây dựng 1 mối quan hệ lành mạnh với bạn bè?",
      options: [
        "A. Giúp đỡ khi bạn bè gặp khó khăn.",
        "B. Rủ rê bạn bè tham gia các hình thức đánh bạc.",
        "C. Khuyên ngăn khi bạn mình làm sai hay có suy nghĩ lệch lạc.",
        "D. Cả A và C.",
      ],
      correctAnswer: "D. Cả A và C.",
    },
    {
      question:
        "Để khuyến khích học sinh tham gia xây dựng và phát triển nhà trường, nhà trường làm như thế nào?",
      options: [
        "A. Tổ chức các cuộc thi",
        "B. Thưởng cho những ý tưởng sáng tạo",
        "C. Đưa ra các hoạt động đoàn thể",
        "D. Tất cả các đáp án trên",
      ],
      correctAnswer: "D. Tất cả các đáp án trên",
    },
    {
      question:
        "Xây dựng và phát triển nhà trường là nhiệm vụ của chủ thể nào sau đây?",
      options: [
        "A. Giáo viên",
        "B. Học sinh, sinh viên",
        "C. Các nhà quản lí giáo dục",
        "D. Tất cả các chủ thể trên.",
      ],
      correctAnswer: "D. Tất cả các chủ thể trên.",
    },
    {
      question:
        "Cần phải làm gì để đóng góp xây dựng và phát huy truyền thống nhà trường?",
      options: [
        "A. Không đi học đầy đủ",
        "B. Tích cực tham gia các hoạt động",
        "C. Lôi kéo các bạn không tham gia các hoạt động",
        "D. Thờ ơ với các hoạt động nhà trường tổ chức.",
      ],
      correctAnswer: "B. Tích cực tham gia các hoạt động",
    },
    {
      question:
        "Làm gì để thể hiện sự tôn trọng và lễ phép với thầy cô và người lớn tuổi khi gặp ở trường và ngoài trường?",
      options: [
        "A. Gặp thầy cô nhưng không quan tâm",
        "B. Thể hiện thái độ chết bỏ, chẳng coi ai ra gì.",
        "C. Nói chuyện hỗn láo không dùng kính ngữ (nói trống không).",
        "D. Chào hỏi lễ phép, dùng thái độ vui tươi hòa nhã.",
      ],
      correctAnswer: "D. Chào hỏi lễ phép, dùng thái độ vui tươi hòa nhã.",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const handleAnswer = (isCorrect) => {
    setShowNextButton(true);
    if (isCorrect) setCorrectAnswersCount(correctAnswersCount + 1);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setShowNextButton(false);
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setShowNextButton(false);
    setCorrectAnswersCount(0);
    setIsQuizCompleted(false);
  };

  const handleQuizCompletion = () => {
    setIsQuizCompleted(true);
  };

  return (
    <div className="quiz-app">
      <div className="quiz-container">
        {!isQuizCompleted ? (
          <>
            <QuizQuestion
              question={questions[currentQuestionIndex].question}
              options={questions[currentQuestionIndex].options}
              correctAnswer={questions[currentQuestionIndex].correctAnswer}
              onAnswer={(isCorrect) => {
                handleAnswer(isCorrect);
                if (currentQuestionIndex === questions.length - 1) {
                  handleQuizCompletion();
                }
              }}
              reset={currentQuestionIndex} // Truyền reset dựa trên chỉ số câu hỏi hiện tại
            />
            {showNextButton && currentQuestionIndex < questions.length - 1 && (
              <button className="next-button" onClick={handleNextQuestion}>
                Câu tiếp theo
              </button>
            )}
          </>
        ) : (
          <div>
            <p>Đã hoàn thành bài kiểm tra!</p>
            <p>
              Số câu trả lời đúng: {correctAnswersCount} / {questions.length}
            </p>
            <button className="next-button" onClick={handleRestartQuiz}>
              Làm lại bài
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
