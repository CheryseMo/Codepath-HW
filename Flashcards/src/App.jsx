import React, { useState } from "react";
import FlashcardSet from "./FlashcardSet";
import './card.css';

const App = () => {
  const flashcards = [
    // Easy Category - Learn Sign Language
    {
      question: "How to sign 'Hello' in Sign Language?",
      answer: "Wave your hand",
      difficulty: "Easy",
      subject: "Learn Sign Language",
      image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGhtdXYwYmpwZ2Rrb3VzMmhqZGY1aHBrbjBiang1aXNoMGtsOGEzeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tz0O19aZolNsjqP649/giphy.gif"
    },
    {
      question: "How to sign 'Thank you' in Sign Language?",
      answer: "Place fingertips to chin and move hand forward",
      difficulty: "Easy",
      subject: "Learn Sign Language",
      image: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3AycXFnYzBuZGFraGlqZ3ZqYzhhenp6aXkxbzltOWp1ajNmaHd5YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iAoz6HVfoOtsFQNfQv/giphy.gif"
    },

    // Medium Category - Learn Spanish
    {
      question: "How to say 'Thank you' in Spanish?",
      answer: "Gracias",
      difficulty: "Medium",
      subject: "Learn Spanish",
      image: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2U3M3RwZjM3dDN1OXUxb3dxbmo2cmtod3VoeDdscTVuamV0cHFtZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QrXZd8JMwLxiFSltEc/giphy.gif"
    },
    {
      question: "How to say 'Please' in Spanish?",
      answer: "Por favor",
      difficulty: "Medium",
      subject: "Learn Spanish",
      image: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2VpMzJqbDBobzJzMThxZmZ0b2VudGhybDlzcXI2OWEwbjA5bnI4eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6vXNQiixBMsf4Dra/giphy.gif"
    },

    // Hard Category - Learn French
    {
      question: "How to say 'Good Morning' in French?",
      answer: "Bonjour",
      difficulty: "Hard",
      subject: "Learn French",
      image: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnVsNjg1OTdmd3VyZGg2NjJ2Y2k2NHB2YzZsdzlzeGI0ZDhyY2prMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/js6NXc48PocYEVb2cn/giphy.gif"
    },
    {
      question: "How to say 'Thank you' in French?",
      answer: "Merci",
      difficulty: "Hard",
      subject: "Learn French",
      image: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnAwdjgwdDRsaGNqNzM2dG52ZnJvajNtMGUwOTByNWFscDYzMWJkdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uubR8g9eSQL8NHFfRD/giphy.gif"
    }
  ];

  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedSubject, setSelectedSubject] = useState('All');

  // Function to filter cards by difficulty and subject
  const filterCards = (difficulty, subject) => {
    setSelectedDifficulty(difficulty);
    setSelectedSubject(subject);
  };

  // Filter the flashcards based on difficulty and subject
  const filteredFlashcards = flashcards.filter(card => {
    const matchDifficulty = selectedDifficulty === 'All' || card.difficulty === selectedDifficulty;
    const matchSubject = selectedSubject === 'All' || card.subject === selectedSubject;
    return matchDifficulty && matchSubject;
  });

  // Log filteredFlashcards to verify it's working as expected
  console.log(filteredFlashcards);  // Add this line to check filtered cards

  return (
    <div className="App">
      <h1>Language Flashcards!</h1>
      <p>Learn another language through flashcards!</p>

      {/* Combined Subject & Difficulty buttons */}
      <div className="subject-difficulty-buttons">
        <button onClick={() => filterCards('Easy', 'Learn Sign Language')}>Easy - Learn ASL</button>
        <button onClick={() => filterCards('Medium', 'Learn Spanish')}>Medium - Learn Spanish</button>
        <button onClick={() => filterCards('Hard', 'Learn French')}>Hard - Learn French</button>
        <button onClick={() => filterCards('All', 'All')}>Show All</button>
      </div>

      <p>Total Cards: {filteredFlashcards.length}</p>

      {/* Fallback if no cards match */}
      {filteredFlashcards.length === 0 ? (
        <p>No cards found for this selection. Please adjust your filters.</p>
      ) : (
        <FlashcardSet flashcards={filteredFlashcards} />
      )}
    </div>
  );
};

export default App;
