const Option = ({ option, checkAnswer }) => {
  return (
    <button
      className="btn btn-outline-primary"
      onClick={checkAnswer}
      data-option={option}
    >
      {option}
    </button>
  );
};

export default Option;
