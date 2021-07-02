import Option from "../Option";

const QuestionAnswer = ({ question, options, checkAnswer }) => {
  const renderOptions = () => {
    return options.map((option) => {
      return <Option key={option} option={option} checkAnswer={checkAnswer} />;
    });
  };

  return (
    <div>
      <div className="my-4">
        <h5>{question}</h5>
      </div>
      <div className="d-grid gap-2">{renderOptions()}</div>
    </div>
  );
};

export default QuestionAnswer;
