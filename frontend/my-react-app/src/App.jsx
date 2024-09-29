import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
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
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <header className="streaklo-header">
                <h1 className="streaklo-text">Streaklo </h1>
              </header>
              <div className="greeting-header">
                <h2 className="greeting">Good morning, John</h2>
              </div>
              <h3 className="recap-header">What you've missed:</h3>
              <PhotoCarousel photos={photos} />
              <Link to="/habits" className="habits-link">
                <span className="plus-symbol">+</span>
                <span className="habits-text">Habits</span>
              </Link>
            </>
          } />
          <Route path="/habits" element={<Habits />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;