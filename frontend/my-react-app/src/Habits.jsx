import React from 'react';
import { Link } from 'react-router-dom';
import './Habits.css';

function Habits() {
  return (
    <Link to="/habits" className="habits-link">
      <span className="plus-symbol">+</span>
      <span className="habits-text">Habits</span>
    </Link>
  );
}

export default Habits;