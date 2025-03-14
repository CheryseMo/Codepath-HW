import React from "react";

// Utility function to get the CSS class based on difficulty
const getCardStyle = (difficulty) => {
  if (difficulty === "Easy") return "easy-card";
  if (difficulty === "Medium") return "medium-card";
  if (difficulty === "Hard") return "hard-card";
  return "";
};

const Card = ({ question, answer, showAnswer, onClickAnswer, difficulty, subject, image }) => {
  const cardStyle = getCardStyle(difficulty);

  return (
    <div className={`card ${cardStyle}`} onClick={onClickAnswer}>
      <div className="card-content">
        <h3>{showAnswer ? answer : question}</h3>
        <img src={image} alt="flashcard" className="card-image" />
        <p className="category">{subject} - {difficulty}</p>
      </div>
    </div>
  );
};

export default Card;
