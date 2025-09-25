import { useState } from "react";
import QuizQuestion from "./components/quizz";

const App = () => {
  const questions = [
    {
      question:
        "Khi chuyển đến môi trường học (hoặc làm việc) mới, biểu hiện nào cho thấy em có khả năng thích ứng tốt?",
      options: [
        "A. Luôn so sánh môi trường mới với môi trường cũ và phàn nàn.",
        "B. Có cảm xúc tích cực, hào hứng đón nhận môi trường mới.",
        "C. Tránh giao tiếp với mọi người và ở một mình.",
        "D. Chờ người khác giải quyết mọi việc cho mình.",
      ],
      correctAnswer:
        "B. Có cảm xúc tích cực, hào hứng đón nhận môi trường mới.",
    },
    {
      question:
        "Biểu hiện nào cho thấy em dễ dàng bắt đầu công việc và tập trung?",
      options: [
        "A. Luôn trì hoãn đến phút cuối mới làm.",
        "B. Bắt đầu bước nhỏ, lên kế hoạch và làm tập trung để hoàn thành.",
        "C. Chỉ làm khi cảm thấy vui.",
        "D. Làm nhiều việc cùng lúc nhưng không hoàn thành.",
      ],
      correctAnswer:
        "B. Bắt đầu bước nhỏ, lên kế hoạch và làm tập trung để hoàn thành.",
    },
    {
      question:
        "Khi hoàn cảnh sống thay đổi (ví dụ: gia đình chuyển nhà), phản ứng nào là thích ứng tích cực?",
      options: [
        "A. Chấp nhận hoàn cảnh, không than phiền và tìm cách sắp xếp lại cuộc sống.",
        "B. Luôn than phiền và đòi quay về như cũ.",
        "C. Bỏ mặc công việc học tập/nghề nghiệp.",
        "D. Cố gắng thay đổi tất cả mọi người xung quanh theo ý mình.",
      ],
      correctAnswer:
        "A. Chấp nhận hoàn cảnh, không than phiền và tìm cách sắp xếp lại cuộc sống.",
    },
    {
      question:
        "Điều gì giúp điều chỉnh cảm xúc theo hướng tích cực khi gặp thay đổi?",
      options: [
        "A. Lẩn tránh và không nghĩ đến thay đổi.",
        "B. Tập trung vào khía cạnh tiêu cực của sự việc.",
        "C. Nhận diện cảm xúc, tìm cách kiềm chế và tìm giải pháp tích cực.",
        "D. Trút giận lên người khác.",
      ],
      correctAnswer:
        "C. Nhận diện cảm xúc, tìm cách kiềm chế và tìm giải pháp tích cực.",
    },
    {
      question:
        "Dấu hiệu nào cho thấy em vẫn giữ được hiệu quả công việc, mối quan hệ dù có thay đổi?",
      options: [
        "A. Làm việc ngày càng mất năng suất và xa lánh bạn bè.",
        "B. Vẫn hoàn thành nhiệm vụ, duy trì liên lạc và suy nghĩ hợp lý.",
        "C. Bỏ học/ nghỉ việc luôn.",
        "D. Chỉ quan tâm đến bản thân, phớt lờ người khác.",
      ],
      correctAnswer:
        "B. Vẫn hoàn thành nhiệm vụ, duy trì liên lạc và suy nghĩ hợp lý.",
    },
    {
      question:
        "Khi cơ thể có sự thay đổi (ví dụ: ốm, tăng/giảm cân), biểu hiện thích ứng tốt là:",
      options: [
        "A. Từ chối chăm sóc bản thân và buông thả.",
        "B. Phủ nhận bản thân, tự trách móc rất nặng.",
        "C. Chấp nhận bản thân, tìm cách chăm sóc và điều chỉnh thói quen lành mạnh.",
        "D. So sánh bản thân với người khác và ghen tị.",
      ],
      correctAnswer:
        "C. Chấp nhận bản thân, tìm cách chăm sóc và điều chỉnh thói quen lành mạnh.",
    },
    {
      question: "Biện pháp nào sau đây không giúp tăng khả năng thích ứng?",
      options: [
        "A. Duy trì thái độ tích cực và linh hoạt trong suy nghĩ.",
        "B. Lên kế hoạch, xác định mục tiêu nhỏ và bước thực hiện.",
        "C. Cố gắng kiểm soát mọi việc ngoài tầm ảnh hưởng của mình.",
        "D. Tìm kiếm sự hỗ trợ từ bạn bè hoặc người thân khi cần.",
      ],
      correctAnswer:
        "C. Cố gắng kiểm soát mọi việc ngoài tầm ảnh hưởng của mình.",
    },
    {
      question:
        "Khi đứng trước một cột mốc lớn (ví dụ thi đại học, đổi nghề), việc em nên làm để thích ứng là:",
      options: [
        "A. Hoang mang, không chuẩn bị gì cả.",
        "B. Lập kế hoạch, chuẩn bị tinh thần và chấp nhận khả năng thay đổi.",
        "C. Bỏ qua cơ hội vì sợ rủi ro.",
        "D. Trốn tránh, kêu ca để người khác quyết định thay mình.",
      ],
      correctAnswer:
        "B. Lập kế hoạch, chuẩn bị tinh thần và chấp nhận khả năng thay đổi.",
    },
    {
      question:
        "Hành động nào thể hiện làm nhiều việc có ý nghĩa để thích ứng với thay đổi?",
      options: [
        "A. Dành thời gian cho hoạt động phát triển kỹ năng, giúp đỡ người khác và chăm sóc bản thân.",
        "B. Dành hết thời gian lên mạng than vãn.",
        "C. Ngăn cản người khác thay đổi vì sợ mất an toàn.",
        "D. Bỏ qua trách nhiệm hiện tại.",
      ],
      correctAnswer:
        "A. Dành thời gian cho hoạt động phát triển kỹ năng, giúp đỡ người khác và chăm sóc bản thân.",
    },
    {
      question:
        "Trong tình huống thay đổi bất ngờ, yếu tố nào quan trọng nhất để thích ứng?",
      options: [
        "A. Giữ bình tĩnh, phân tích tình huống và tìm giải pháp.",
        "B. Phản ứng vội vàng theo cảm xúc.",
        "C. Đổ lỗi cho người khác.",
        "D. Phớt lờ và mặc kệ mọi thứ.",
      ],
      correctAnswer: "A. Giữ bình tĩnh, phân tích tình huống và tìm giải pháp.",
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
