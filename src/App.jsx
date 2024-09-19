import React, { useState } from 'react';
import QuizQuestion from './components/quizz';

const App = () => {
  const questions = [
    {
      question: "Theo bạn, việc thể hiện bản thân, dám phát biểu ý kiến của mình trước đám đông, không ngại ngùng là sự gì?",
      options: ["Tự tin", "Tự ti", "Tự cao", "Tự kỷ"],
      correctAnswer: "Tự tin"
    },
    {
      question: "Làm thế nào để học sinh rèn luyện sự tự tin và khả năng thích ứng với sự thay đổi trong trường học và cộng đồng?",
      options: [
        "Luôn né tránh các tình huống mới để tránh cảm giác lo lắng",
        "Tích cực tham gia các hoạt động ngoại khóa và tình nguyện để mở rộng kỹ năng và kết nối với mọi người",
        "Chỉ làm những việc mà mình cảm thấy thoải mái và quen thuộc",
        "Không cần chuẩn bị cho thay đổi, vì chúng sẽ tự diễn ra theo cách của chúng"
      ],
      correctAnswer: "Tích cực tham gia các hoạt động ngoại khóa và tình nguyện để mở rộng kỹ năng và kết nối với mọi người"
    },
    {
      question: "Khi đối mặt với sự thay đổi trong môi trường học tập, học sinh nên làm gì để thích nghi hiệu quả?",
      options: [
        "Tránh xa những thay đổi và cố gắng duy trì thói quen cũ",
        "Chấp nhận thay đổi và tìm cách học hỏi từ tình huống mới",
        "Phụ thuộc hoàn toàn vào người khác để vượt qua sự thay đổi",
        "Phản đối mọi sự thay đổi vì chúng gây ra sự bất tiện"
      ],
      correctAnswer: "Chấp nhận thay đổi và tìm cách học hỏi từ tình huống mới"
    },
    {
      question: "Để cải thiện sự thiếu tự tin thì nên làm gì?",
      options: [
        "Tự nhốt mình trong phòng không giao tiếp với ai",
        "Tự nghĩ mình tài giỏi hơn người khác",
        "Nghĩ mình không bằng ai, mặc cảm",
        "Cố gắng hòa đồng với mọi người"
      ],
      correctAnswer: "Cố gắng hòa đồng với mọi người"
    },
    {
      question: "Theo bạn đâu là đáp án đúng nói về những yếu tố nuôi dưỡng tạo nên sự tự tin?",
      options: [
        "Hiểu rõ bản thân, chấp nhận những khuyết điểm, lắng nghe sự đóng góp từ người khác có chọn lọc và phát triển bản thân, tự đưa ra quyết định cho bản thân",
        "Khoe khoang, phô trương nói về bản thân, cho bản thân mình rất hoàn thiện, khinh thường người khác",
        "Tự ti về khuyết điểm của bản thân và cho nó là điều không thể thay đổi",
        "Lun để ý lời nói của mọi người, khi ra một quyết định cho bản thân lun dựa trên câu trả lời của mọi người xung quanh"
      ],
      correctAnswer: "Hiểu rõ bản thân, chấp nhận những khuyết điểm, lắng nghe sự đóng góp từ người khác có chọn lọc và phát triển bản thân, tự đưa ra quyết định cho bản thân"
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  const handleAnswer = () => {
    setShowNextButton(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setShowNextButton(false);
    setResetKey(resetKey + 1); // Kích hoạt reset câu hỏi
  };

  return (
    <div>
      <QuizQuestion
        question={questions[currentQuestionIndex].question}
        options={questions[currentQuestionIndex].options}
        correctAnswer={questions[currentQuestionIndex].correctAnswer}
        onAnswer={handleAnswer}
        reset={resetKey}  // Truyền biến reset vào component
      />
      {showNextButton && currentQuestionIndex < questions.length - 1 && (
        <button className="next-button" onClick={handleNextQuestion}>Câu tiếp theo</button>
      )}
      {showNextButton && currentQuestionIndex === questions.length - 1 && (
        <p>Đã hoàn thành bài kiểm tra!</p>
      )}
    </div>
  );
};

export default App;
