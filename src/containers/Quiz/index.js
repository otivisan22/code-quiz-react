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
      timeRemaining: 5,
      gameOver: false,
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

  render() {
    return (
      <div className="position-absolute top-50 start-50 translate-middle quiz-container w-75">
        <div className="card">
          <div className="card-header text-center py-4">
            <h3>Time Remaining: {this.state.timeRemaining}</h3>
          </div>
          <div className="card-body text-center">
            <QuestionAnswer
              question={questions[0].title}
              options={questions[0].options}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
