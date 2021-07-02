import "./App.css";

const App = () => {
  const startQuiz = () => {
    console.log("start quiz");
  };

  return (
    <div>
      <div className="jumbotron text-center">
        <h1>CODE QUIZ</h1>
      </div>

      <div className="position-absolute top-50 start-50 translate-middle start-quiz-container">
        <button className="btn btn-success" onClick={startQuiz}>
          START
        </button>
      </div>
    </div>
  );
};

export default App;
