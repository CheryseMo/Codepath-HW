import React, { useState } from "react";
import Card from "./Card";

const FlashcardSet = ({ flashcards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userGuess, setUserGuess] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [streak, setStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [masteredCards, setMasteredCards] = useState([]);

  // Move to next card
  const nextCard = () => {
    setFeedback(null);
    setShowAnswer(false);
    setUserGuess("");
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  // Move to previous card
  const prevCard = () => {
    setFeedback(null);
    setShowAnswer(false);
    setUserGuess("");
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length
    );
  };

  // Shuffle the flashcards
  const shuffleCards = () => {
    flashcards.sort(() => Math.random() - 0.5);
    setCurrentCardIndex(0);
  };

  // Check user's answer
  const checkAnswer = () => {
    if (userGuess.trim().toLowerCase() === flashcards[currentCardIndex].answer.toLowerCase()) {
      setFeedback("Correct!");
      setStreak((prev) => {
        const newStreak = prev + 1;
        if (newStreak > longestStreak) setLongestStreak(newStreak);
        return newStreak;
      });
    } else {
      setFeedback("Incorrect. Try again!");
      setStreak(0);
    }
  };

  // Mark a card as mastered
  const markAsMastered = () => {
    setMasteredCards([...masteredCards, flashcards[currentCardIndex]]);
  };

  // Filter out mastered cards
  const activeCards = flashcards.filter(card => !masteredCards.includes(card));

  return (
    <div className="flashcard-set">
      {activeCards.length > 0 ? (
        <>
          <Card
            question={activeCards[currentCardIndex].question}
            answer={activeCards[currentCardIndex].answer}
            showAnswer={showAnswer}
            onClickAnswer={() => setShowAnswer(!showAnswer)}
            difficulty={activeCards[currentCardIndex].difficulty}
            subject={activeCards[currentCardIndex].subject}
            image={activeCards[currentCardIndex].image}
          />

          <input
            type="text"
            placeholder="Enter your guess..."
            value={userGuess}
            onChange={(e) => setUserGuess(e.target.value)}
          />
          <button onClick={checkAnswer}>Submit</button>
          {feedback && <p>{feedback}</p>}

          <div className="navigation-buttons">
            <button onClick={prevCard}>Previous</button>
            <button onClick={nextCard}>Next</button>
          </div>

          <button onClick={shuffleCards}>Shuffle</button>
          <button onClick={markAsMastered}>Mark as Mastered</button>

          <p>Current Streak: {streak}</p>
          <p>Longest Streak: {longestStreak}</p>
        </>
      ) : (
        <p>All cards mastered! Well done!</p>
      )}
    </div>
  );
};

export default FlashcardSet;
