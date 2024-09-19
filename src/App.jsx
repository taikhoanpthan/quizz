import React, { useState } from "react";
import QuizQuestion from "./components/quizz";

const App = () => {
  const questions = [
    {
      question:
        "Theo bạn, việc thể hiện bản thân, dám phát biểu ý kiến của mình trước đám đông, không ngại ngùng là sự gì?",
      options: ["Tự tin", "Tự ti", "Tự cao", "Tự kỷ"],
      correctAnswer: "Tự tin",
    },
    {
      question:
        "Làm thế nào để học sinh rèn luyện sự tự tin và khả năng thích ứng với sự thay đổi trong trường học và cộng đồng?",
      options: [
        "Luôn né tránh các tình huống mới để tránh cảm giác lo lắng",
        "Tích cực tham gia các hoạt động ngoại khóa và tình nguyện để mở rộng kỹ năng và kết nối với mọi người",
        "Chỉ làm những việc mà mình cảm thấy thoải mái và quen thuộc",
        "Không cần chuẩn bị cho thay đổi, vì chúng sẽ tự diễn ra theo cách của chúng",
      ],
      correctAnswer:
        "Tích cực tham gia các hoạt động ngoại khóa và tình nguyện để mở rộng kỹ năng và kết nối với mọi người",
    },
    {
      question:
        "Khi đối mặt với sự thay đổi trong môi trường học tập, học sinh nên làm gì để thích nghi hiệu quả?",
      options: [
        "Tránh xa những thay đổi và cố gắng duy trì thói quen cũ",
        "Chấp nhận thay đổi và tìm cách học hỏi từ tình huống mới",
        "Phụ thuộc hoàn toàn vào người khác để vượt qua sự thay đổi",
        "Phản đối mọi sự thay đổi vì chúng gây ra sự bất tiện",
      ],
      correctAnswer: "Chấp nhận thay đổi và tìm cách học hỏi từ tình huống mới",
    },
    {
      question: "Để cải thiện sự thiếu tự tin thì nên làm gì?",
      options: [
        "Tự nhốt mình trong phòng không giao tiếp với ai",
        "Tự nghĩ mình tài giỏi hơn người khác",
        "Nghĩ mình không bằng ai, mặc cảm",
        "Cố gắng hòa đồng với mọi người",
      ],
      correctAnswer: "Cố gắng hòa đồng với mọi người",
    },
    {
      question:
        "Theo bạn đâu là đáp án đúng nói về những yếu tố nuôi dưỡng tạo nên sự tự tin?",
      options: [
        "Hiểu rõ bản thân, chấp nhận những khuyết điểm, lắng nghe sự đóng góp từ người khác có chọn lọc và phát triển bản thân, tự đưa ra quyết định cho bản thân",
        "Khoe khoang, phô trương nói về bản thân, cho bản thân mình rất hoàn thiện, khinh thường người khác",
        "Tự ti về khuyết điểm của bản thân và cho nó là điều không thể thay đổi",
        "Lun để ý lời nói của mọi người, khi ra một quyết định cho bản thân lun dựa trên câu trả lời của mọi người xung quanh",
      ],
      correctAnswer:
        "Hiểu rõ bản thân, chấp nhận những khuyết điểm, lắng nghe sự đóng góp từ người khác có chọn lọc và phát triển bản thân, tự đưa ra quyết định cho bản thân",
    },
  ];
  // Các câu hỏi khác

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0); // Thêm trạng thái đếm số câu trả lời đúng
  const [isQuizCompleted, setIsQuizCompleted] = useState(false); // Thêm trạng thái bài kiểm tra đã hoàn thành

  const handleAnswer = (isCorrect) => {
    setShowNextButton(true);
    if (isCorrect) {
      setCorrectAnswersCount(correctAnswersCount + 1); // Cập nhật số câu trả lời đúng
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setShowNextButton(false);
    setResetKey(resetKey + 1); // Kích hoạt reset câu hỏi
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setShowNextButton(false);
    setCorrectAnswersCount(0);
    setIsQuizCompleted(false);
    setResetKey(resetKey + 1); // Kích hoạt reset câu hỏi
  };

  const handleQuizCompletion = () => {
    setIsQuizCompleted(true);
    setShowNextButton(false);
  };

  return (
    <div>
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
            reset={resetKey}  // Truyền biến reset vào component
          />
          {showNextButton && currentQuestionIndex < questions.length - 1 && (
            <button className="next-button" onClick={handleNextQuestion}>Câu tiếp theo</button>
          )}
        </>
      ) : (
        <div>
          <p>Đã hoàn thành bài kiểm tra!</p>
          <p>Số câu trả lời đúng: {correctAnswersCount} / {questions.length}</p>
          <button className="next-button" onClick={handleRestartQuiz}>Làm lại bài</button>
        </div>
      )}
    </div>
  );
};


export default App;
