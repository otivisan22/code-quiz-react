const StartQuiz = ({ onClick }) => {
  return (
    <div className="position-absolute top-50 start-50 translate-middle start-quiz-container">
      <button className="btn btn-success" onClick={onClick}>
        START
      </button>
    </div>
  );
};

export default StartQuiz;
