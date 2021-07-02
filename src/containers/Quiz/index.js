import { Component } from "react";

import QuestionAnswer from "../../components/QuestionAnswer";

const questions = [
  {
    title: "Which of these is NOT a way to declare a variable in Javascript?",
    options: ["const", "set", "let", "var"],
    answer: "set",
  },

  {
    title: "JavaScript variables are usually written in which type of case?",
    options: ["lowercase", "UPPERCASE", "camelCase", "CapitalCase"],
    answer: "camelCase",
  },

  {
    title: "Object properties are made up of pairs of keys and _____?",
    options: ["values", "properties", "variables", "arrays"],
    answer: "values",
  },

  {
    title:
      "What do we call the values received by a function when it is invoked?",
    options: ["variables", "arguments", "parameters", "inputs"],
    answer: "arguments",
  },
  {
    title: "Which of the following is NOT a Javascript array method?",
    options: [".join()", ".pop()", ".unshift()", ".combine()"],
    answer: ".combine()",
  },
];

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeRemaining: 60,
      gameOver: false,
      currentQuestionIndex: 0,
      questions,
    };
  }

  componentDidMount() {
    const timerTick = () => {
      if (this.state.timeRemaining === 0) {
        clearInterval(timer);
        this.setState({
          gameOver: true,
        });
      } else {
        this.setState({
          timeRemaining: this.state.timeRemaining - 1,
        });
      }
    };

    const timer = setInterval(timerTick, 1000);
  }

  checkAnswer = () => {
    if (this.state.currentQuestionIndex < this.state.questions.length - 1) {
      this.setState({
        currentQuestionIndex: this.state.currentQuestionIndex + 1,
      });
    } else {
      this.setState({
        gameOver: true,
      });
    }
  };

  render() {
    const { timeRemaining, gameOver, currentQuestionIndex } = this.state;

    const question = questions[currentQuestionIndex];

    return (
      <div className="position-absolute top-50 start-50 translate-middle quiz-container w-75">
        <div className="card">
          <div className="card-header text-center py-4">
            <h3>Time Remaining: {timeRemaining}</h3>
          </div>
          <div className="card-body text-center">
            {gameOver ? (
              <h1>GAME OVER</h1>
            ) : (
              <QuestionAnswer
                question={question.title}
                options={question.options}
                checkAnswer={this.checkAnswer}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
