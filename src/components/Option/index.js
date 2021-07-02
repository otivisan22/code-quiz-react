const Option = ({ option, checkAnswer }) => {
  return (
    <button className="btn btn-outline-primary" onClick={checkAnswer}>
      {option}
    </button>
  );
};

export default Option;
