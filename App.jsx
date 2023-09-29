import React, { useState } from 'react';
import './App.css';

function App() {
  const initialFlashcards = [
    { id: 1, question: 'What is the capital of France?', answer: 'Paris' },
    { id: 2, question: 'Who is the current president of the United States?', answer: 'Joe Biden' },
    { id: 3, question: 'Where is the Eiffel Tower located?', answer: 'Paris' },
    { id: 4, question: 'What is the symbol for Potassium?', answer: 'K' },
    { id: 5, question: 'When was the Declaration of Independence signed?', answer: '1776' },
    { id: 6, question: 'What is the largest country in the world?', answer: 'Russia' },
    { id: 7, question:'who wrote McBeth?', answer: 'Shakespeare'},
    { id: 8, question: 'what is the green pigment in plants called?', answer: 'chlorophyll'},
    { id: 9, question: 'the most abundant element in the universe is?', answer: 'hydrogen'},
    { id: 10, question: 'what is the largest organ in the human body?', answer: 'skin'},
    // Add more flashcards here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const nextFlashcard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % initialFlashcards.length);
    setIsFlipped(false);
  };

  return (
    <div className="App">
      <h1>Fun Facts</h1>
      <p>Learn interesting facts with these flashcards!</p>
      <div className={`flashcard-container ${isFlipped ? 'flipped' : ''}`} onClick={toggleFlip}>
        <div className="flashcard">
          <div className="flashcard-inner">
            <div className="flashcard-front">{initialFlashcards[currentIndex].question}</div>
            <div className="flashcard-back">{initialFlashcards[currentIndex].answer}</div>
          </div>
        </div>
      </div>
      <button onClick={nextFlashcard}>Next</button>
      <p>Number of Fun Facts: {initialFlashcards.length}</p>
    </div>
  );
}

export default App;
