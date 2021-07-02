import { Component } from "react";

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeRemaining: 60,
    };
  }

  render() {
    return (
      <div className="position-absolute top-50 start-50 translate-middle quiz-container w-75">
        <div className="card">
          <div className="card-header text-center py-4">
            <h3>Time Remaining: {this.state.timeRemaining}</h3>
          </div>
          <div className="card-body text-center">
            Render the question and answers here
          </div>
        </div>
      </div>
    );
  }
}

export default Quiz;
