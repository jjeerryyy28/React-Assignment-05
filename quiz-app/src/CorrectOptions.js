import React from "react";

const CorrectOptions = ({ correctAnswers }) => {
  return (
    <div>
      <h1>Correct Options</h1>
      <ul>
        {correctAnswers.map((item, index) => (
          <li key={index}>
            <strong>Question:</strong> {item.question.text}
            <br />
            <strong>Correct Answer:</strong> {item.question.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CorrectOptions;
