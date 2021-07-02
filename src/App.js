import { Component } from "react";

import StartQuiz from "./components/StartQuiz";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showStartContainer: true,
    };
  }

  startQuiz = () => {
    this.setState({
      showStartContainer: false,
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
      </div>
    );
  }
}

export default App;
