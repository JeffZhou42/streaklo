import React from 'react';
import { Link } from 'react-router-dom';
import './Habits.css';

function Habits() {
  return (
    <div className="habits-container">
      <h1 className="habits-header">Habits</h1>
      <ul className="habits-list">
        {/* You can add habit items here if needed */}
        {/* <li className="habit-item">Example Habit</li> */}
      </ul>
      <Link to="/habits" className="habits-link">
        <span className="plus-symbol">+</span>
        <span className="habits-text">Add Habit</span>
      </Link>
    </div>
  );
}

export default Habits;