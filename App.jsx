import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const initialFlashcards = [
    { id: 1, question: 'What is the capital of France?', answer: 'Paris' },
    { id: 2, question: 'Who is the current president of the United States?', answer: 'Joe Biden' },
    { id: 3, question: 'Where is the Eiffel Tower located?', answer: 'Paris' },
    { id: 4, question: 'What is the symbol for Potassium?', answer: 'K' },
    { id: 5, question: 'What year was the Declaration of Independence signed?', answer: '1776' },
    { id: 6, question: 'What is the largest country in the world?', answer: 'Russia' },
    { id: 7, question:'who wrote McBeth?', answer: 'Shakespeare'},
    { id: 8, question: 'what is the green pigment in plants called?', answer: 'chlorophyll'},
    { id: 9, question: 'the most abundant element in the universe is?', answer: 'hydrogen'},
    { id: 10, question: 'what is the largest organ in the human body?', answer: 'skin'},
    // Add more flashcards here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userGuess, setUserGuess] = useState('');
  const [guessResult, setGuessResult] = useState('');
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);


  useEffect(() => {
    setGuessResult('');
    setUserGuess('');
  }, [currentIndex, isFlipped]);


  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const nextFlashcard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % initialFlashcards.length);
    setIsFlipped(false);
  };

  const previousFlashcard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? initialFlashcards.length - 1 : prevIndex - 1
    );
    setIsFlipped(false);
  };

  const handleGuessSubmit = () => {
    const correctAnswer = initialFlashcards[currentIndex].answer.toLowerCase();
    const userGuessLower = userGuess.toLowerCase();

    if (!isFlipped) {
      // Check if the card is not flipped (showing the question)
      if (userGuessLower === correctAnswer && guessResult !== 'Correct!') {
        setCurrentStreak((prevStreak) => prevStreak + 1);
        if (currentStreak + 1 > longestStreak) {
          // Update the longest streak
          setLongestStreak(currentStreak + 1);
        }
        setGuessResult('Correct!');
      } else {
        setGuessResult('Incorrect. Try again.');
        setCurrentStreak(0);
      }
    }
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
      <input
        type="text"
        placeholder="Your guess"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
        disabled={isFlipped}
      />
      <button className="submit-button" onClick={handleGuessSubmit} disabled={isFlipped}>Submit Guess</button>
      {guessResult && <p>{guessResult}</p>}
      <p>Current Streak: {currentStreak}</p> 
      <p>Longest Streak: {longestStreak}</p>
      <button onClick={previousFlashcard}>Previous</button>
      <button onClick={nextFlashcard}>Next</button>
      <p>Number of Fun Facts: {initialFlashcards.length}</p>
    </div>
  );
}

export default App;
