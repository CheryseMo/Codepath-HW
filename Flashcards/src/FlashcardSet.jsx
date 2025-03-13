import React, { useState } from "react";
import Card from "./Card";

const FlashcardSet = ({ flashcards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(Math.floor(Math.random() * flashcards.length));
  const [showAnswer, setShowAnswer] = useState(false);

  // Function to show the next random card
  const nextCard = () => {
    setCurrentCardIndex(Math.floor(Math.random() * flashcards.length));
    setShowAnswer(false); // Reset to showing the question when a new card is shown
  };

  // Function to toggle between question and answer
  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="flashcard-set">
      <Card
        question={flashcards[currentCardIndex].question}
        answer={flashcards[currentCardIndex].answer}
        showAnswer={showAnswer}
        onClickAnswer={toggleAnswer}
        difficulty={flashcards[currentCardIndex].difficulty}
        subject={flashcards[currentCardIndex].subject}
        image={flashcards[currentCardIndex].image}
      />
      <button onClick={nextCard}>Next Card</button> {/* Button to show the next random card */}
    </div>
  );
};

export default FlashcardSet;
