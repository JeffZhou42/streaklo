import React from 'react';
import './App.css';
import PhotoCarousel from './PhotoCarousel';
import Habits from './Habits';

function App() {
  const photos = [
    '/photo1.jpg',
    '/photo2.jpg',
    '/photo3.jpg',
    '/photo4.jpg',
    '/photo5.jpg'
  ];

  return (
    <div className="App">
      <div className="streaklo-header">
        <h1 className="streaklo-text">Streaklo</h1>
      </div>
      <header className="greeting-header">
        <div className="greeting-wrapper">
          <h1 className="greeting">hi, john. what's today going to look like?</h1>
        </div>
      </header>
      <h2 className="recap-header">catch up</h2>
      <PhotoCarousel photos={photos} />
      <a href="/habits" className="habits-link">
        <span className="plus-symbol">+</span>
        <span className="habits-text">Habits</span>
      </a>
    </div>
  );
}

export default App;