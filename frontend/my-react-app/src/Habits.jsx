import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Habits.css';

function HabitContainer({ title, emoji, goal, streak, progress, rank, friends }) {
  return (
    <div className="habit-container">
      <h2>{title} {emoji}</h2>
      <p>Track your {title.toLowerCase()} {emoji} habit</p>
      
      <h3>Goal</h3>
      <p>{goal}</p>
      
      <h3>Streak</h3>
      <p className="streak">{streak} days 🔥</p>
      <div className="progress-bar">
        <div className="progress" style={{width: `${progress}%`}}></div>
      </div>
      
      <h3>Your place</h3>
      <p>{rank}</p>
      
      <h3>Highest streak friends</h3>
      <ul className="friend-list">
        {friends.map((friend, index) => (
          <li key={index}>{friend.name} - {friend.streak} days {friend.medal}</li>
        ))}
      </ul>
      
      <button className="track-button">Track Today 📅</button>
    </div>
  );
}

function Habits() {
  const [isAddingHabit, setIsAddingHabit] = useState(false);
  const [newHabit, setNewHabit] = useState('');

  const handleAddHabit = () => {
    if (isAddingHabit && newHabit.trim()) {
      // Add the new habit logic here
      console.log('New habit:', newHabit);
      setNewHabit('');
    }
    setIsAddingHabit(!isAddingHabit);
  };

  return (
    <div className="habits-page">
      <header className="habits-header">
        <div className="add-habit-container">
          <button 
            className={`add-habit-button ${isAddingHabit ? 'active' : ''}`} 
            onClick={handleAddHabit}
          >
            <span className="add-habit-icon">+</span>
            {isAddingHabit ? 'Add' : 'Add habit'}
          </button>
          {isAddingHabit && (
            <input
              type="text"
              className="add-habit-input"
              value={newHabit}
              onChange={(e) => setNewHabit(e.target.value)}
              placeholder="Enter new habit"
              autoFocus
            />
          )}
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/user">User</Link>
          <Link to="/habits" className="active">Habit</Link>
        </nav>
      </header>
      <div className="habits-grid">
        <HabitContainer 
          title="Gym"
          emoji="💪"
          goal="Complete gym 5 times a week"
          streak={3}
          progress={60}
          rank="4th place 🥉"
          friends={[
            { name: "Alice", streak: 7, medal: "🥇" },
            { name: "Bob", streak: 5, medal: "🥈" },
            { name: "Charlie", streak: 4, medal: "🥉" }
          ]}
        />
        <HabitContainer 
          title="Reading"
          emoji="📚"
          goal="Read for 30 minutes daily"
          streak={5}
          progress={75}
          rank="2nd place 🥈"
          friends={[
            { name: "David", streak: 8, medal: "🥇" },
            { name: "Eve", streak: 6, medal: "🥈" },
            { name: "Frank", streak: 3, medal: "🥉" }
          ]}
        />
        <HabitContainer 
          title="Studying"
          emoji="📝"
          goal="Study for 2 hours daily"
          streak={2}
          progress={40}
          rank="5th place"
          friends={[
            { name: "Grace", streak: 10, medal: "🥇" },
            { name: "Henry", streak: 7, medal: "🥈" },
            { name: "Ivy", streak: 5, medal: "🥉" }
          ]}
        />
      </div>
    </div>
  );
}

export default Habits;