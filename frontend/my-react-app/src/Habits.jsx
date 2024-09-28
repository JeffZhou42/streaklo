import React from 'react';
import { Link } from 'react-router-dom';
import './Habits.css';

function Habits() {
  return (
    <div className="habits-page">
      <header className="habits-header">
        <h1>Streaklo 🚀</h1>
        <nav>
          <Link to="/">Home 🏠</Link>
          <Link to="/user">User 👤</Link>
          <Link to="/habits" className="active">Habit 📊</Link>
        </nav>
      </header>
      <div className="habit-container">
        <h2>Gym 💪</h2>
        <p>Track your gym 💪 habit</p>
        
        <h3>Goal</h3>
        <p>Complete gym 💪 5 times a week</p>
        
        <h3>Streak</h3>
        <p className="streak">3 days 🔥</p>
        <div className="progress-bar">
          <div className="progress" style={{width: '60%'}}></div>
        </div>
        
        <h3>Your place</h3>
        <p>4th place 🥉</p>
        
        <h3>Highest streak friends</h3>
        <ul className="friend-list">
          <li>Alice - 7 days 🥇</li>
          <li>Bob - 5 days 🥈</li>
          <li>Charlie - 4 days 🥉</li>
        </ul>
        
        <h3>Progress Photos</h3>
        <div className="photo-input">
          <input type="text" placeholder="Photo URL" />
          <button>📷 Add</button>
        </div>
        
        <button className="track-button">Track Today 📅</button>

        
      </div>
    </div>
  );
}

export default Habits;