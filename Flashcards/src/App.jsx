import React, { useState } from "react";
import FlashcardSet from "./FlashcardSet";
import './card.css';

const App = () => {
  const flashcards = [
    { question: "How to sign 'Hello' in Sign Language?", answer: "Wave your hand", difficulty: "Easy", subject: "Learn Sign Language", image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGhtdXYwYmpwZ2Rrb3VzMmhqZGY1aHBrbjBiang1aXNoMGtsOGEzeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tz0O19aZolNsjqP649/giphy.gif" },
    { question: "How to say 'Thank you' in Spanish?", answer: "Gracias", difficulty: "Medium", subject: "Learn Spanish", image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2U3M3RwZjM3dDN1OXUxb3dxbmo2cmtod3VoeDdscTVuamV0cHFtZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QrXZd8JMwLxiFSltEc/giphy.gif" },
    { question: "How to say 'Good Morning' in French?", answer: "Bonjour", difficulty: "Hard", subject: "Learn French", image: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnVsNjg1OTdmd3VyZGg2NjJ2Y2k2NHB2YzZsdzlzeGI0ZDhyY2prMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/js6NXc48PocYEVb2cn/giphy.gif" }
  ];

  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  const filteredFlashcards = flashcards.filter(card => selectedDifficulty === "All" || card.difficulty === selectedDifficulty);

  return (
    <div className="App">
      <h1>Language Flashcards!</h1>
      <p>Learn another language through flashcards!</p>

      <div className="subject-difficulty-buttons">
        <button onClick={() => setSelectedDifficulty("Easy")}>Easy</button>
        <button onClick={() => setSelectedDifficulty("Medium")}>Medium</button>
        <button onClick={() => setSelectedDifficulty("Hard")}>Hard</button>
        <button onClick={() => setSelectedDifficulty("All")}>Show All</button>
      </div>

      <p>Total Cards: {filteredFlashcards.length}</p>

      {filteredFlashcards.length === 0 ? (
        <p>No cards found for this selection.</p>
      ) : (
        <FlashcardSet flashcards={filteredFlashcards} />
      )}
    </div>
  );
};

export default App;
