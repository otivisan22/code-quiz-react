import { Component } from "react";

import StartQuiz from "./components/StartQuiz";
import Quiz from "./containers/Quiz";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showStartContainer: true,
      quizInProgress: false,
    };
  }

  startQuiz = () => {
    this.setState({
      showStartContainer: false,
      quizInProgress: true,
    });
  };

  render() {
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>CODE QUIZ</h1>
        </div>

        {this.state.showStartContainer && (
          <StartQuiz onClick={this.startQuiz} />
        )}

        {this.state.quizInProgress && <Quiz />}
      </div>
    );
  }
}

export default App;
